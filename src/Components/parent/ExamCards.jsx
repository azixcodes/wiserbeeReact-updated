import React from "react";
import { CalendarClock } from "lucide-react";
import { chats } from "../../Constant/chats";
import { clockSvg, parentCalenderSvg2 } from "../../Constant/svgs";
const ExamCards = () => {
  return (
    <div className="bg-white upComingClassMain rounded-md card py-3 mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <p className="upComingHeading fw-bold">English Class</p>
        <img
          className="upcomingClassCardImage rounded-md"
          src={chats[0].dp}
          alt="user"
        />
      </div>
      <div className="clock_Dp ">
        <p className="text-sm fs-6 text-secondary">
          {clockSvg} 30/4/2024 09:41AM
        </p>
      </div>
      <div className="upcomingClassChips row gap-1 justify-content-center px-1">
        <p className="test text-capitalize col-md-3 py-2 px-1">24 Lectures</p>
        <p className="test text-capitalize col-md-3 py-2 px-1">English</p>
        <p className="test text-capitalize col-md-3 py-2 px-1">Section B</p>
      </div>
      <div className="d-flex align-items-center gap-4">
        <div className="d-flex gap-1 align-items-center">
          {parentCalenderSvg2}{" "}
          <span className="  text-secondary text-xs">Aug 23-July 24</span>
        </div>
        <div className="d-flex gap-1 align-items-center">
          {clockSvg} <span className=" text-xs text-secondary">30 Mins</span>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 ">
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
            // onClick={() => handleClickScheduleExam(exam.id)}
          >
            <span className="rounded p-0 m-0">
              <CalendarClock style={{ height: "16px", width: "16px" }} />
            </span>
            <span style={{ fontSize: "11px" }} className="p-0 m-0">
              Schedule Exam
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamCards;
