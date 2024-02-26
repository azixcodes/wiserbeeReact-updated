import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Common/Sidebar";
import Navbar from "./Components/Common/Navbar";
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
      <div
        className="d-flex flex-column w-full  w-100 gap-5"
        style={{ height: "100vh" }}
      >
        <Navbar />
        <Component />
      </div>
    </section>
  );
};

export default ProtectedRoute;
