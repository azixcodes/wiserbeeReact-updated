import React, { useState } from "react";
import { useSelector } from "react-redux";
import { postRequest } from "../../../services/index";
import toast, { Toaster } from "react-hot-toast";
const Teacher = () => {
  const email = useSelector((state) => state.admincredslice.username);
  const password = useSelector((state) => state.admincredslice.password);

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
    gender: "",
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
  const handleDynamicFields = (value, field, index) => {
    const newFields = [...classFields];
    newFields[index][field] = value;
    setClassFields(newFields);
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
    console.log(payload);
    try {
      const res = await postRequest("/teacher_admin/teacheradmin/", payload);
      // const data = await res.json();
      if (res.ok) {
        toast.success("Teacher registered successfully.");
      } else {
        toast.error("something went wrong,please try again later");
      }
    } catch (err) {
      toast.error("connection failed");
    }
  };

  return (
    <>
      <Toaster />
      <div className="row px-4 m-0">
        <div className="col-md-12">
          <h4 className="text-center fs-6 fw-bold py-3">
            Teacher General Information
          </h4>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="fname" className="text-capitalize">
                full name
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
            style={{ height: "80px", overflowY: "auto" }}
          >
            {classFields.map((_, index) => (
              <div className="row mb-4" key={index}>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="class">Class</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        handleDynamicFields(e.target.value, "class", index)
                      }
                      name="class"
                    >
                      <option>Class I</option>
                      <option>Class II</option>
                      <option>Class III</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="class">Section</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        handleDynamicFields(e.target.value, "section", index)
                      }
                      name="section"
                    >
                      <option>Section I</option>
                      <option>Section II</option>
                      <option>Section III</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="class">Subject</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) =>
                        handleDynamicFields(e.target.value, "subject", index)
                      }
                      name="subject"
                    >
                      <option>Subject I</option>
                      <option>Subject II</option>
                      <option>Subject III</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 d-flex mt-3 mb-2 justify-content-end">
            <button className="btn btn-primary bg-main " onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
