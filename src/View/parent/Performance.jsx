import React from "react";
import PerformanceMiniCard from "../../Components/parent/PerformanceMiniCard";
import { useParentContext } from "../../ContextAPI/ParentContext";
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
  const { users } = useParentContext();

  const userData = users.map((user, index) => ({
    name: user.name,
    color: COLORS[index],
  }));

  // const activeUser = users.filter((user) => user.isActive === true);
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* First Column */}
        <div className="col-lg-8">
          {/* Cards */}
          <PerformanceMiniCard />
          {/* Chart */}
          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="card  border-0 shadow">
                <div className="card-body">
                  <div className="row px-3">
                    <div className="col-md-6 px-2 m-0">
                      <div className="d-flex flex-column gap-1">
                        <h4 className="fw-bold fs-5">Behavorial Assesment</h4>
                        <p className="text-secondary">22 June 2024</p>
                      </div>
                    </div>
                    <div className="col-md-6 p-0 m-0">
                      <div className="d-flex gap-3 align-items-center">
                        {userData.map((user, index) => (
                          <div
                            className="d-flex align-items-center gap-2"
                            key={index}
                          >
                            <div
                              className="userDots"
                              style={{ backgroundColor: user.color }}
                            ></div>
                            <p className="p-0 m-0 fw-bold text-xs white-space-nowrap">
                              {user.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col-md-12 p-0 m-0"
                      style={{ height: "300px" }}
                    >
                      <MultiLineChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card h-100 shadow border-0">
            <div className="card-body">
              <div className="d-flex flex-column px-2 py-2 text-center">
                <h3 className="fw-bold">Exam Results</h3>
                <p className="fs-6 text-secondary">
                  Grades in overall subjects
                </p>
              </div>
              <div className="divider w-100 p-0 m-0 text-gray h-1 "></div>
              <div className="position-relative overflow-hidden d-flex flex-column gap-2   align-items-center  pb-5 ">
                <div className="   w-100  " style={{ height: "300px" }}>
                  <DonotChart COLORS={COLORS} />
                </div>

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
      </div>
    </div>
  );
};

export default Performance;
