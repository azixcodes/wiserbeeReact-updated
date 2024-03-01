import React from "react";
import { useNavigate } from "react-router-dom";
import { AssesmentCover } from "../Constant/images";
const AssesmentWelcome = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/assesment");
  };
  return (
    <div className="container-fluid px-4">
      <div className="row py-5">
        <div className="col-md-5 justify-content-center flex-column align-items-center gap-4 m-auto">
          <div>
            <h4 className="fw-bold"> Welcome John,</h4>
            <p className="" style={{ color: "#9C9C9C" }}>
              Always stay updated in your student portal
            </p>
          </div>
          <div className="w-full">
            <img
              src={AssesmentCover}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-5  rounded-md instructionBox  m-auto">
          <div className="w-full  h-100 d-flex flex-column gap-4">
            <h4>Instructions</h4>
            <ul>
              <li>Always stay updated in your student portal</li>
              <li>Select the most appropriate option</li>
              <li>Slide will be shown for limited time</li>
              <li>If you don't understand, let it go</li>
              <li>Silence must be maintained</li>
            </ul>
            <div className="w-100 d-flex  max-w-sm">
              <button onClick={handleNavigate}>Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentWelcome;
