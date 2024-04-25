import React from "react";
import { pauseBtn, leacture } from "../../Constant/svgs";
import { useNavigate } from "react-router-dom";

const CoursesList = (props) => {
  const navigate = useNavigate();
  const {
    imgesLect,
    tagLect,
    headingLect,
    pragraphLect,
    durationLect,
    completedLect,
  } = props;

  return (
    <div className="courseBox  w-100 mt-3 customShadow  ">
      <div className="thubnailCourse">
        <img src={imgesLect} alt="coursesImg" />
        <span>{tagLect}</span>
      </div>
      <div className="courseDetails">
        <div className="courseDetalsTxt">
          <h6>{headingLect}</h6>
          <p>{pragraphLect}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="w-50">
            <div className="progress">
              <div className="bar" style={{ width: completedLect }}></div>
            </div>
            <div className="lctDuration">
              {leacture}
              <p>{durationLect}</p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary continueBtn bgMain"
            onClick={() => navigate("/course/21")}
          >
            Continue {pauseBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
