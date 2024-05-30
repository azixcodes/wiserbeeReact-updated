import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "../../Components/Common/ReactDatePicker";
const AddLessonPlan = () => {
  const [lessonPlanData, setLessonPlanData] = useState({
    class: "",

    section: "",
    subject: "",
    type: "",
    student: "",
    topic: "",
    academic: "",
    creation_date: "",
    cycle_weak_form: "",
    cycle_weak_till: "",
    attainment_target: "",
    selected_attainment_target: "",
    book_reference: "",
    suggested_duration: "",
    day: "",
    learning_outcomes: "",
  });
  const navigate = useNavigate();
  const handleSectionSelect = (section) => {
    setLessonPlanData({ ...lessonPlanData, section });
  };
  const handleSubjectSelect = (subject) => {
    setLessonPlanData({ ...lessonPlanData, subject });
  };
  const handleTypeSelect = (type) => {
    setLessonPlanData({ ...lessonPlanData, type });
  };

  const handleAcademicyearSelect = (academic) => {
    setLessonPlanData({ ...lessonPlanData, academic });
  };

  const handleselectTarget = (selected_attainment_target) => {
    setLessonPlanData({
      ...lessonPlanData,
      selected_attainment_target,
    });
  };
  const handleselectDay = (day) => {
    setLessonPlanData({ ...lessonPlanData, day });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLessonPlanData({ ...lessonPlanData, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setLessonPlanData({ ...lessonPlanData, [name]: date });
  };
  console.log(lessonPlanData);
  return (
    <>
      <div className=" bg-white pt-4 shadow-lg rounded-4">
        <h2 className="p-3 myClassesHeading">Create Lesson Plan </h2>
        <form className="p-3">
          <div className="row studentProfileHeading">
            <div className="col-md-3">
              <label
                for="exampleInputEmail1"
                className="weakform-text form-label"
              >
                Class
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Class"
                  className="input-gender ps-2 rounded"
                  name="class"
                  onChange={handleInputChange}
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
                    value={lessonPlanData.section}
                    onChange={handleInputChange}
                    name="section"
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
                    name="subject"
                    className="input-cx rounded-start ps-2"
                    placeholder="Select Subject"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={lessonPlanData.subject}
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
                    name="type"
                    className="input-cx rounded-start ps-2"
                    placeholder="Select Type"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={lessonPlanData.type}
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
                  name="student"
                  onChange={handleInputChange}
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
                  name="topic"
                  onChange={handleInputChange}
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
                    name="academic"
                    className="input-cx rounded-start ps-2"
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={lessonPlanData.academic}
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
                  name="creation_date"
                  className="input-gender ps-2 rounded"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="col-md-3">
              <div className="mb-3">
                <label
                  htmlFor="weakform-text"
                  className="weakform-text form-label fs-6 "
                >
                  CYCLE/WEEK FORM
                </label>
                <div className="mb-3 d-flex">
                  {/* <input
                    type="text"
                    name="cycle_weak_form"
                    className="input-cx rounded-start ps-2"
                    placeholder="dd-mm-yy"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    // value={academicyear}
                    // onChange={() => { }}
                    onChange={handleInputChange}
                  /> */}
                  <ReactDatePicker
                    placeholder="dd-mm-yy"
                    getDate={handleDateChange}
                    name="cycle_weak_form"
                  />

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
                  CYCLE/WEEK TILL
                </label>
                <div className="mb-3 d-flex">
                  {/* <input
                    type="text"
                    name="cycle_weak_till"
                    className="input-cx rounded-start ps-2"
                    placeholder="dd-mm-yy"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    // value={academicyear}
                    // onChange={() => { }}
                    onChange={handleInputChange}
                  /> */}
                  {/* <button
                    className="drop-btn rounded-end"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <CalendarDays size={16} className="icon-drop" />
                  </button> */}
                  <ReactDatePicker
                    placeholder="dd-mm-yy"
                    getDate={handleDateChange}
                    name="cycle_weak_till"
                  />
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
                  name="attainment_target"
                  onChange={handleInputChange}
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
                    name="selected_attainment_target"
                    className="input-cx rounded-start ps-2"
                    placeholder="select"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={lessonPlanData.selected_attainment_target}
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
                      name="book_reference"
                      onChange={handleInputChange}
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
                      name="suggested_duration"
                      placeholder="0 Minutes"
                      class="input-gender ps-2 rounded"
                      onChange={handleInputChange}
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
                        name="day"
                        className="input-cx rounded-start ps-2"
                        placeholder=""
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        value={lessonPlanData.day}
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
                  LEARNING OUTCOMES
                </label>
                <div className="mb-3">
                  <textarea
                    rows="4"
                    name="learning_outcomes"
                    cols="50"
                    type="textarea"
                    placeholder="Jot down your Learning Outcomes here "
                    className="textarea ps-2 p-2 rounded"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="submit"
                  className="btn-cancel"
                  onClick={() => navigate("/lesson-plan")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-update"
                  onClick={(e) => e.preventDefault()}
                >
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
