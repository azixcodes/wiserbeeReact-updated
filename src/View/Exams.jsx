import React from "react";
import { examsData } from "../Constant/exams";
import { useNavigate } from "react-router-dom";
import { CalendarCheck2 } from "lucide-react";
import { bulbSvg, clockSvg } from "../Constant/svgs";

const Exams = () => {
  const navigate = useNavigate();

  const handleQuestionNavigate = (id) => {
    navigate(`/exams/${id}`);
  };
  return (
    <>
      <div className="container-fluid bg-white rounded px-2 py-2">
        <div className="row d-flex align-items-center">
          <div className="col-md-12">
            <div className="d-flex justify-content-between">
              <h4 className="h1 fw-bold heading24px">My Exams</h4>
            </div>
          </div>
        </div>
        <div className="row text-capitalize mt-3 px-2 py-3">
          {examsData.map((exam, index) => (
            <div
              className="col-md-4 cursor-pointer py-2 px-2"
              key={index}
              onClick={() => handleQuestionNavigate(index)}
            >
              <div className="d-flex flex-column align-items-between examDataWrapper px-2 py-3">
                <h4 className="fw-bold p-0 m-0 fs-6 cursor-pointer">
                  {exam.title}
                </h4>
                <div className="d-flex flex-column flex-md-row gap-3 examChipsWrapper mt-3">
                  {exam.tags.map((tag, index) => (
                    <div className="examChip" key={index}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="d-flex gap-3 mt-3 align-items-center examSvgsText">
                  <div className="d-flex gap-1 align-items-center">
                    {clockSvg} <span>{exam.time}</span>
                  </div>
                  <div className="d-flex gap-1 align-items-center cursor-pointer">
                    {bulbSvg} <span>{exam.questions}</span>
                  </div>
                </div>
                <div className="d-flex mt-3">
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
                      <CalendarCheck2
                        style={{ height: "16px", width: "16px" }}
                      />

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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Exams;
