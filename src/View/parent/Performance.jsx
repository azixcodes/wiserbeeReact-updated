import React from "react";
import PerformanceMiniCard from "../../Components/parent/PerformanceMiniCard";

import DonotChart from "../../Components/parent/analytics/PieChart";

import MultiLineChart from "../../Components/parent/analytics/MultiLineChart";
const data = [
  { name: "English", value: 400 },
  { name: "Maths", value: 300 },
  { name: "Biology", value: 300 },
  { name: "Physics", value: 200 },
];
const COLORS = ["#1DDD8D", "#241763", "#927CFB", "#F50788"];
const Performance = () => {
  return (
    <div className="row mt-4 d-flex ">
      <div className="w-75 px-3">
        <PerformanceMiniCard />
      </div>
      <div className="w-75 px-1 mt-4 d-flex flex-column gap-3 pb-3 pt-2">
        <div className="d-flex justify-content-between px-2 ">
          <div>
            <h4 className="fw-bold">Overall Student Performance</h4>
            <p className="text-secondary">June 2022</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="dotGraph"></div>
            <h4 className="m-0 p-0 fs-6">John Smith</h4>
          </div>
        </div>
        <MultiLineChart />
      </div>

      <div className="w-25">
        <div className="card bg-white shadow rounded border-0 analyticsCard py-4  d-flex   w-100 ">
          <div className="d-flex flex-column px-2 py-2 text-center">
            <h3 className="fw-bold">Exam Results</h3>
            <p className="fs-6 text-secondary">Grades in overall subjects</p>
          </div>
          <div className="divider w-100 p-0 m-0 text-gray h-1 "></div>
          <div className="position-relative overflow-hidden d-flex flex-column gap-2  align-items-center h-100 pb-5">
            <DonotChart COLORS={COLORS} />

            {/* <h4>Helo</h4> */}

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
