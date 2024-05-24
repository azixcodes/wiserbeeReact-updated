import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { postRequest } from "../../../services";
const Parent = () => {
  const [fields, setFeilds] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    location: "",
    dob: null,
    gender: "",
    child: [1, 3],
  });
  const [errors, setErrors] = useState([]);
  const email = useSelector((state) => state.admincredslice.username);
  const password = useSelector((state) => state.admincredslice.username);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFeilds({ ...fields, [name]: value });
  };

  const handleSave = async () => {
    const { firstname, lastname, phone, location, dob, gender, child } = fields;

    const payload = {
      Username: firstname + " " + lastname,
      email: email,
      phone,
      password: password,
      location,
      dob,
      gender: gender.toLowerCase(),
      child,
    };
    try {
      const res = await postRequest("/api/parentadmin/parentadmin/", payload);
      if (res.ok) {
        toast.success("Parent saved successfully");
      } else {
        const data = await res.json();
        const errorArray = Object.entries(data).map(([field, messages]) => ({
          field,
          messages,
        }));

        const field = errorArray[0].field;
        toast.error(`${field} : ${errorArray[0].messages}`);
      }
    } catch (err) {
      toast.error("Connection Failed");
    }
  };

  return (
    <>
      <Toaster />
      <div className="row px-4 m-0">
        <div className="col-md-12">
          <h4 className="text-center fs-6 fw-bold py-3">
            Parent General Information
          </h4>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="fname" className="text-capitalize">
                first name
              </label>
              <input
                type="text"
                placeholder="Peter"
                className="form-control"
                id="fname"
                name="firstname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="lname" className="text-capitalize">
                last name
              </label>
              <input
                type="text"
                placeholder="Parker"
                className="form-control"
                id="lname"
                name="lastname"
                onChange={handleChange}
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
              />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="" className="text-capitalize">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                name="dob"
                onChange={handleChange}
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
                onChange={handleChange}
              >
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="location" className="text-capitalize">
                Children
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                disabled
              >
                <option>Children I</option>
                <option>Children II</option>
                <option>Children III</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <button className="btn btn-primary bg-main" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parent;
