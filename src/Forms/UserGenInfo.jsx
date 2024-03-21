import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const UserGenInfo = () => {
  const [gender, setGender] = useState("Female(F)");
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
                />
              </div>
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="22"
                className="input-gender ps-2  rounded"
              />
            </div>
            <div className="col">
              <input
                type="number"
                placeholder="1975"
                className="input-gender ps-2 rounded"
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
            <button className="btn-update">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGenInfo;
