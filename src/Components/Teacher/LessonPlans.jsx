import React from "react";
import { Plus } from "lucide-react";
import { lessonplan } from "../../Constant/lessonplan";
import { useNavigate } from "react-router-dom";
import { bookSvg, calanderSvg, studentSvg } from "../../Constant/svgs";
const LessonPlans = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row p-0 m-0">
        <div className="col-md-12 p-0 m-0">
          <div className="leassonPlanheader d-flex justify-content-between">
            <h4 className="h1 fw-bold heading24px">My Lesson Plans</h4>
            <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mt-lg-0 d-flex  justify-content-center justify-content-lg-end">
              <button
                className="text-capitalize fs-6 gap-3 d-flex justify-content-between align-items-center"
                style={{
                  backgroundColor: "#463C77",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  color: "white",
                  width: "auto",
                  whiteSpace: "nowrap",
                  border: "none",
                }}
                onClick={() => navigate("/add-lesson-plan")}
              >
                <span className="px-1 py-1   fw-4 rounded p-0 addButtonSty">
                  <Plus />
                </span>
                <span>Add New</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-capitalize mt-3  py-3">
        {lessonplan.map((exam, index) => (
          <div
            className="col-md-4 cursor-pointer py-2 "
            key={index}
            //   onClick={() => handleQuestionNavigate(index)}
          >
            <div className="d-flex flex-column align-items-between  bg-white examDataWrapper px-2 py-3">
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
                  {calanderSvg} <span>{exam.date}</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  {studentSvg} <span>{exam.students} Students</span>
                </div>
                <div className="d-flex gap-2 align-items-center cursor-pointer">
                  {bookSvg} <span>{exam.language}</span>
                </div>
              </div>
              {/* last row */}
              <div className="d-flex gap-3 mt-3 align-items-center justify-content-between examSvgsText px-2">
                <div className="d-flex gap-2 align-items-center">
                  <span>Subject</span>
                  <p className="p-0 m-0 ">{exam.subject}</p>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <span>Duration</span>
                  <p className="p-0 m-0 ">{exam.duration}</p>
                </div>
                <div className="d-flex gap-2 align-items-center cursor-pointer">
                  <span>Day</span>
                  <p className="p-0 m-0 ">{exam.day}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonPlans;
