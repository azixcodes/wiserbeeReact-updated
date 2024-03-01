import React from "react";
import { courses } from "../../Constant/courses";
import Chip from "./Chip";
import { BarChart, User } from "lucide-react";
import Stars from "./Stars";

const Course = () => {
  return (
    <div className="container">
      <div className="row ">
        {courses.map((course, index) => (
          <div className="col-lg-4 col-sm-6 col-md-4">
            <div
              className="col-sm-12 col-md-12 position-relative customShadow  courseCard px-3 py-2 position-relative d-flex flex-column gap-2 m-2"
              key={index}
            >
              <div
                style={{
                  width: "100%",
                  height: "180px",
                }}
              >
                <img src={course.thumbnail} className="rounded h-100 w-100" />
              </div>
              <div className="position-absolute d-flex mt-1 ms-2 gap-3">
                {course.bestSeller && (
                  <Chip text="Best Seller" bg="#fffa7d" color="black" />
                )}
                {course.onSale && (
                  <Chip text="20% OFF" bg="#A04AE3" color="white" />
                )}
              </div>
              <div className="fw-bold py-1">{course.courseTitle}</div>
              <div className="d-flex align-items-center courseInstructor d-md-flex flex-md-row flex-column">
                <div className="d-flex">
                  <User className="userIcon" />
                  <h4 className="p-0 m-0">{course.instructor}</h4>
                </div>
                <div className="d-flex  align-items-center ">
                  <Stars stars={5} />
                  <h5 className="p-0 m-0">({course.totalRatings})</h5>
                </div>
              </div>
              <div className="courseDescription">{course.description}</div>
              <div className="d-flex gap-3 pricing">
                <h4 className="m-0 p-0 fw-bold salesPrice">
                  {course.salesPrice}
                </h4>
                <h4 className="m-0 p-0 text-sm normalPrice">{course.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
