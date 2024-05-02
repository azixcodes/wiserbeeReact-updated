import React from "react";
import { CalendarCheck2, CalendarClock, Plus } from "lucide-react";
import { bulbSvg, clockSvg } from "../../Constant/svgs";
import { postRequest } from "../../services";

const ExamCards = ({ exam, handleClickScheduleExam }) => {
  const examId = [];
  const renderBtn = (id) => {
    examId.push(id);
  };
  console.log(examId);
  return (
    <div className="col-md-4 mb-3">
      <div className="d-flex flex-column align-items-between examDataWrapper px-2 py-3">
        <h4 className="fw-bold p-0 m-0 fs-6 cursor-pointer">
          {exam.Exam_title}
        </h4>
        <div className="d-flex flex-column flex-md-row gap-3 examChipsWrapper mt-3">
          {/* {exam.tags.map((tag, index) => (
            <div className="examChip" key={index}>
              {tag}
            </div>
          ))} */}
          <div className="examChip">{exam.section}</div>
          <div className="examChip">{exam.category}</div>
          <div className="examChip">{exam.standard}</div>
        </div>
        <div className="d-flex gap-3 mt-3 align-items-center examSvgsText">
          <div className="d-flex gap-1 align-items-center">
            {clockSvg}{" "}
            <span>
              {exam.duration_in_minutes}{" "}
              {exam.duration_in_minutes > 1 ? " Mins" : " Min"}
            </span>
          </div>
          <div
            className="d-flex gap-1 align-items-center cursor-pointer"
            // onClick={handleClickQuestions}
          >
            {bulbSvg}{" "}
            <span>
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
              {/* <button
                className="text-capitalize fs-6 d-flex gap-2 align-items-center bgMain"
                style={{
                  padding: "4px 4px",
                  borderRadius: "8px",
                  color: "white",
                  width: "auto",
                  fontSize: "12px",
                  border: "none",
                }}
                onClick={() => handleClickScheduleExam(exam.id)}
              >
                <span className="rounded p-0 m-0">
                  <CalendarClock style={{ height: "16px", width: "16px" }} />
                </span>
                <span style={{ fontSize: "11px" }} className="p-0 m-0">
                  Schedule Exam
                </span>
              </button> */}
              <div>{renderBtn(exam.id)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamCards;
