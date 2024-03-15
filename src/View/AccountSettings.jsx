import React, { useState } from "react";
// import '../../src/index.css'
import { ChevronDown } from "lucide-react";
const AccountSettings = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectHeight, setSelectHeight] = useState("");
  const [selectInch, setSelectInch] = useState("");
  const [selectWeight, setSelectWeight] = useState("");
  const [selectrange, setSelectRange] = useState("");
  const handleRangeSelect = (range) => {
    setSelectRange(range);
  };
  const handleWeightSelect = (weight) => {
    setSelectWeight(weight);
  };
  const handleInchSelect = (inch) => {
    setSelectInch(inch);
  };
  const handleHeightSelect = (height) => {
    setSelectHeight(height);
  };
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };
  const click = () => {
    alert("ckicked");
  };
  return (
    <>
      <div className="container bg-white pt-4 shadow-lg rounded-5">
        <h2 className="heading24px text-center">Student Profile Info</h2>
        <form className="p-3">
          <div className="row studentProfileHeading">
            <div className="col-md-6">
              <label
                for="exampleInputEmail1"
                className="form-label"
              >
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
              <label
                for="exampleInputEmail2"
                className="form-label"
              >
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
              <label
                for="exampleInputEmail2"
                className="form-label"
              >
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
              <div className="row">
                <label
                  for="exampleInputEmail2"
                  className="form-label"
                >
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
                <label
                  for="exampleInputEmail2"
                  className="form-label"
                >
                  LOCATION
                </label>
                <input
                  type="text"
                  placeholder="Quahog"
                  className="input-gender ps-2 rounded"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label
                  htmlFor="genderInput"
                  className="form-label"
                >
                  GENDER
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={selectedGender}
                    onChange={() => { }}
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
                        onClick={() => handleGenderSelect("Female (F)")}
                      >
                        Female (F)
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleGenderSelect("Male (M)")}
                      >
                        Male (M)
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleGenderSelect("Other")}
                      >
                        Other
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <label
                  htmlFor="genderInput"
                  className="form-label"
                >
                  HEIGHT
                </label>
                <div className="col">
                  <div className="mb-3">
                    <div className="mb-3 d-flex">
                      <input
                        type="text"
                        className="input-cx rounded-start ps-2"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={selectHeight} // Bind input value to the selected gender
                        onChange={() => { }} // Empty onChange handler to make the input field read-only
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
                            onClick={() => handleHeightSelect("5.1")}
                          >
                            height (5.1)
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleHeightSelect("5.2")}
                          >
                            height (5.1)
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleHeightSelect("5.3")}
                          >
                            height(5.1)
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3 ">
                    <div className="mb-3 d-flex">
                      <input
                        type="text"
                        className="input-cx rounded-start ps-2"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={selectInch} // Bind input value to the selected gender
                        onChange={() => { }} // Empty onChange handler to make the input field read-only
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
                            onClick={() => handleInchSelect("ft/in")}
                          >
                            ft/in
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleInchSelect("fm/in")}
                          >
                            fm/in
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleInchSelect("ftx/in")}
                          >
                            ftx/in
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <label
                  htmlFor="genderInput"
                  className="form-label"
                >
                  WEIGHT
                </label>
                <div className="col-6">
                  <div className="mb-3">

                    <div className="mb-3 d-flex">
                      <input
                        type="text"
                        className="input-cx rounded-start ps-2"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={selectWeight}
                        onChange={() => { }}
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
                            onClick={() => handleWeightSelect("120")}
                          >
                            120
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleWeightSelect("140")}
                          >
                            140
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleWeightSelect("160")}
                          >
                            160
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3 ">
                    {/* <label htmlFor="genderInput" className="form-label">HEIGHT</label> */}
                    <div className="mb-3 d-flex">
                      <input
                        type="text"
                        className="input-cx rounded-start ps-2"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={selectrange} // Bind input value to the selected gender
                        onChange={() => { }} // Empty onChange handler to make the input field read-only
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
                            onClick={() => handleRangeSelect("lb")}
                          >
                            lb
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleRangeSelect("ml")}
                          >
                            ml
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleRangeSelect("lg")}
                          >
                            lg
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label
                  for="exampleInputEmail2"
                  className="form-label"
                >
                  USERID
                </label>
                <input
                  type="number"
                  placeholder="e7fbe9883d6746458a6facfd70fdf09d"
                  className="input-gender ps-2 rounded"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center pt-3">
              {" "}
              <button type="button" className="btn-setting">
                Save Changes
              </button>
            </div>
            <hr className="w-100 mx-auto mt-4" />
            <h2 className=" heading24px text-center pt-3 ">Change Password</h2>
            <div className="col-md-6">
              <label
                for="exampleInputEmail1"
                className="form-label"
              >
                CURRENT PASSWORD
              </label>
              <div class="mb-3">
                <input
                  type="password"
                  className="input-gender ps-2 rounded"
                />
              </div>
            </div>
            <div className="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <label
                    for="exampleInputEmail1"
                    className="form-label"
                  >
                    New Password
                  </label>
                  <div class="mb-3">
                    <input
                      type="password"
                      className="input-gender ps-2 rounded"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <label
                    for="exampleInputEmail2"
                    className="form-label"
                  >
                    Confirm Password
                  </label>
                  <div class="mb-3">
                    <input
                      type="password"
                      className="input-gender ps-2 rounded"


                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center pt-3">
              {" "}
              <button type="button" className="btn-setting">
                Save Changes
              </button>
            </div>
          </div>
          <p className=" setting-para pt-5 text-center">
            You will be asked to log in again with your new password after you
            save your changes.
          </p>
        </form>
      </div>
    </>
  );
};
export default AccountSettings;
