import React from "react";
import { CalendarCheck2, CalendarClock } from "lucide-react";
import { bulbSvg, activeBulbSvg, clockSvg } from "../../Constant/svgs";
import useFetch from "../../hooks/UseFetch";
import { formatDate } from "../../Constant/helpers";
const ExamCards = ({ exam, handleClickScheduleExam, handleClickQuestions }) => {
  const { data: questionData } = useFetch("/quiz/choice/get_list");

  const renderButtons = (start_date, end_date, start_time, end_time, id) => {
    console.log(start_date, end_date, start_time, end_time);
    // // const index = quizData.findIndex((item) => item.exam_quiz === id);

    if (
      start_date !== null &&
      end_date !== null &&
      start_time !== null &&
      end_time !== null
    ) {
      // const date = quizData[index].end_date;
      const timing = `${start_time.substring(0, 5)}-${end_time.substring(
        0,
        5
      )}`;
      return (
        <div className="d-flex   align-items-center gap-2 fs-6 ">
          <button
            className="text-capitalize fs-6 d-flex gap-2  align-items-center"
            style={{
              backgroundColor: "#EDEBF1",
              padding: "4px 4px",
              borderRadius: "8px",
              color: "#463C77",
              width: "auto",
              border: "none",
            }}
          >
            <CalendarCheck2 style={{ height: "16px", width: "16px" }} />

            <span className="p-0 m-0" style={{ fontSize: "12px" }}>
              Scheduled
            </span>
          </button>
          <span
            className="p-0 m-0  "
            style={{ color: "#857EA5", fontSize: "10px" }}
          >
            {formatDate(end_date)} ({timing})
          </span>
        </div>
      );
    }
    return (
      <button
        className="text-capitalize fs-6 d-flex gap-2 align-items-center bgMain"
        style={{
          padding: "4px 4px",
          borderRadius: "8px",
          color: "white",
          width: "auto",
          fontSize: "12px",
          border: "none",
        }}
        // onClick={() => handleClickScheduleExam(id)}
      >
        <span className="rounded p-0 m-0">
          <CalendarClock style={{ height: "16px", width: "16px" }} />
        </span>
        <span style={{ fontSize: "11px" }} className="p-0 m-0">
          Schedule Exam
        </span>
      </button>
    );
  };
  const checkQuestions = (id) => {
    const arr = [];
    for (let res in questionData) {
      arr.push(questionData[res]);
    }

    const index = arr.flat().findIndex((item) => item.exam_quiz === id);
    if (index !== -1) {
      return (
        <span
          onClick={() =>
            handleClickQuestions(exam.number_of_questions, exam.id)
          }
        >
          {activeBulbSvg}
        </span>
      );
    } else {
      return <span>{bulbSvg}</span>;
    }
  };
  return (
    <div className="col-md-4 mb-3">
      <div className="d-flex flex-column align-items-between examDataWrapper px-2 py-3">
        <h4 className="fw-bold p-0 m-0 fs-6 cursor-pointer">
          {exam.Exam_title}
        </h4>
        <div className="d-flex flex-column flex-md-row gap-3 examChipsWrapper mt-3">
          <div className="examChip">{exam.section}</div>
          <div className="examChip">{exam.category}</div>
          <div className="examChip">{exam.standard}</div>
        </div>
        <div className="d-flex gap-3 mt-3 align-items-center examSvgsText">
          <div className="d-flex gap-1 align-items-center">
            {clockSvg}
            <span>
              {exam.duration_in_minutes}
              {exam.duration_in_minutes > 1 ? " Mins" : " Min"}
            </span>
          </div>
          <div className="d-flex gap-1 align-items-center cursor-pointer">
            {checkQuestions(exam.id)}
            <span
            // onClick={() =>
            //   handleClickQuestions(exam.number_of_questions, exam.id)
            // }
            >
              {exam.number_of_questions}
              {exam.number_of_questions > 1 ? " Questions" : " Question"}
            </span>
          </div>
        </div>
        <div className="d-flex mt-3">
          {exam.schdeduled ? (
            <div className="d-flex   align-items-center gap-2 fs-6 ">
              <button
                className="text-capitalize fs-6 d-flex gap-2  align-items-center"
                style={{
                  backgroundColor: "#EDEBF1",
                  padding: "4px 4px",
                  borderRadius: "8px",
                  color: "#463C77",
                  width: "auto",
                  border: "none",
                }}
              >
                <CalendarCheck2 style={{ height: "16px", width: "16px" }} />

                <span className="p-0 m-0" style={{ fontSize: "12px" }}>
                  Scheduled
                </span>
              </button>
              <span
                className="p-0 m-0  "
                style={{ color: "#857EA5", fontSize: "10px" }}
              >
                {exam.scheduledData}
              </span>
            </div>
          ) : (
            <div className="d-flex   align-items-center fs-6 ">
              {renderButtons(
                exam.start_end,
                exam.end_date,
                exam.start_time,
                exam.end_time,
                exam.id
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamCards;
