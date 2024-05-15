import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import Counter from "../Components/Common/Counter";
import { postRequest } from "../services/index";
import { validator } from "../Constant/validator";

const AddExamModal = ({ onRequestClose }) => {
  const [questionCounter, setquestionCounter] = useState(0);
  const [minsCounter, setMinsCounter] = useState(0);

  const [examData, setExamData] = useState({
    course: 1,
    exam_title: "",
    class: "8th Class",
    section: "All Sections",
    category: "Exam",
    mins: 0,
    standard: "Test",
    questions: 0,
    start_date: null,
    end_date: null,
    start_time: null,
    end_time: null,
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
    setExamData((prev) => ({
      ...prev,
      questionCounter: questionCounter,
    }));
  }, [questionCounter]);
  useEffect(() => {
    setExamData((prev) => ({
      ...prev,
      mins: minsCounter,
    }));
  }, [minsCounter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamData({ ...examData, [name]: value });
  };
  const handleSubmitData = async () => {
    const exam = {
      course: examData.course,
      Exam_title: examData.exam_title,
      standard: examData.standard,
      section: examData.section,
      category: examData.category.toLowerCase(),
      number_of_questions: questionCounter,
      duration_in_minutes: examData.mins,
      start_date: examData.start_date,
      end_date: examData.end_date,
      start_time: examData.start_time,
      end_time: examData.end_time,
    };
    const validate = validator(examData);
    if (validate === "success") {
      try {
        const response = await postRequest("/quiz/exam-quizes/", exam);
        const data = await response.json();

        if (response.ok) {
          alert("Exam added successfully");

          onRequestClose();
        } else {
          alert(data.response.message);
        }
        // console.log(exam);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert(validate);
    }
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
        <div className="col-md-6">
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
        </div>
        <div className="col-md-6">
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
        </div>
        <div className="col-md-6">
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
              <option>Practice</option>
              <option>Tests</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="classSelect">Start Date</label>
            <input
              type="date"
              className="form-control py-1 fs-6 px-2"
              name="start_date"
              value={examData.start_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="category">Start Time</label>
            <input
              type="time"
              className="form-control py-1 fs-6 px-2"
              name="start_time"
              value={examData.start_time}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="sectionSelect">End Date</label>
            <input
              type="date"
              className="form-control py-1 fs-6 px-2"
              name="end_date"
              onChange={handleChange}
              value={examData.end_date}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className=" d-flex flex-column gap-2 mt-3">
            <label for="questions">End Time</label>
            <input
              type="time"
              className="form-control py-1 fs-6 px-2"
              name="end_time"
              onChange={handleChange}
              value={examData.end_time}
            />
          </div>
        </div>
        <div className="col-md-6">
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
        <div className="col-md-6">
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

        {/* footer */}
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
    </div>
  );
};

export default AddExamModal;
