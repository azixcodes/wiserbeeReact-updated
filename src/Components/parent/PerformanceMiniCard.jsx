import { AlarmClockPlus } from "lucide-react";
import React from "react";
import { arrowPrimary, arrowPink, arrowSucces } from "../../Constant/svgs";
const PerformanceMiniCard = () => {
  return (
    <div className="row gap-3 d-flex justify-content-between px-3">
      <div className="card bg-white shadow rounded border-0 py-4 cardMini px-2 d-flex justify-content-center  ">
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

      {/* second */}

      <div className="card bg-white shadow rounded border-0 py-4 px- cardMini d-flex justify-content-center  ">
        <div className="d-flex gap-2 align-items-center">
          {arrowPink}
          <div>
            <h3 className="fw-bold p-0 m-0 fs-5">80%</h3>
            <p className="text-capitalize p-0 m-0 text-capitalize p-0 m-0  text-xs">
              behavioral assesment
            </p>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="card bg-white shadow rounded border-0 py-4 px-2 cardMini d-flex justify-content-center  ">
        <div className="d-flex gap-2 align-items-center">
          {arrowSucces}
          <div>
            <h3 className="fw-bold p-0 m-0 fs-5">80%</h3>
            <p className="text-capitalize p-0 m-0 text-capitalize p-0 m-0  text-xs">
              behavioral assesment
            </p>
          </div>
        </div>
      </div>
      {/* fourth */}
    </div>
  );
};

export default PerformanceMiniCard;
