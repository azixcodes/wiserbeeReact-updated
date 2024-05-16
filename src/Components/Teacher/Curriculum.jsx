import React from "react";
import { curriculum } from "../../Constant/curriculum";
import Chip from "../Common/Chip";
import { User } from "lucide-react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { courseSvg, languageSvg } from "../../Constant/svgs";
const Curriculum = () => {
  const toggleFilter = useSelector((state) => state.toggler.toggleFilter);

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
      {curriculum.map((cur, index) => (
        <div
          className={`${
            toggleFilter ? "col-md-6 col-xl-4" : "col-md-4 col-xl-3"
          } col-sm-6 cursor-pointer `}
          onClick={() => navigate("/course/21")}
          key={index}
        >
          <div className="col-sm-12 col-md-12 position-relative customShadow  coursedCard px-2 py-2 position-relative d-flex flex-column gap-2 m-2">
            <div className="CourseThumbnail">
              <img src={cur.thumbnail} className="rounded h-100 w-100" />
            </div>
            <div className="position-absolute d-flex mt-1 ms-2 gap-3">
              {cur.bestSeller && (
                <Chip text={cur.bestSeller} bg="#fffa7d" color="black" />
              )}
              {cur.onSale && (
                <Chip text={cur.onSale} bg="#A04AE3" color="white" />
              )}
            </div>
            <h6 className="mb-0 fw-bold">{cur.courseTitle}</h6>
            <div className="d-flex align-items-center justify-content-between authorSection">
              <div className="d-flex align-items-center gap-1">
                <span>{courseSvg}</span>
                <label htmlFor="" className="text-capitalize">
                  40 Courses
                </label>
              </div>
              <div className="d-flex align-items-center gap-1">
                <span>{languageSvg}</span>
                <label htmlFor="" className="text-capitalize">
                  Languages
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center courseInstructor d-md-flex flex-md-row flex-column">
              <div className="d-flex">
                <User className="userIcon" />
                <h4 className="p-0 m-0 text-uppercase">
                  {getInitials(cur.instructor)}
                </h4>
              </div>
              <div className="d-flex  align-items-center ">
                {/* <Stars stars={5} /> */}
                <div
                  className="Stars"
                  style={{ "--rating": cur.totalStar, fontSize: "18px" }}
                  aria-label="Rating of this product is 2.3 out of 5."
                ></div>
                <h5 className="p-0 m-0">({cur.totalRatings})</h5>
              </div>
            </div>
            <div className="courseDescription text-container">
              <p>{cur.description}</p>
            </div>
            <div className="d-flex gap-3 pricing ">
              <h6 className="m-0 p-0 fw-bold salesPrice">{cur.salesPrice}</h6>
              <h6 className="m-0 p-0 text-sm normalPrice align-self-center">
                {cur.price}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
