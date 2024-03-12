import React from "react";

const Question = ({ question, num, handleSelectQuestion }) => {
  return (
    <div className="row mt-1 py-2 justify-content-between">
      <div className="col-md-11 p-0 m-0">
        <h6 className="fw-bold">
          Q{(num += 1)} : {question.question}
        </h6>
      </div>
      <div className="col-md-1 ">
        <div className="d-flex align-items-center gap-3 w-100 justify-content-end  ">
          <h6 className="fs-5">Marks</h6>
          <div className="py-2 px-2 rounded chipBg">{question.marks}</div>
        </div>
      </div>

      {question.choices?.map((choice, index) => (
        <div className="col-md-6 " key={index}>
          <div className="mt-2 d-flex align-items-center gap-2">
            <input
              className="form-check-input cursor-pointer"
              type="radio"
              name={num}
              onChange={() => handleSelectQuestion(--num, index)}
            />

            <div
              className={`w-100 ${
                choice.selected ? "selectedQuestion" : "question"
              }`}
            >
              <label>{choice.label}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;
