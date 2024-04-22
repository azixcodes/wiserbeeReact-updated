import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Counter from "../Components/Common/Counter";

const AddExamModal = ({ onRequestClose }) => {
  const [questionCounter, setquestionCounter] = useState(0);
  const [minsCounter, setMinsCounter] = useState(0);

  const [examData, setExamData] = useState({
    exam_title: "",
    class: "",
    section: "",
    category: "",
    totalQuestions: 0,
    mins: 0,
  });

  const handleClick = (counter, action) => {
    if (counter === "mins") {
      if (action === "increment") {
        setMinsCounter((prev) => prev + 1);
      } else if (minsCounter > 0) {
        setMinsCounter(minsCounter - 1);
      } else setMinsCounter(0);
    } else {
      if (counter === "question") {
        if (action === "increment") setquestionCounter((prev) => prev + 1);
        else if (questionCounter > 0) {
          setquestionCounter(questionCounter - 1);
        }
      }
    }
  };
  useEffect(() => {
    setExamData({
      ...examData,
      mins: minsCounter,
      questionCounter: questionCounter,
    });
  }, [questionCounter, minsCounter]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };
  const handleSubmitData = () => {
    console.log(examData);
  };
  return (
    <div className="container-fluid p-0 m-0 pb-4 modalWrapper">
      <div className="row  d-flex justify-content-center p-0 m-0">
        <div className="col-md-12    examModalWrapper p-0 m-0">
          <div className="d-flex justify-content-between  align-items-center px-4  col-md-12 examModalHeader">
            <h4 style={{ color: "#060317" }} className="fw-bold">
              Exam Details
            </h4>
            <div
              className="iconWrapper cursor-pointer"
              onClick={onRequestClose}
            >
              <X />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 p-0 m-0 px-4">
        <div className="col-md-12 p-0">
          <div className=" d-flex flex-column gap-2 ">
            <label for="examTitle">Exam Title</label>
            <input
              type="text"
              className="form-control py-1 fs-6 px-2"
              id="examTitle"
              aria-describedby="emailHelp"
              placeholder="Enter exam title here"
              name="exam_title"
              onChange={handleChange}
              value={examData.exam_title}
            />
          </div>
        </div>
      </div>
      <div className="row  m-0 p-0 mt-3 px-2">
        <div className="col-md-6 ">
          <div className=" d-flex flex-column gap-2">
            <label for="classSelect">Class</label>
            <select
              className="form-control py-1 fs-6 px-2"
              id="classSelect"
              name="class"
              onChange={handleChange}
              value={examData.class}
            >
              <option>8th Class</option>
              <option>7th Class</option>
              <option>5th Class</option>
              <option>4th Class</option>
              <option>3rd Class</option>
            </select>
          </div>
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="category">Category</label>
            <select
              className="form-control py-1 fs-6 px-2"
              id="category"
              name="category"
              onChange={handleChange}
              value={examData.category}
            >
              <option>Exam</option>
              <option>Assignment</option>
              <option>Practical</option>
              <option>Tests</option>
            </select>
          </div>
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="duration">Duration in Mints</label>
            <Counter
              isFullWidth={true}
              handleClick={handleClick}
              counter="mins"
              value={minsCounter}
            />
          </div>
        </div>
        <div className="col-md-6 ">
          <div className=" d-flex flex-column gap-2">
            <label for="sectionSelect">Section</label>
            <select
              className="form-control py-1 fs-6 px-2"
              id="sectionSelect"
              name="section"
              onChange={handleChange}
              value={examData.section}
            >
              <option>All Section</option>
              <option>Section A</option>
              <option>Section B</option>
              <option>Section C</option>
            </select>
          </div>
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="questions">Number of Questions</label>
            <Counter
              isFullWidth={true}
              handleClick={handleClick}
              counter="question"
              value={questionCounter}
            />
          </div>
        </div>
      </div>
      <div className="row px-4 py-2 ">
        <div className="col-md-12 d-flex justify-content-center justify-content-md-end">
          <div className="row">
            <div className="col-md-6 mt-2">
              <button
                className="btnFooter"
                style={{ backgroundColor: "#EDEBF1", color: "#463C77" }}
                onClick={onRequestClose}
              >
                Cancel
              </button>
            </div>
            <div className="col-md-6 mt-2">
              <button
                className="btnFooter"
                style={{ backgroundColor: "#463C77", color: "white" }}
                onClick={handleSubmitData}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExamModal;
