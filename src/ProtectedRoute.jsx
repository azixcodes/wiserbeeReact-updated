import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Components/Common/Sidebar";
import Navbar from "./Components/Common/Navbar";
import Nav2 from "./Components/Common/Nav2";
import MiniSidebar from "./Components/Common/MiniSidebar";
const ProtectedRoute = (props) => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [toggle, setToggle] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const { Component } = props;
  const location = useLocation();
  const authHome = location.state?.authHome;
  const loginKey = localStorage.getItem("signInput");
  const sidebarRef = useRef(null);
  // console.log("protect",loginKey)
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!loginKey) {
  //     navigate("/home");
  //   } else if (!authHome) {
  //     navigate("/home");
  //   }
  // }, [loginKey, authHome, navigate]);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  // }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggle]);
  const handleToggleSidebar = () => {
    setToggle(true);
  };
  return (
    <section className="d-flex w-100 custom-scrollbar">
      <MiniSidebar toggle={toggle} setToggle={setToggle} /> <Sidebar />
      <div className="d-flex flex-column w-full  w-100 ">
        <Nav2 handleToggleSidebar={handleToggleSidebar} />
        <main className="routesWrapper">
          <Component />
        </main>
      </div>
    </section>
  );
};

export default ProtectedRoute;
