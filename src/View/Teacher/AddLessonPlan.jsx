import React, { useState } from "react";
// import '../../src/index.css'
import { ChevronDown, CalendarDays } from "lucide-react";
const AddLessonPlan = () => {
  const [selectedsection, setSelectedsection] = useState("");
  const [selectsubject, setSelectsubject] = useState("");
  const [selecttype, setSelecttype] = useState("");
  const [academicyear, setAcademicyear] = useState("");
  const [selecttarget, setSelecttarget] = useState("");
  const [selectday, setSelectday] = useState("");

  const handleSectionSelect = (section) => {
    setSelectedsection(section);
  };
  const handleSubjectSelect = (subject) => {
    setSelectsubject(subject);
  };
  const handleTypeSelect = (type) => {
    setSelecttype(type);
  };

  const handleAcademicyearSelect = (year) => {
    setAcademicyear(year);
  };

  const handleselectTarget = (target) => {
    setSelecttarget(target);
  };
  const handleselectDay = (day) => {
    setSelectday(day);
  };

  return (
    <>
      <div className=" bg-white pt-4 shadow-lg rounded-5">
        <h2 className="p-3 fw-bolder">Create Lesson Plan </h2>
        <form className="p-3">
          <div className="row studentProfileHeading">
            <div className="col-md-3">
              <label
                for="exampleInputEmail1"
                className=" weakform-text form-label"
              >
                Class{" "}
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Class"
                  className="input-gender ps-2 rounded"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label
                  htmlFor="genderInput"
                  className=" weakform-text form-label "
                >
                  SECTION
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder="Select Section"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={selectedsection}
                    onChange={() => {}}
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
                        onClick={() => handleSectionSelect("top")}
                      >
                        top
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSectionSelect("bottom")}
                      >
                        bottom
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSectionSelect("Other")}
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
                  className=" weakform-text form-label "
                >
                  SUBJECT
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder="Select Subject"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={selectsubject}
                    onChange={() => {}}
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
                        onClick={() => handleSubjectSelect("math")}
                      >
                        math
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSubjectSelect("physics")}
                      >
                        Physics
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSubjectSelect("Other")}
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
                  className=" weakform-text form-label "
                >
                  TYPE
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder="Select Type"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={selecttype}
                    onChange={() => {}}
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
                        onClick={() => handleTypeSelect("science")}
                      >
                        science
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleTypeSelect("arts")}
                      >
                        arts
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleTypeSelect("english")}
                      >
                        english
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
                  className=" weakform-text form-label "
                >
                  STUDENT
                </label>
                <input
                  type="text"
                  placeholder="Select Student"
                  className="input-gender ps-2 rounded"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label for="exampleInputEmail2" className="form-label">
                TOPIC <span className="text-danger">*</span>
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Enter Topic Name"
                  className="input-gender ps-2 rounded"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label
                  htmlFor="genderInput"
                  className=" weakform-text form-label "
                >
                  ACADEMIC YEAR
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={academicyear}
                    onChange={() => {}}
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
                        onClick={() =>
                          handleAcademicyearSelect("Aug 23 - July 24")
                        }
                      >
                        Aug 23 - July 24
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() =>
                          handleAcademicyearSelect("june 23 - Sept 20")
                        }
                      >
                        june 23 - Sept 20
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() =>
                          handleAcademicyearSelect("Aug 14 - Nov 15")
                        }
                      >
                        Aug 14 - Nov 15
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <label
                for="exampleInputEmail1"
                className=" weakform-text form-label "
              >
                CREATION DATE{" "}
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="14-07-2023"
                  className="input-gender ps-2 rounded"
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label
                  htmlFor="weakform-text"
                  className="weakform-text form-label fs-6 "
                >
                  CYCLE/WEAK FORM
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder="dd-mm-yy"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    // value={academicyear}
                    // onChange={() => { }}
                  />
                  <button
                    className="drop-btn rounded-end"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CalendarDays size={16} className="icon-drop" />
                  </button>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleAcademicyearSelect("Aug 23 - July 24")}
                      >
                      Aug 23 - July 24
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleAcademicyearSelect("june 23 - Sept 20")}
                      >
                        june 23 - Sept 20
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleAcademicyearSelect("Aug 14 - Nov 15")}
                      >
                        Aug 14 - Nov 15
                      </button>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label
                  htmlFor="genderInput"
                  className=" weakform-text form-label fs-lg-5"
                >
                  CYCLE/WEAK TILL
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder="dd-mm-yy"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    // value={academicyear}
                    // onChange={() => { }}
                  />
                  <button
                    className="drop-btn rounded-end"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CalendarDays size={16} className="icon-drop" />
                  </button>
                  {/* <ul className="dropdown-menu">
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleAcademicyearSelect("Aug 23 - July 24")}
                      >
                      Aug 23 - July 24
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleAcademicyearSelect("june 23 - Sept 20")}
                      >
                        june 23 - Sept 20
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleAcademicyearSelect("Aug 14 - Nov 15")}
                      >
                        Aug 14 - Nov 15
                      </button>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>

            <div className="">
              <label
                for="exampleInputEmail1"
                className=" weakform-text form-label "
              >
                ENTER ATTAINMENTS TARGET{" "}
              </label>
              <div className="mb-3">
                <textarea
                  rows="4"
                  cols="50"
                  type="textarea"
                  placeholder="Jot down your attainments target"
                  className="textarea ps-2 p-2 rounded"
                ></textarea>
              </div>
            </div>

            <div className="col-md-12">
              <div className="mb-3">
                <label
                  htmlFor="genderInput"
                  className="weakform-text form-label "
                >
                  SELECTED ATTAINMENT TARGETS
                </label>
                <div className="mb-3 d-flex">
                  <input
                    type="text"
                    className="input-cx rounded-start ps-2"
                    placeholder="select"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={selecttarget}
                    onChange={() => {}}
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
                        onClick={() => handleselectTarget("yearly")}
                      >
                        yearly
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleselectTarget("monthly")}
                      >
                        monthly
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleselectTarget("weekly")}
                      >
                        weekly
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label
                    for="exampleInputEmail1"
                    className=" weakform-text form-label "
                  >
                    BOOK REFERENCE
                  </label>
                  <div class="mb-3">
                    <input
                      type="text"
                      placeholder="Enter Reference Book"
                      class="input-gender ps-2 rounded"
                    />
                  </div>
                </div>

                <div class="col-md-3">
                  <label
                    for="exampleInputEmail1"
                    className="weakform-text form-label "
                  >
                    SUGGESTED DURATION
                  </label>
                  <div class="mb-3">
                    <input
                      type="text"
                      placeholder="0 Minutes"
                      class="input-gender ps-2 rounded"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-3">
                    <label
                      htmlFor="genderInput"
                      className=" weakform-text form-label "
                    >
                      DAY
                    </label>
                    <div className="mb-3 d-flex">
                      <input
                        type="text"
                        className="input-cx rounded-start ps-2"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={selectday}
                        onChange={() => {}}
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
                            onClick={() => handleselectDay("DAY 1")}
                          >
                            DAY 1
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleselectDay("DAY 2")}
                          >
                            DAY 2
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => handleselectDay("DAY 3 ")}
                          >
                            DAY 3
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <label
                  for="exampleInputEmail1"
                  className=" weakform-text form-label"
                >
                  LEARNING OUTCOMES{" "}
                </label>
                <div className="mb-3">
                  <textarea
                    rows="4"
                    cols="50"
                    type="textarea"
                    placeholder="Jot down your Learning Outcomes here "
                    className="textarea ps-2 p-2 rounded"
                  ></textarea>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button type="submit" className="btn-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-update">
                  Update changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddLessonPlan;
