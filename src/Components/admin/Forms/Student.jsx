import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { postRequest } from "../../../services";
import { getErrorMessages } from "../../../Constant/helpers";
import useFetch from "../../../hooks/UseFetch";

const Student = () => {
  const email = useSelector((state) => state.admincredslice.username);
  const password = useSelector((state) => state.admincredslice.password);
  const { data, error, loading } = useFetch("/api/quiz/classes_data/");
  const [fields, setFields] = useState({
    name: "",
    phone: "",
    location: "",
    dob: null,
    gender: "",
    class: "",
    section: "",
    admissionDate: new Date(),
    parent: 1,
  });
  const [filteredSections, setFilteredSections] = useState([]);
  const [classSelected, setClassSelected] = useState(false); // State to track if class is selected

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });

    // Update classSelected state based on class selection
    if (name === "class") {
      setClassSelected(!!value); // Convert value to boolean
    }
  };

  useEffect(() => {
    if (fields.class && data) {
      const selectedClass = data.find((item) => item.standard === fields.class);
      setFilteredSections(selectedClass ? selectedClass.section : []);
    }
  }, [fields.class, data]);

  const handleSubmit = async () => {
    const {
      name,
      phone,
      location,
      dob,
      gender,
      section,
      admissionDate,
      parent,
    } = fields;

    const payload = {
      Username: name,
      email,
      phone,
      password,
      location,
      dob,
      gender: gender.toLowerCase(),
      standard: fields.class,
      section,
      admission_date: admissionDate,
      parent,
    };

    try {
      const res = await postRequest("/api/studentadmin/studentadmin/", payload);
      if (res.ok) {
        toast.success("Student registered successfully.");
        setFields({
          name: "",
          phone: "",
          location: "",
          dob: null,
          gender: "",
          class: "",
          section: "",
          admissionDate: null,
          parent,
        });
      } else {
        const data = await res.json();
        const message = getErrorMessages(data);
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server error, please try again later.");
    }
  };

  return (
    <>
      <Toaster />
      <div className="row px-4 m-0">
        <div className="col-md-12">
          <h4 className="text-center fs-6 fw-bold py-3">
            Student General Information
          </h4>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="fname" className="text-capitalize">
                Full name
              </label>
              <input
                type="text"
                placeholder="Peter Parker"
                className="form-control"
                id="fname"
                name="name"
                onChange={handleChange}
                value={fields.name}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="phone" className="text-capitalize">
                Phone
              </label>
              <input
                type="number"
                placeholder="+92238724842"
                className="form-control"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={fields.phone}
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="location" className="text-capitalize">
                Location
              </label>
              <input
                type="text"
                placeholder="Lahore"
                className="form-control"
                id="location"
                name="location"
                onChange={handleChange}
                value={fields.location}
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="dob" className="text-capitalize">
                Date of birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                onChange={handleChange}
                value={fields.dob}
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="gender" className="text-capitalize">
                Gender
              </label>
              <select
                className="form-select"
                id="gender"
                name="gender"
                onChange={handleChange}
                value={fields.gender}
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="class" className="text-capitalize">
                Class
              </label>
              <select
                className="form-select"
                id="class"
                name="class"
                onChange={handleChange}
                value={fields.class}
              >
                <option value="" disabled>
                  Select class
                </option>
                {loading && <option>Loading...</option>}
                {error && <option>Error loading classes</option>}
                {data &&
                  data.map((item, index) => (
                    <option key={index} value={item.standard}>
                      {item.standard}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="section" className="text-capitalize">
                Section
              </label>
              <select
                className="form-select"
                id="section"
                name="section"
                onChange={handleChange}
                value={fields.section}
              >
                {!classSelected && (
                  <option value="" disabled>
                    First select the class
                  </option>
                )}
                {classSelected &&
                  (loading ? (
                    <option>Loading...</option>
                  ) : (
                    <>
                      {error && <option>Error loading sections</option>}
                      {filteredSections.map((section, index) => (
                        <option key={index} value={section}>
                          {section}
                        </option>
                      ))}
                    </>
                  ))}
              </select>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="admissionDate" className="text-capitalize">
                Admission date
              </label>
              <input
                type="date"
                className="form-control"
                id="admissionDate"
                name="admissionDate"
                onChange={handleChange}
                value={fields.admissionDate}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group mt-4">
              <button
                className="btn btn-primary bg-main"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
