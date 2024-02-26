import React, { useState } from "react";
import * as images from "../Constant/images";
import { Link } from "react-router-dom";
import {
  managementicon,
  parenticon,
  studenticon,
  teachericon,
} from "../Constant/svgs";
import "../usman.css";

const Sign = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMainBoxClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const options = ["Student", "Teacher", "Parents", "Management"]; // Replace with your desired names
  const svgPaths = [studenticon, teachericon, parenticon, managementicon];
  return (
    <>
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="sign_in_box">
            <div className="row sign_in_box2">
              <div className="col-lg-1 col-md-1 col-sm-1"></div>
              <div className="col-lg-10 col-md-10 col-sm-10">
                <div className="bg-white signin_box rounded-4">
                  <div className="pt-3 ps-4 pe-4">
                    <h3 className="poppins-bold sign_in_heading mt-3">
                      Login As
                    </h3>
                    <p className="poppins-regular sign_in_paragraph">
                      Please selecting your role from four distinct options.
                    </p>
                    {options.map((option, index) => (
                      <div className="pt-3" key={index}>
                        <div
                          className={`main_box ${
                            index === activeIndex ? "active" : ""
                          }`}
                          onClick={() => handleMainBoxClick(index)}
                        >
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-4 main">
                              {svgPaths[index]}{" "}
                              <p className="p-0 m-0">{option}</p>
                            </div>

                            <div
                              className={`circle-checkbox ${
                                index === activeIndex ? "active" : ""
                              }`}
                              onClick={() => handleMainBoxClick(index)}
                            >
                              <div className="inner-circle"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <Link className="text-decoration-none" to="/sign-in">
                      <div className="d-grid gap-2 mt-4 pt-4 pb-3">
                        <button
                          className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                          type="button"
                        >
                          Continue
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
