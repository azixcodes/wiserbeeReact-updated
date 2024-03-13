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
      <main className="mx-3 mt-3">
        <div className="container bg-white pt-5 shadow-lg rounded-5">
          <h2 className="fw-bold text-center">Student Profile Info</h2>
          <form className=" p-4">
            <div className="row">
              <div className="col-md-6">
                <label
                  for="exampleInputEmail1"
                  className="form-label fs-5 fw-bold"
                >
                  FIRST NAME{" "}
                </label>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Peter"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label
                  for="exampleInputEmail2"
                  className="form-label fs-5 fw-bold"
                >
                  LAST NAME
                </label>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Smith"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label for="exampleInputEmail2" class="form-label fs-5 fw-bold">
                  USERNAME<span className="text-danger">*</span>
                </label>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Peter"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label
                  for="exampleInputEmail2"
                  className="form-label fs-5 fw-bold"
                >
                  EMAIL<span className="text-danger">*</span>
                </label>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="hello@designdrops.io"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="mb-3">
                  <label
                    for="exampleInputEmail2"
                    className="form-label fs-5 fw-bold"
                  >
                    BIRTHDAY
                  </label>
                  <input
                    type="email"
                    placeholder="09"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="">
                  <input
                    type="email"
                    placeholder="22"
                    className="input-gendertwo ps-2  rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="1975"
                    className="input-gendertwo ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    for="exampleInputEmail2"
                    className="form-label fs-5 fw-bold"
                  >
                    LOCATION
                  </label>
                  <input
                    type="email"
                    placeholder="Quahog"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    htmlFor="genderInput"
                    className="form-label fs-5 fw-bold"
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
                      value={selectedGender} // Bind input value to the selected gender
                      onChange={() => {}} // Empty onChange handler to make the input field read-only
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
              <div className="col-md-3">
                <div className="mb-3">
                  <label
                    htmlFor="genderInput"
                    className="form-label fs-5 fw-bold"
                  >
                    HEIGHT
                  </label>
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="input-cx rounded-start ps-2"
                      placeholder=""
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={selectHeight} // Bind input value to the selected gender
                      onChange={() => {}} // Empty onChange handler to make the input field read-only
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
              <div className=" input-height col-md-3">
                <div className="mb-3 ">
                  {/* <label htmlFor="genderInput" className="form-label fs-5 fw-bold">HEIGHT</label> */}
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="input-cx rounded-start ps-2"
                      placeholder=""
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={selectInch} // Bind input value to the selected gender
                      onChange={() => {}} // Empty onChange handler to make the input field read-only
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
              <div className="col-md-3">
                <div className="mb-3">
                  <label
                    htmlFor="genderInput"
                    className="form-label fs-5 fw-bold"
                  >
                    WEIGHT
                  </label>
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="input-cx rounded-start ps-2"
                      placeholder=""
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={selectWeight} // Bind input value to the selected gender
                      onChange={() => {}} // Empty onChange handler to make the input field read-only
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
              <div className=" input-height col-md-3">
                <div className="mb-3 ">
                  {/* <label htmlFor="genderInput" className="form-label fs-5 fw-bold">HEIGHT</label> */}
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="input-cx rounded-start ps-2"
                      placeholder=""
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={selectrange} // Bind input value to the selected gender
                      onChange={() => {}} // Empty onChange handler to make the input field read-only
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
              <div className="col-md-6">
                <div className="mb-3">
                  <label
                    for="exampleInputEmail2"
                    className="form-label fs-5 fw-bold"
                  >
                    USERID
                  </label>
                  <input
                    type="number"
                    placeholder="e7fbe9883d6746458a6facfd70fdf09d"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center pt-3">
                {" "}
                <button type="button" className="btn-setting">
                  Save Changes
                </button>
              </div>
              <hr className="w-100 mx-auto mt-5" />
              {/* bottom section  */}
              <h2 className="text-center pt-5 fw-bold">Change Password</h2>
              <div className="col-md-6">
                <label
                  for="exampleInputEmail1"
                  className="form-label fs-5 fw-bold"
                >
                  CURRENT PASSWORD
                </label>
                <div class="mb-3">
                  <input
                    type="password"
                    className="input-gender ps-2 rounded"
                    id="text"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="container-fluid">
                <div class="row">
                  <div class="col-md-6">
                    <label
                      for="exampleInputEmail1"
                      className="form-label fs-5 fw-bold"
                    >
                      New Password
                    </label>
                    <div class="mb-3">
                      <input
                        type="password"
                        className="input-gender ps-2 rounded"
                        id="text"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label
                      for="exampleInputEmail2"
                      className="form-label fs-5 fw-bold"
                    >
                      Confirm Password
                    </label>
                    <div class="mb-3">
                      <input
                        type="password"
                        className="input-gender ps-2 rounded"
                        id="text"
                        aria-describedby="emailHelp"
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
      </main>
    </>
  );
};
export default AccountSettings;
