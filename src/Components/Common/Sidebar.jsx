import React, { useRef, useEffect, useState } from "react";
import { SidebarLogo } from "../../Constant/images";
import {
  studentLinks,
  teacherLinks,
  parentLinks,
  adminLinks,
} from "../../Constant/sidebarlinks";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Store } from "../../ContextAPI/Context";
import { useSelector, useDispatch } from "react-redux";
import { setToggleSidebar } from "../../redux/ToggleSlice";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { auth } = Store();
  const [navLinks, setNavLinks] = useState([]);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const location = useLocation();
  const toggleSidebar = useSelector((state) => state.toggler.toggleSidebar);

  const sidebarRef = useRef(null);

  let user = auth?.user || "student" || "teacher" || "parent";
  const userRole = JSON.parse(localStorage.getItem("user"));
  if (userRole) {
    user = userRole.user;
  }

  const roles = {
    teacher: teacherLinks,
    parent: parentLinks,
    student: studentLinks,
    admin: adminLinks,
  };

  useEffect(() => {
    if (roles[user]) {
      setNavLinks(roles[user](t));
    } else {
      console.error("User role is not defined in roles object");
    }
  }, [user, t]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth < 993) {
      dispatch(setToggleSidebar());
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
          onClick={() => dispatch(setToggleSidebar())}
        >
          {toggleSidebar ? <ChevronRight /> : <ChevronLeft />}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
