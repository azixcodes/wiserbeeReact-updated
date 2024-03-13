import React from "react";
import { courses } from "../../Constant/courses";
import Chip from "./Chip";
import { User } from "lucide-react";
import { Store } from "../../ContextAPI/Context";

import { useNavigate } from "react-router-dom";

const Course = () => {
  const { toggleFilter } = Store();
  const navigate = useNavigate();
  function getInitials(name) {
    const parts = name.split(" ");
    let initials = "";
    for (let part of parts) {
      initials += part[0];
    }
    return initials;
  }

  return (
    <div className="row pl-0">
      {courses.map((course, index) => (
        <div
          className={`${
            toggleFilter ? "col-md-4" : "col-md-3"
          } col-sm-6 cursor-pointer `}
          onClick={() => navigate("/course/21")}
          key={index}
        >
          <div className="col-sm-12 col-md-12 position-relative customShadow  courseCard px-2 py-2 position-relative d-flex flex-column gap-2 m-2">
            <div className="CourseThumbnail">
              <img src={course.thumbnail} className="rounded h-100 w-100" />
            </div>
            <div className="position-absolute d-flex mt-1 ms-2 gap-3">
              {course.bestSeller && (
                <Chip text={course.bestSeller} bg="#fffa7d" color="black" />
              )}
              {course.onSale && (
                <Chip text={course.onSale} bg="#A04AE3" color="white" />
              )}
            </div>
            <h6 className="mb-0 fw-bold">{course.courseTitle}</h6>
            <div className="d-flex align-items-center courseInstructor d-md-flex flex-md-row flex-column">
              <div className="d-flex">
                <User className="userIcon" />
                <h4 className="p-0 m-0 text-uppercase">
                  {getInitials(course.instructor)}
                </h4>
              </div>
              <div className="d-flex  align-items-center ">
                {/* <Stars stars={5} /> */}
                <div
                  className="Stars"
                  style={{ "--rating": course.totalStar, fontSize: "18px" }}
                  aria-label="Rating of this product is 2.3 out of 5."
                ></div>
                <h5 className="p-0 m-0">({course.totalRatings})</h5>
              </div>
            </div>
            <div className="courseDescription text-container">
              <p>{course.description}</p>
            </div>
            <div className="d-flex gap-3 pricing ">
              <h6 className="m-0 p-0 fw-bold salesPrice">
                {course.salesPrice}
              </h6>
              <h6 className="m-0 p-0 text-sm normalPrice align-self-center">
                {course.price}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
