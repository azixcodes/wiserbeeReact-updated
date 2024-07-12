import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { flattenData } from "../../Constant/helpers";
import { postRequest } from "../../services/index";
import toast, { Toaster } from "react-hot-toast";
const AddLessonPlan = () => {
  let subRows = 2;
  const [lessonPlanData, setLessonPlanData] = useState({
    standard: "",
    section: "",
    subject: "",
    week_details: null,
  });

  const [inputs, setInputs] = useState([
    {
      topic: "",
      date: "",
      details: "",
      completion: "",
      ContentUpload: "",
      VideoUpload: "",
      subRows: Array.from({ length: subRows }).map((item, index) => ({
        topic: "",
        date: "",
        details: "",
        completion: "",
        ContentUpload: "",
        VideoUpload: "",
      })),
    },
  ]);

  const handleSubjectSelect = (subject) => {
    setLessonPlanData({ ...lessonPlanData, subject });
  };

  const handleSectionSelect = (section) => {
    setLessonPlanData({ ...lessonPlanData, section });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLessonPlanData({ ...lessonPlanData, [name]: value });
  };

  const handleAddInputs = (e) => {
    e.preventDefault();
    const newInputs = {
      topic: "",
      date: "",
      details: "",
      completion: "",
      ContentUpload: "",
      VideoUpload: "",
      subRows: Array.from({ length: subRows }).map((item, index) => ({
        topic: "",
        date: "",
        details: "",
        completion: "",
        ContentUpload: "",
        VideoUpload: "",
      })),
    };
    setInputs([...inputs, newInputs]);
  };

  const handleChange = (name, value, index, subIndex = null) => {
    const newInputs = [...inputs];
    if (subIndex === null) {
      newInputs[index][name] = value;
    } else {
      newInputs[index].subRows[subIndex][name] = value;
    }
    setInputs(newInputs);

    const flatten = flattenData(inputs);
    setLessonPlanData((prev) => ({
      ...prev,
      week_details: flatten,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await postRequest("/courses/lesson_plan/", lessonPlanData);
      const data = await res.json();
      if (res.ok) {
        toast.success("Lesson plan created");
      } else {
        toast.error("Something went wrong, please try again..");
      }
    } catch (err) {
      toast.error("Server error, try again later");
    }
  };

  return (
    <>
      <Toaster />
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
                  name="standard"
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
                    onChange={handleInputChange}
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
            {inputs.map((input, index) => (
              <div key={index} className="row mb-3">
                <h2 className="p-3 myClassesHeading">Week {index + 1} </h2>
                <div className="row mb-3">
                  <div className="col-md-2">
                    <label
                      htmlFor="exampleInputEmail1"
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
                      htmlFor="exampleInputEmail1"
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
                      htmlFor="exampleInputEmail1"
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
                      htmlFor="exampleInputEmail1"
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
                      htmlFor="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Content Upload
                    </label>
                    <div className="mb-3">
                      <input
                        type="file"
                        placeholder="Completion"
                        className="form-control"
                        name="ContentUpload"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2 position-relative">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="weakform-text form-label"
                    >
                      Video Link
                    </label>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Video Link"
                        className="form-control"
                        name="VideoUpload"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value, index)
                        }
                      />
                    </div>
                  </div>
                </div>
                {Array.from({ length: subRows }).map((_, subIndex) => (
                  <div key={subIndex} className="row mb-3 px-5">
                    <div className="col-md-2">
                      <label
                        htmlFor="exampleInputEmail1"
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
                            handleChange(
                              e.target.name,
                              e.target.value,
                              index,
                              subIndex
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label
                        htmlFor="exampleInputEmail1"
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
                            handleChange(
                              e.target.name,
                              e.target.value,
                              index,
                              subIndex
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label
                        htmlFor="exampleInputEmail1"
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
                            handleChange(
                              e.target.name,
                              e.target.value,
                              index,
                              subIndex
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label
                        htmlFor="exampleInputEmail1"
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
                            handleChange(
                              e.target.name,
                              e.target.value,
                              index,
                              subIndex
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label
                        htmlFor="exampleInputEmail1"
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
                            handleChange(
                              e.target.name,
                              e.target.value,
                              index,
                              subIndex
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-2 position-relative">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="weakform-text form-label"
                      >
                        Video Link
                      </label>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Video Link"
                          className="form-control"
                          name="video"
                          onChange={(e) =>
                            handleChange(
                              e.target.name,
                              e.target.value,
                              index,
                              subIndex
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
          <div className="row">
            <div className="col-md-12">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddLessonPlan;
