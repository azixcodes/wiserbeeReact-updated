import React, { useEffect, useState } from "react";

import ProgressbarPrimary from "../Components/PrimaryProgressbar/ProgressbarPrimary";
import { examQuestions } from "../Constant/questions";
import { useParams } from "react-router-dom";
import Question from "../Components/Common/Question";
import useFetch from "../hooks/UseFetch";
const ExamQuestions = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch("/quiz/choice/get_list/");
  const [examId, setExamId] = useState(null);

  useEffect(() => {
    setExamId(id);
  }, [id]);
  const mcqForID = data[id];

  const [questions, setQuestions] = useState(mcqForID);
  const handleSelectQuestion = (questionIndex, choiceIndex) => {
    const updatedQuestions = questions.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return {
          ...question,
          choices: question.choices.map((choice, cIndex) => ({
            ...choice,
            selected: cIndex === choiceIndex,
          })),
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };
  const totalQuestions = mcqForID?.length;
  return (
    <div className="container-fluid px-4 py-4 rounded shadow bg-white">
      {!mcqForID ? (
        <h4>
          We're sorry, but it seems there's no exam available for the Exam..
        </h4>
      ) : (
        <>
          <div className="row ">
            <div className="col-md-11">
              <div className="w-100 d-flex flex-column gap-1 justify-content-center ">
                <p className="m-0 p-0 h6 text-secondary">
                  Your progress {totalQuestions}
                </p>
                <label className="fs-6 fw-bold">15% to complete</label>
                <div className="questionBarProgress">
                  {examQuestions.map((_, index) => (
                    <div className="dot" key={index}></div>
                  ))}
                  <div className="progressBar"></div>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <ProgressbarPrimary />
            </div>
          </div>
          {/* Questions */}
          <div className="row px-2">
            <Question
              question={mcqForID}
              num={0}
              // handleSelectQuestion={handleSelectQuestion}
              examId={examId}
              loading={loading}
              error={error}
            />
          </div>
          <div className="row mt-3 px-2">
            <div className="col-md-12 ">
              <div className="btnGroup d-flex justify-content-end gap-2 align-items-center px-4  ">
                <button className="rounded px-4 py-2 btnCancel">Cancel</button>
                <button className="rounded btnNext px-4 py-2">Next</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExamQuestions;
