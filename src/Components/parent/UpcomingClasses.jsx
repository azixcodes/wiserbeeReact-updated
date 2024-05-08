import React from "react";
import { clockSvg } from "../../Constant/svgs";
import { chats } from "../../Constant/chats";
import { CalendarCheck2 } from "lucide-react";

const UpcomingClasses = () => {
  return (
    <div className="bg-white upComingClassMain rounded-md card">
      <p className="upComingHeading fw-bold">English Literature Class</p>
      <div className="clock_Dp ">
        <p className="text-sm fs-6 text-secondary">
          {clockSvg} 30/4/2024 09:41AM
        </p>
        <img
          className="upcomingClassCardImage rounded-md"
          src={chats[0].dp}
          alt="Photo"
        />
      </div>
      <div className="upcomingClassChips row gap-1 justify-content-center ">
        <p className="test text-capitalize col-md-3 py-2 px-1">test</p>
        <p className="test text-capitalize col-md-3 py-2 px-1">7th Class</p>
        <p className="test text-capitalize col-md-3 py-2 px-1">Online</p>
      </div>
      <div className="row px-2 text-secondary">
        <div className="col-md-12">Topic: English Grammar & Punctuation</div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12 ">
          <button
            className="text-capitalize fs-6 d-flex gap-2  align-items-center mx-auto"
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
        </div>
      </div>
    </div>
  );
};

export default UpcomingClasses;
