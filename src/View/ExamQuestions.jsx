import React, { useEffect, useState } from "react";

import ProgressbarPrimary from "../Components/PrimaryProgressbar/ProgressbarPrimary";

import { useParams, useNavigate } from "react-router-dom";
import Question from "../Components/Common/Question";
import useFetch from "../hooks/UseFetch";

const ExamQuestions = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useFetch("/quiz/choice/get_list/");
  const [examId, setExamId] = useState(null);
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 3;
  useEffect(() => {
    setExamId(id);
  }, [id]);

  const mcqForID = data ? data[id] : null;

  const [questions, setQuestions] = useState(mcqForID);
  useEffect(() => {
    if (mcqForID) {
      setQuestions(mcqForID);
    }
  }, [mcqForID]);

  const formattedQuestions = questions?.map((item, index) => ({
    question: item.mcquestion,
    id: item.id,
    marks: item.marks,
    questionNo: ++index,
    choices: [
      {
        isSelected: false,
        option: item.option_1,
        isCorrect: item.option_1_is_correct,
      },
      {
        isSelected: false,
        option: item.option_2,
        isCorrect: item.option_2_is_correct,
      },
      {
        isSelected: false,
        option: item.option_3,
        isCorrect: item.option_3_is_correct,
      },
      {
        isSelected: false,
        option: item.option_4,
        isCorrect: item.option_4_is_correct,
      },
    ],
  }));

  useEffect(() => {
    setItems(formattedQuestions);
  }, [questions]);

  const handleSelectQuestion = (id, choiceIndex) => {
    const updatedQuestions = items?.map((question) => {
      if (question.id === id) {
        return {
          ...question,
          choices: question?.choices?.map((choice, index) => ({
            ...choice,
            isSelected: choiceIndex === index,
          })),
        };
      }
      return question;
    });

    setItems(updatedQuestions);
  };

  const handleNext = (e) => {
    const label = e.target.textContent;

    if (label === "Next") {
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, Math.floor(mcqForID?.length / questionsPerPage))
      );
    } else {
      alert("Questions completed");
    }
  };
  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, items?.length);
  const displayedQuestions = items?.slice(startIndex, endIndex);
  const progress =
    ((startIndex + displayedQuestions?.length) / (items ? items.length : 1)) *
    100;
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
                <p className="m-0 p-0 h6 text-secondary">Your progress</p>
                <label className="fs-6 fw-bold">{`${Math.round(
                  progress
                )}% completed`}</label>
                <div className="questionBarProgress">
                  {formattedQuestions?.map((_, index) => (
                    <div className="dot" key={index}></div>
                  ))}
                  <div
                    className="progressBar"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <ProgressbarPrimary id={examId} />
            </div>
          </div>
          {/* Questions */}
          <div className="row px-2">
            <Question
              question={displayedQuestions}
              num={0}
              handleSelectQuestion={handleSelectQuestion}
              examId={examId}
              loading={loading}
              error={error}
            />
          </div>
          <div className="row mt-3 px-2">
            <div className="col-md-12 ">
              <div className="btnGroup d-flex justify-content-end gap-2 align-items-center px-4  ">
                <button
                  className="rounded px-4 py-2 btnCancel"
                  onClick={() => navigate("/exams")}
                >
                  Cancel
                </button>
                <button
                  className="rounded btnNext px-4 py-2"
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                <button
                  className="rounded btnNext px-4 py-2"
                  onClick={handleNext}
                  // disabled={endIndex >= mcqForID.length}
                >
                  {endIndex >= formattedQuestions?.length ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExamQuestions;
