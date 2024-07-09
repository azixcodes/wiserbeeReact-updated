import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { postRequest } from "../../../services/index";
import toast, { Toaster } from "react-hot-toast";
import useFetch from "../../../hooks/UseFetch";
import { getErrorMessages } from "../../../Constant/helpers";

const Teacher = () => {
  const email = useSelector((state) => state.admincredslice.username);
  const password = useSelector((state) => state.admincredslice.password);
  const { data, error, loading } = useFetch("/api/quiz/classes_data/");
  const [classFields, setClassFields] = useState([
    { class: "", section: "", subject: "" },
  ]);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    dob: null,
    gender: "male",
    joiningDate: null,
    combinations: null,
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddInputs = () => {
    setClassFields([...classFields, { class: "", section: "", subject: "" }]);
  };

  const handleRemoveInputs = (index) => {
    const newFields = [...classFields];
    newFields.splice(index, 1);
    setClassFields(newFields);
  };

  const handleDynamicFields = (value, field, index) => {
    const newFields = [...classFields];
    newFields[index][field] = value;
    setClassFields(newFields);
  };

  // dynamic options
  const renderSectionOptions = (index) => {
    const classFieldValue = classFields[index].class;

    if (!classFieldValue) {
      return <option disabled selected>Select class first</option>;
    }

    const filteredSections = data.filter(
      (item) => item.standard === classFieldValue
    );

    const sections = filteredSections.flatMap((item) => item.section);

    return sections.map((section, index) => (
      <option key={index}>{section}</option>
    ));
  };

  const renderSubjectOptions = (index) => {
    const classFieldValue = classFields[index].class;

    if (!classFieldValue) {
      return <option disabled selected>Select class first</option>;
    }

    const filteredSubjects = data.filter(
      (item) => item.standard === classFieldValue
    );

    const subjects = filteredSubjects.flatMap((item) =>
      item.add_subjects.map((sub) => sub.name)
    );

    return subjects.map((subject, index) => (
      <option key={index}>{subject}</option>
    ));
  };

  const handleSave = async () => {
    const { username, phone, location, dob, gender, joiningDate } = formData;
    const payload = {
      Username: username,
      email: email,
      phone,
      password,
      location,
      dob,
      gender,
      joining_date: joiningDate,
      combinations: classFields,
    };

    try {
      const res = await postRequest("/teacher_admin/teacheradmin/", payload);

      if (res.ok) {
        toast.success("Teacher registered successfully.");
      } else {
        const data = await res.json();
        const message = getErrorMessages(data);
        toast.error(message);
      }
    } catch (err) {
      toast.error("Connection failed");
    }
  };

  return (
    <>
      <Toaster />
      <div className="row px-4 m-0" style={{ height: "75vh", overflowY: "auto" }}>
        <div className="col-md-12">
          <h4 className="text-center fs-6 fw-bold py-3">
            Teacher General Information
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
                name="username"
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="" className="text-capitalize">
                Date of birth
              </label>
              <input
                type="date"
                className="form-control"
                name="dob"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="location" className="text-capitalize">
                Gender
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="gender"
                onChange={handleInputChange}
                value={formData.gender}
              >
                <option>male</option>
                <option>female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="class">Joining Date</label>

              <input
                type="date"
                className="form-control"
                name="joiningDate"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex mt-3 mb-2">
            <button
              className="btn btn-secondary btn-sm"
              onClick={handleAddInputs}
            >
              Add Class
            </button>
          </div>

          <div
            className="col-md-12"
            
          >
            {classFields.map((field, index) => (
              <div className="row mb-4" key={index}>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="class">Class</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        handleDynamicFields(e.target.value, "class", index)
                      }
                      name="class"
                      value={field.class}
                    >
                      <option value="" selected>
                        Select class
                      </option>
                      {loading && <option>Loading classes...</option>}
                      {error && <option>An error occurred</option>}
                      {data &&
                        data.map((cls, index) => (
                          <option key={index}>{cls.standard}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="class">Section</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        handleDynamicFields(e.target.value, "section", index)
                      }
                      name="section"
                      value={field.section}
                    >
                      {renderSectionOptions(index)}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="class">Subject</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        handleDynamicFields(e.target.value, "subject", index)
                      }
                      name="subject"
                      value={field.subject}
                    >
                      {renderSubjectOptions(index)}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center mt-4">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveInputs(index)}
                  >
                    Remove Class
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 d-flex mt-3 mb-2 justify-content-end">
            <button className="btn btn-primary bg-main" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
