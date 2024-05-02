import React, { useRef, useEffect, useState } from "react";
import { SidebarLogo } from "../../Constant/images";
import { studentLinks, teacherLinks } from "../../Constant/sidebarlinks";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Store } from "../../ContextAPI/Context";

const Sidebar = () => {
  const { toggleSidebar, setToggleSidebar, auth } = Store();
  const [navLinks, setNavLinks] = useState([]);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const location = useLocation();

  const sidebarRef = useRef(null);
  const handleSidebarToggle = () => {
    setToggleSidebar((prev) => !prev);
  };
  let user = auth?.user || "student" || "teacher";
  const userRole = JSON.parse(localStorage.getItem("user"));
  if (userRole) {
    user = userRole.user;
  }
  useEffect(() => {
    if (user === "student") {
      setNavLinks(studentLinks);
    } else if (user === "teacher") {
      setNavLinks(teacherLinks);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth < 993) {
      setToggleSidebar(true);
    } else {
      setToggleSidebar(false);
    }
  }, [windowWidth]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  useEffect(() => {
    const onRouteChange = () => {
      scrollToTop();
    };

    // Event listener for route change
    window.addEventListener("popstate", onRouteChange);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", onRouteChange);
    };
  }, []);

  console.log(auth);
  console.log("user role is ", user);

  return (
    <aside
      className={`${
        toggleSidebar ? "sidebarOuterSm d-none" : "sidebarOuterLg d-none"
      }`}
    >
      <div
        className={`position-fixed ${
          toggleSidebar ? "sidebarWrapperSm d-none" : "sidebarWrapperLg d-none"
        }`}
        ref={sidebarRef}
      >
        <NavLink
          to="/home"
          className="sidebarLogo d-flex w-100 justify-content-center"
        >
          {/* sidebar logo */}
          <img src={SidebarLogo} alt="logo" />
        </NavLink>
        <div className="divider"></div>
        <div className="linksWrapper d-flex flex-column gap-4 ">
          <div
            className={`${
              toggleSidebar
                ? "d-flex flex-column align-items-center gap-4"
                : "links d-flex flex-column gap-1 w-100 text-white"
            }`}
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive || link.childRoute === location.pathname
                    ? "sidebarLinkActive d-flex flex-row align-items-center  justify-content-between"
                    : "sidebarLink d-flex flex-row align-items-center  justify-content-between"
                }
              >
                <div className="d-flex gap-3 align-items-center">
                  <span className="linkIcon">{link.icon}</span>
                  {!toggleSidebar && (
                    <span className="navLabel">{link.label}</span>
                  )}
                </div>
                {!toggleSidebar && <ChevronRight className="px-0 m-0" />}
              </NavLink>
            ))}
          </div>
        </div>
        <div
          className="sidebarToggle cursor-pointer "
          onClick={handleSidebarToggle}
        >
          {toggleSidebar ? <ChevronRight /> : <ChevronLeft />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
