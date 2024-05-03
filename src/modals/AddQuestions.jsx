import React, { useState, useRef, useEffect } from "react";
import { Check, X } from "lucide-react";
import Counter from "../Components/Common/Counter";

const AddQuestions = ({ onRequestClose, questions }) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const [question, SetQuestion] = useState("");
  const [click, setClick] = useState(1);
  const [percentage, setPercentage] = useState(0);
  const refs = [ref1, ref2, ref3, ref4];

  const [quiz, setQuiz] = useState([]);

  const [options, setOptions] = useState([
    {
      id: 1,
      question: "",
      marks: 0,
      mcqs: [
        {
          answer: "",
          isCorrect: false,
          isChecked: false,
        },
        {
          answer: "",
          isCorrect: false,
          isChecked: false,
        },
        {
          answer: "",
          isCorrect: false,
          isChecked: false,
        },
        {
          answer: "",
          isCorrect: false,
          isChecked: false,
        },
      ],
    },
  ]);
  const [questionCounter, setquestionCounter] = useState(0);

  let dots = [];
  for (let i = 0; i < questions; i++) {
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
  const handleOptionSelect = (questionIndex, mcqIndex) => {
    const updatedOptions = options.map((option, index) => {
      return {
        ...option,
        mcqs: option.mcqs.map((mcq, i) => ({
          ...mcq,
          isChecked: i === mcqIndex,
          isCorrect: i === mcqIndex,
        })),
      };
    });

    setOptions(updatedOptions);
  };

  const handleClickNext = () => {
    const oldOptions = [...options];
    if (click >= questions) {
      alert("Question completed");
      return;
    }
    const newMcqs = options[0].mcqs;

    if (question === "") {
      alert("Please add a question");
      return;
    } else if (
      newMcqs[0].answer === "" ||
      newMcqs[1].answer === "" ||
      newMcqs[2].answer === "" ||
      newMcqs[3].answer === ""
    ) {
      alert("please provide all options");
      return;
    } else if (
      newMcqs[0].isCorrect === false &&
      newMcqs[1].isCorrect === false &&
      newMcqs[2].isCorrect === false &&
      newMcqs[3].isCorrect === false
    ) {
      alert("Please mark at least one option as correct");
      return;
    } else if (questionCounter === 0) {
      alert("Marks should be greater than 0");
      return;
    }

    const newQuestion = {
      id: quiz.length + 1,
      question: question,
      marks: questionCounter,
      mcqs: newMcqs,
    };
    setQuiz([...quiz, newQuestion]);
    setClick(click + 1);
    setPercentage((prev) => prev + 100 / questions);
    setquestionCounter(0);
    setOptions(oldOptions);

    SetQuestion("");
    for (let i = 0; i < refs.length; i++) {
      refs[i].current.value = "";
    }
  };
  useEffect(() => {
    setPercentage((prev) => prev + 100 / questions);
  }, []);
  const handleOptionChange = (index, e) => {
    const newMcqs = options[0].mcqs;

    newMcqs[index].answer = e.target.value;

    const oldOptions = [...options];

    oldOptions[0].mcqs = newMcqs;

    setOptions(oldOptions);

    // call an api it was the last question...

    if (click >= questions) {
    }
  };

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
            <label>
              {click}/{questions}
            </label>
            <div className="questionBarProgress">
              {dots.map((_, index) => (
                <div className="dot" key={index} style={{}}></div>
              ))}
              <div
                className="progressBar"
                style={{ width: percentage + "%" }}
              ></div>
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
              disable={click >= questions}
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

      <>
        {options.map((option, index) => (
          <div className="flex flex-column" key={index}>
            <div className="row mt-4 px-4">
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter possible question here"
                  onChange={(e) => SetQuestion(e.target.value)}
                  value={question}
                />
              </div>
            </div>
            {option.mcqs.map((mcq, i) => (
              <div className="row px-4 mt-4" key={i}>
                <div className="col-md-12 p-0 m-0">
                  <div className="d-flex w-100 flex-column gap-4 px-3">
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className=" position-relative w-100 rounded"
                        style={{ border: "1px solid #E2E2E2" }}
                      >
                        <input
                          type="text"
                          placeholder="Enter possible option here"
                          className="form-control"
                          style={{ border: "none", outline: "none" }}
                          id={`option${i}`}
                          onChange={(e) => handleOptionChange(i, e)}
                          ref={refs[i]}
                        />
                      </div>
                      <div
                        className="d-flex gap-3 align-items-center cursor-pointer"
                        onClick={() => handleOptionSelect(option.id, i)}
                      >
                        <div
                          className="addQuestionIconWrapper"
                          style={{
                            backgroundColor: mcq.isChecked
                              ? "#3DC079"
                              : "#9fdfbc",
                            color: "white",
                          }}
                        >
                          <Check />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </>
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
                onClick={handleClickNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
