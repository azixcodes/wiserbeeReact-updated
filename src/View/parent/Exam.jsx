import React from "react";
import ExamCards from "../../Components/parent/ExamCards";

const Exam = () => {
  return (
    <div className="row mt-2">
      <div className="col-md-4">
        <ExamCards />
      </div>
      <div className="col-md-4">
        <ExamCards />
      </div>
      <div className="col-md-4">
        <ExamCards />
      </div>

      <div className="col-md-4">
        <ExamCards />
      </div>
      <div className="col-md-4">
        <ExamCards />
      </div>
    </div>
  );
};

export default Exam;
