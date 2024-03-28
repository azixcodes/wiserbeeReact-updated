import React from "react";
import { Plus } from "lucide-react";
import { classes } from "../../Constant/classes";
import { useNavigate } from "react-router-dom";
import { clockSvg, calanderSvg, studentSvg } from "../../Constant/svgs";
const Classes = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row p-0 m-0">
        <div className="col-md-12 p-0 m-0">
          <div className="leassonPlanheader d-flex justify-content-between">
            <h4 className="p-0 m-0 fw-bold ">My Classes</h4>
            <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mt-lg-0 d-flex  justify-content-center justify-content-lg-end">
              <button className="text-capitalize fs-6 gap-3 d-flex justify-content-between align-items-center btnWithIcon bg-main">
                <span className="px-1 py-1   fw-4 rounded p-0 addButtonSty">
                  <Plus />
                </span>
                <span>add new</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-capitalize  py-2">
        {classes.map((exam, index) => (
          <div
            className="col-md-4 cursor-pointer py-2 "
            key={index}
            //   onClick={() => handleQuestionNavigate(index)}
          >
            <div
              className="d-flex flex-column align-items-between  bg-white examDataWrapper px-2 py-3 borderRadius_15"
              onClick={() => navigate("/attendance")}
            >
              <h4 className="fw-bold p-0 m-0 fs-6 cursor-pointer px-2">
                {exam.title}
              </h4>
              <div className="d-flex flex-column flex-md-row gap-3 examChipsWrapper mt-3 px-2">
                {exam.tags.map((tag, index) => (
                  <div className="examChip" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3 mt-3 align-items-center justify-content-between examSvgsText px-2">
                <div className="d-flex gap-2 align-items-center">
                  {calanderSvg} <span className="p-0 m-0">{exam.date}</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  {studentSvg}{" "}
                  <span className="m-0 p-0">{exam.students} Students</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  {clockSvg}
                  <p className="p-0 m-0 ">{exam.duration}</p>
                </div>
              </div>
              {/* last row */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
