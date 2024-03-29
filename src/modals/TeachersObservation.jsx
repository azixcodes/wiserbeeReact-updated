import React from "react";
import { X } from "lucide-react";
import { observation } from "../Constant/observation";
import FlexBtn from "../Components/Common/FlexBtn";
const TeachersObservation = ({ onRequestClose }) => {
  return (
    <div
      className="container-fluid p-0 m-0 pb-4 modalWrapper position-relative  "
      style={{ height: "90vh" }}
    >
      <div className="row bg-primary" style={{ height: "8%" }}>
        <div className="col-md-12 bg-secondary">
          <div className="observationModalheader bgMain d-flex align-items-center w-full px-3 justify-content-between text-white">
            <h6 className="m-0 p-0">Teacher's Observation</h6>
            <X className="cursor-pointer " onClick={onRequestClose}/>
          </div>
        </div>
      </div>

      <div className="row px-3 observationContent">
        <div className="col-md-12 px-3 py-3 ">
          {observation.map((ob, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-md-3">
                <label className="observationText fw-bold">{ob.title}</label>
              </div>
              <div className="col-md-9">
                <div className="observationOptions d-flex flex-column gap-2 justify-content-center">
                  <div className="options d-flex gap-2 align-items-center">
                    {ob.options.map((op, i) => {
                      const randomId = Math.random() * 0.3;
                      return (
                        <div
                          className="form-check align-items-center d-flex gap-2"
                          key={i}
                        >
                          <input
                            className="form-check-input reviewForm"
                            type="radio"
                            name="flexRadioDefault"
                            id={randomId}
                          />
                          <label
                            className="form-check-label formTeacherRep"
                            for={randomId}
                          >
                            {op}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write your comments here"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="observationFooter d-flex justify-content-end px-3 py-2">
        <div className="d-flex gap-3 justify-content-end">
          <FlexBtn
            label="Cancel"
            color="#463C77"
            bgColor="#EDEBF1"
            handleClick={onRequestClose}
          />
          <FlexBtn
            // icon={exportSvg}
            label="Save  "
            color="white"
            bgColor="#241763"
            style={{ fontSize: "14px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeachersObservation;
