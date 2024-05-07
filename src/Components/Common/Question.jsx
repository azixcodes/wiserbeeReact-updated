import React, { useEffect, useState } from "react";

const Question = ({ question, num, loading, error, examId }) => {
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(question);
  const formatData = question?.map((item, index) => ({
    question: item.mcquestion,
    id: item.id,
    marks: 21,
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
    setData(formatData);
  }, [examId, question]);

  const handleSelectQuestion = (questionIndex, choiceIndex) => {
    const updatedData = data.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        return {
          ...question,
          choices: question.choices.map((choice, cIndex) => ({
            ...choice,
            isSelected: cIndex === choiceIndex,
          })),
        };
      }
      return question;
    });

    setData(updatedData);
  };

  return (
    <>
      {loading && "Loading..."}
      {error && "Something went wrong, please try again"}
      {data
        ? data.map((item, index) => (
            <div className="row mt-1 py-2 justify-content-between" key={index}>
              <div className="col-md-11 p-0 m-0">
                <h6 className="fw-bold">
                  Q{(num += 1)} : {item.question}
                </h6>
              </div>
              <div className="col-md-1 ">
                <div className="d-flex align-items-center gap-3 w-100 justify-content-end  ">
                  <h6 className="fs-5">Marks</h6>
                  <div className="py-2 px-2 rounded chipBg">{item.marks}</div>
                </div>
              </div>

              {item.choices?.map((choice, index) => (
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
                        choice.isSelected ? "selectedQuestion" : "question"
                      }`}
                    >
                      <label>{choice.option}</label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))
        : "Error listing questions, try again later"}
    </>
  );
};

export default Question;
