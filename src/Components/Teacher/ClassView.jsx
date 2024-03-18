import React from "react";
import { clockSvg, studentSvg } from "../../Constant/svgs";
import { CalendarCheck2 } from "lucide-react";

const ClassView = () => {
  return (
    <>
      <div className="container p-3 bg-white pb-3 rounded-4 shadow">
        <h6 className=" heading-class fw-bold pt-3">Class 7th Standard</h6>
        <div className="d-flex justify-content-between mt-3">
          <div className=" d-flex align-items-center gap-1">
            <span className="">{clockSvg}</span>
            <span className="text-class">30 Minutes</span>
          </div>
          <div className=" d-flex align-items-center gap-1">
            <span>{studentSvg}</span>
            <span className="text-class">15 Students</span>
          </div>
        </div>

        <div className="mt-4 d-flex  justify-content-between">
          <div className="test p-2 ">
            <p className="m-0 p-0">Test</p>
          </div>
          <div className="seven-class p-2">
            <p className="m-0 p-0">7th Class</p>
          </div>
          <div className="section p-2">
            <p className="m-0 p-0">Section B</p>
          </div>
        </div>
        <div className="d-flex mt-3 gap-2">
          <span className="english-para">Topic:</span>
          <span className="english-para">English Grammar and Punctuation</span>
        </div>
        <div className=" d-flex justify-content-center mt-3">
          <button className="btn-class">
            {" "}
            <CalendarCheck2 size={15} /> Scheduled
          </button>
        </div>
      </div>
    </>
  );
};

export default ClassView;
