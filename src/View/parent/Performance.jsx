import React from "react";
import PerformanceMiniCard from "../../Components/parent/PerformanceMiniCard";

const Performance = () => {
  return (
    <div className="row mt-4 d-flex">
      <div className="w-75 px-3">
        <PerformanceMiniCard />
      </div>
      <div className="w-25">
        <div className="card bg-white shadow rounded border-0 analyticsCard py-4  d-flex   w-100 ">
          <div className="d-flex flex-column px-2 py-2 text-center">
            <h3 className="fw-bold">Exam Results</h3>
            <p className="fs-6 text-secondary">Grades in overall subjects</p>
          </div>
          <div className="divider w-100 p-0 m-0 text-gray h-1"></div>
          <div className="d-flex align-items-center justify-content-center">
            Graph Data
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
