import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Components/Common/Sidebar";
import Navbar from "./Components/Common/Navbar";
import MiniSidebar from "./Components/Common/MiniSidebar";

const ProtectedRoute = (props) => {
  const [toggle, setToggle] = useState(false);

  const { Component } = props;
  const location = useLocation();

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
    <>
      <section className="d-flex w-100 custom-scrollbar sidebarMediumS">
        {location.pathname === "/assesment-welcome" ||
        location.pathname === "/assesment" ? null : (
          <>
            <MiniSidebar toggle={toggle} setToggle={setToggle} /> <Sidebar />
          </>
        )}
        <div className="d-flex flex-column w-full w-100 position-relative">
          <Navbar handleToggleSidebar={handleToggleSidebar} />
          <main
            className={
              location.pathname === "/assesment"
                ? "assesmentsWrapper "
                : "routesWrapper mainComponent "
            }
          >
            <Component />
            {/* <Footer /> */}
          </main>
        </div>
      </section>
    </>
  );
};

export default ProtectedRoute;
