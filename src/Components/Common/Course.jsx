import React from "react";
import { courses } from "../../Constant/courses";
import Chip from "./Chip";
import { User } from "lucide-react";
import Stars from "./Stars";

const Course = () => {
  return (
    <div className="courseLists gap-3 w-100">
      {courses.map((course, index) => (
        <div
          className="courseCard customShadow px-3 py-3 position-relative d-flex flex-column gap-2"
          style={{ width: "18rem" }}
          key={index}
        >
          <img src={course.thumbnail} className="rounded" />
          <div className="position-absolute d-flex mt-1 ms-2 gap-3">
            {course.bestSeller && (
              <Chip text="Best Seller" bg="#fffa7d" color="black" />
            )}
            {course.onSale && (
              <Chip text="20% OFF" bg="#A04AE3" color="white" />
            )}
          </div>
          <div className="fw-bold py-1">{course.courseTitle}</div>
          <div className="d-flex align-items-center courseInstructor">
            <div className="d-flex">
              <User className="userIcon" />
              <h4 className="p-0 m-0">{course.instructor}</h4>
            </div>
            <div className="d-flex align-items-center">
              <Stars stars={5} />
              <h5 className="p-0 m-0">({course.totalRatings})</h5>
            </div>
          </div>
          <div className="courseDescription">{course.description}</div>
          <div className="d-flex gap-3 pricing">
            <h4 className="m-0 p-0 fw-bold salesPrice">{course.salesPrice}</h4>
            <h4 className="m-0 p-0 text-sm normalPrice">{course.price}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
