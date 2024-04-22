import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const UserGenInfo = () => {
  const [gender, setGender] = useState("Female(F)");

  const [genInfo, setGenInfo] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone: "",
    location: "",
    birth_date: null,
    birth_month: null,
    birth_year: null,
    gender: gender,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setGenInfo({ ...genInfo, [name]: value });
  };
  const handleSubmit = () => {
    console.log(genInfo);
    // console will be removed once the data is submitted
  };
  useEffect(() => {
    setGenInfo({ ...genInfo, gender: gender });
  }, [gender]);

  return (
    <div className="w-100 py-4 px-4  d-flex flex-column userGenInfoWrapper gap-3">
      <h2 className="heading24px fw-bold text-center">General Information</h2>
      <div className="row studentProfileHeading">
        <div className="col-md-6">
          <label for="exampleInputEmail1" className="form-label">
            FIRST NAME{" "}
          </label>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Peter"
              className="input-gender ps-2 rounded"
              name="first_name"
              onChange={handleChange}
              value={genInfo.first_name}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label for="exampleInputEmail2" className="form-label">
            LAST NAME
          </label>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Smith"
              className="input-gender ps-2 rounded"
              name="last_name"
              onChange={handleChange}
              value={genInfo.last_name}
            />
          </div>
        </div>

        <div className="col-md-6">
          <label for="exampleInputEmail2" class="form-label">
            USERNAME<span className="text-danger">*</span>
          </label>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Peter"
              className="input-gender ps-2 rounded"
              name="username"
              onChange={handleChange}
              value={genInfo.username}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label for="exampleInputEmail2" className="form-label">
            EMAIL<span className="text-danger">*</span>
          </label>
          <div className="mb-3">
            <input
              type="email"
              placeholder="hello@designdrops.io"
              className="input-gender ps-2 rounded"
              name="email"
              onChange={handleChange}
              value={genInfo.email}
            />
          </div>
        </div>

        <div className="col-md-6">
          <label for="exampleInputEmail2" class="form-label">
            Phone<span className="text-danger">*</span>
          </label>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Peter"
              className="input-gender ps-2 rounded"
              name="phone"
              onChange={handleChange}
              value={genInfo.phone}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label for="exampleInputEmail2" className="form-label">
            Location<span className="text-danger">*</span>
          </label>
          <div className="mb-3">
            <input
              type="email"
              placeholder="hello@designdrops.io"
              className="input-gender ps-2 rounded"
              name="location"
              onChange={handleChange}
              value={genInfo.location}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">
            <label for="exampleInputEmail2" className="form-label">
              BIRTHDAY
            </label>
            <div className="col">
              <div className="mb-3">
                <input
                  type="number"
                  placeholder="09"
                  className="input-gender ps-2 rounded"
                  name="birth_month"
                  onChange={handleChange}
                  value={genInfo.birth_month}
                />
              </div>
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="22"
                className="input-gender ps-2  rounded"
                name="birth_date"
                onChange={handleChange}
                value={genInfo.birth_date}
              />
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="1975"
                className="input-gender ps-2 rounded"
                name="birth_year"
                onChange={handleChange}
                value={genInfo.birth_year}
              />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="genderInput" className="form-label">
              GENDER
            </label>
            <div className="mb-3 d-flex">
              <input
                type="text"
                className="input-cx rounded-start ps-2"
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={gender}
                // onChange={() => { }}
              />
              <button
                className="drop-btn rounded-end"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <ChevronDown className="icon-drop" />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setGender("Female (F)")}
                  >
                    Female (F)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setGender("Male (M)")}
                  >
                    Male (M)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => setGender("Other")}
                  >
                    Other
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 text-center   mt-2">
            <button className="btn-update" onClick={handleSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGenInfo;
