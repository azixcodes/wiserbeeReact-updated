import { Check, X } from "lucide-react";
import React, { useState } from "react";
import Counter from "../Components/Common/Counter";

const AddQuestions = ({ onRequestClose }) => {
  const [questionCounter, setquestionCounter] = useState(8);
  let dots = [];
  for (let i = 0; i < 8; i++) {
    dots.push(i);
  }
  const handleClick = (counter, action) => {
    if (counter === "question") {
      if (action === "increment") setquestionCounter((prev) => prev + 1);
      else if (action === "decrement" && questionCounter > 0) {
        setquestionCounter(questionCounter - 1);
      }
    }
  };
  const options = [1, 2, 3, 4];
  return (
    <div className="container-fluid p-0 m-0 pb-4 modalWrapper">
      <div className="row  d-flex justify-contents-center p-0 m-0">
        <div className="col-md-12    examModalWrapper p-0 m-0">
          <div className="d-flex justify-content-between  align-items-center px-4  col-md-12 examModalHeader">
            <h4 style={{ color: "#060317" }} className="fw-bold">
              Question Details
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
      <div className="row px-4 m-0 gap-5 mt-4">
        <div className="col-md-4  m-0 p-0">
          <div className="w-100 d-flex flex-column gap-2 justify-content-center ">
            <label>1/8</label>
            <div className="questionBarProgress">
              {dots.map((_, index) => (
                <div className="dot" key={index}></div>
              ))}
              <div className="progressBar"></div>
            </div>
          </div>
        </div>
        <div className="col-md-3  m-0 p-0 ">
          <div className="d-flex gap-3 align-items-center ">
            <label>Marks</label>
            <Counter
              value={questionCounter}
              isFullWidth={true}
              counter="question"
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="col-md-3 m-0 p-0">
          <div className="d-flex align-items-center gap-3">
            <label>Type</label>
            <select className="form-control">
              <option>Open Text</option>
              <option>File</option>
              <option>Link</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row px-4 mt-4">
        <div className="col-md-12">
          <h4 className="fs-6 fw-bold">Question 01</h4>
        </div>
      </div>
      <div className="row mt-4 px-4">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter possible question here"
          />
        </div>
      </div>
      <div className="row px-4 mt-4">
        <div className="col-md-12 p-0 m-0">
          <div className="d-flex w-100 flex-column gap-4 px-3">
            {options.map((_, index) => (
              <div key={index} className="d-flex align-items-center gap-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <div
                  className=" position-relative w-100 rounded"
                  style={{ border: "1px solid #E2E2E2" }}
                >
                  <input
                    type="text"
                    placeholder="Enter possible option here"
                    className="form-control"
                    style={{ border: "none", outline: "none" }}
                  />
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div
                    className="addQuestionIconWrapper"
                    style={{ backgroundColor: "#3DC079", color: "white" }}
                  >
                    <Check />
                  </div>
                  <div
                    className="addQuestionIconWrapper"
                    style={{ backgroundColor: "#EA57574D", color: "#EA5757" }}
                  >
                    <X />
                  </div>
                </div>
              </div>
            ))}
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

export default AddQuestions;
