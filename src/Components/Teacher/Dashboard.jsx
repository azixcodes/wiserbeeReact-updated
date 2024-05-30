import React from "react";
import Home from "./Home";
import ClassComp from "./ClassView";
import InboxComp from "./QuickMessages";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const {t} = useTranslation();
  return (
    <>
      <Home />

      <div className="container">
        <h2 className="fw-bold pt-5 ">{t('MyClasses')}</h2>
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
