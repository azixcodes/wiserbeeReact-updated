import React, { useState } from "react";
import { QuestionImage } from "../Constant/images";
import ProgressBar from "../Components/CircularProgress/ProgressBar";
const Assesment = () => {
  const [questions, setQuestions] = useState([
    { label: "Eyesight has Limitations", selected: false },

    { label: "The world is NOT perfect", selected: false },
    { label: "It is an optical illusion", selected: false },
  ]);
  const handleSelectQuestion = (itemIndex) => {
    const selectedQuestion = questions.map((item, index) => {
      return {
        ...item,
        selected: itemIndex === index,
      };
    });
    setQuestions(selectedQuestion);
  };
  return (
    <div className="assesmentWrapper py-2 m-0">
      <div className="container-fluid px-4 ">
        <div className="row d-flex justify-content-center">
          <div className="col-9">
            <div className="w-full d-flex flex-column">
              <p className="m-0 p-0 text-sm text-secondary">Your progress</p>
              <h4 className="m-0 p-0 h-6 text-white py-2">75% to complete</h4>
              <div className="progress progressBarOuter">
                <div className="progress-bar w-75 progressBarInner"></div>
              </div>
            </div>
          </div>
          <div className="col-2  ">
            <div className="d-flex w-100 h-100 justify-content-end align-items-center">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
      <div className="contaier-fluid px-4 m-auto  ">
        <div className="row    d-flex justify-content-center">
          <div className="col-11 bg-white rounded-md py-4 mt-4">
            <h4 className="ms-4 fw-bold mb-4 h3">
              Object are seen smaller at distant why?
            </h4>
            <div className="row px-4">
              <div className="col-md-7">
                <div className="questionImageWrapper">
                  <img
                    src={QuestionImage}
                    className="h-100 w-100 rounded-md object-cover"
                  />
                </div>
              </div>
              <div className="col-md-5 ">
                <div
                  className="w-full d-flex flex-column justify-content-between px-4"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex flex-column gap-3  ">
                    {questions.map((question, index) => (
                      <div
                        key={index}
                        className={`${
                          question.selected ? "selectedQuestion " : "question"
                        }`}
                        onClick={() => handleSelectQuestion(index)}
                        htmlFor={index}
                      >
                        <input
                          className="form-check-input p-0 m-0"
                          type="radio"
                          name="question"
                          id={index}
                          onChange={() => handleSelectQuestion(index)}
                          checked={question.selected}
                        ></input>
                        <label className="cursor-pointer">
                          {question.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <button className="btnSubmit ">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assesment;
