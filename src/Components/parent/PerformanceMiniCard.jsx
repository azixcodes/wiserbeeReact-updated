import React from "react";
import { arrowPrimary, arrowPink, arrowSucces } from "../../Constant/svgs";
const PerformanceMiniCard = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row g-4">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-white shadow rounded border-0 px-2 py-4 cardMini d-flex justify-content-center">
            <div className="d-flex gap-2 align-items-center">
              {arrowPrimary}
              <div>
                <h3 className="fw-bold p-0 m-0 fs-5">80%</h3>
                <p className="text-capitalize p-0 m-0  text-xs">
                  behavioral assesment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-white shadow rounded border-0 py-4 px-2 cardMini d-flex justify-content-center">
            <div className="d-flex gap-2 align-items-center">
              {arrowPink}
              <div>
                <h3 className="fw-bold p-0 m-0 fs-5">80%</h3>
                <p className="text-capitalize p-0 m-0 text-capitalize p-0 m-0  text-xs">
                  student attendance
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card bg-white shadow rounded border-0 py-4 px-2 cardMini d-flex justify-content-center">
            <div className="d-flex gap-2 align-items-center">
              {arrowSucces}
              <div>
                <h3 className="fw-bold p-0 m-0 fs-5">80%</h3>
                <p className="text-capitalize p-0 m-0 text-capitalize p-0 m-0  text-xs">
                  exam performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMiniCard;
