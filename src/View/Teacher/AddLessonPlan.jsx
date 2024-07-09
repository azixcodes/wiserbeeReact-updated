import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "../../Components/Common/ReactDatePicker";
import { values } from "lodash";
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
  const [itemsLength, setItemsLength] = useState(3);
  const [inputs, setInputs] = useState([
    {
      topics: "",
      date: "",
      details: "",
      completion: "",
      content: "",
      video: "",
    },
  ]);
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
  const handleAddInputs = (e) => {
    e.preventDefault();
    const newInputs = {
      topics: "",
      date: "",
      details: "",
      completion: "",
      content: "",
      video: "",
    };
    setInputs([...inputs, newInputs]);
  };

  const handleChange = (name, value, index) => {
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };
  console.log(inputs);
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
                        Section A
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSectionSelect("bottom")}
                      >
                        Section B
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => handleSectionSelect("Other")}
                      >
                        Section C
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
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-end">
              <button className="btn btn-primary " onClick={handleAddInputs}>
                Add Week
              </button>
            </div>
          </div>
          <>
            {inputs.map((_, index) => (
              <div className="row">
                <h2 className="p-3 myClassesHeading">
                  Week {index === 0 ? 1 : index + 1}
                </h2>
                <div key={index} className="row mb-3">
                  <div className="col-md-2">
                    <label
                      for="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Topic
                    </label>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Topic"
                        className="form-control rounded"
                        name="topic"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label
                      for="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Date
                    </label>
                    <div className="mb-3">
                      <input
                        type="date"
                        placeholder="Topic"
                        className="form-control"
                        name="date"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label
                      for="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Details
                    </label>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Details"
                        className="form-control"
                        name="details"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label
                      for="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Completion
                    </label>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Completion"
                        className="form-control"
                        name="completion"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label
                      for="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Content Upload
                    </label>
                    <div className="mb-3">
                      <input
                        type="file"
                        placeholder="Completion"
                        className="form-control"
                        name="content"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <label
                      for="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Video
                    </label>
                    <div className="mb-3">
                      <input
                        type="file"
                        placeholder="Completion"
                        className="form-control"
                        name="video"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        </form>
      </div>
    </>
  );
};
export default AddLessonPlan;
