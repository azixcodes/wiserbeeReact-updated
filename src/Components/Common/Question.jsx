const Question = ({ question, loading, error, handleSelectQuestion }) => {
  return (
    <>
      {loading && "Loading..."}
      {error && "Something went wrong, please try again"}
      {question
        ? question?.map((item, index) => (
            <div className="row mt-1 py-2 justify-content-between" key={index}>
              <div className="col-md-11 p-0 m-0">
                <h6 className="fw-bold">
                  Q{item.questionNo} : {item.question}
                </h6>
              </div>
              <div className="col-md-1 ">
                <div className="d-flex align-items-center gap-3 w-100 justify-content-end  ">
                  <h6 className="fs-5">Marks</h6>
                  <div className="py-2 px-2 rounded chipBg">
                    {item.marks < 10 ? `0${item.marks}` : item.marks}
                  </div>
                </div>
              </div>
              {item.choices?.map((choice, choiceIndex) => (
                <div className="col-md-6 " key={choiceIndex}>
                  <div className="mt-2 d-flex align-items-center gap-2">
                    <div
                      className="questionDotOuter"
                      onClick={() => handleSelectQuestion(item.id, choiceIndex)}
                    >
                      {choice.isSelected && (
                        <div className="questionDotInner"></div>
                      )}
                    </div>
                    <div
                      onClick={() => handleSelectQuestion(item.id, choiceIndex)}
                      id="options"
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
        : "No questions have been added."}
    </>
  );
};

export default Question;
