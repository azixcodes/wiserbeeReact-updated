import React from "react";
import PerformanceMiniCard from "../../Components/parent/PerformanceMiniCard";

import DonotChart from "../../Components/parent/analytics/PieChart";
const data = [
  { name: "English", value: 400 },
  { name: "Maths", value: 300 },
  { name: "Biology", value: 300 },
  { name: "Physics", value: 200 },
];
const COLORS = ["#1DDD8D", "#241763", "#927CFB", "#F50788"];
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
          <div className="divider w-100 p-0 m-0 text-gray h-1 "></div>
          <div className="position-relative overflow-hidden d-flex flex-column gap-2">
            <DonotChart data={data} COLORS={COLORS} />
            <div className="donotMatrics mt-3">
              {data.map((sub, index) => (
                <div className="d-flex align-items-center gap-1 mx-auto">
                  <div
                    className="subjectColor "
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span className="text-xs">{sub.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
