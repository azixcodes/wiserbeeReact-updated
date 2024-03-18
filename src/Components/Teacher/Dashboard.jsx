import React from "react";
import Home from "./Home";
import ClassComp from "./ClassView";
import InboxComp from "./QuickMessages";

const Dashboard = () => {
  return (
    <>
      <Home />

      <div className="container">
        <h2 className="fw-bold pt-5 ">My Classes</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 ">
            <ClassComp />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5">
            <ClassComp />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-5 ">
            <ClassComp />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
            <InboxComp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
