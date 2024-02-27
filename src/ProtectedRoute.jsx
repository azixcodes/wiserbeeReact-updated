import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Common/Sidebar";
import Navbar from "./Components/Common/Navbar";
import Nav2 from "./Components/Common/Nav2";
const ProtectedRoute = (props) => {
  const { Component } = props;
  const location = useLocation();
  const authHome = location.state?.authHome;
  const loginKey = localStorage.getItem("signInput");
  // console.log("protect",loginKey)
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!loginKey) {
  //     navigate("/home");
  //   } else if (!authHome) {
  //     navigate("/home");
  //   }
  // }, [loginKey, authHome, navigate]);
  return (
    <section className="d-flex w-100 custom-scrollbar">
      <Sidebar />
      <div className="d-flex flex-column w-full  w-100 ">
        <Nav2 />
        <main className="routesWrapper">
          <Component />
        </main>
      </div>
    </section>
  );
};

export default ProtectedRoute;
