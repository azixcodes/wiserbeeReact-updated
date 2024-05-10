import React, { useMemo, useState } from "react";
import { SidebarLogo } from "../../Constant/images";
import {
  studentLinks,
  teacherLinks,
  parentLinks,
  adminLinks,
} from "../../Constant/sidebarlinks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Store } from "../../ContextAPI/Context";

const MiniSidebar = ({ toggle, setToggle }) => {
  const { auth } = Store();
  const [navLinks, setNavLinks] = useState([]);
  let user = auth?.user || "student" || "teacher" || "parent";
  const test = JSON.parse(localStorage.getItem("user"));
  if (test) {
    user = test.user;
  }

  const roles = {
    teacher: teacherLinks,
    parent: parentLinks,
    student: studentLinks,
    admin: adminLinks,
  };

  useMemo(() => {
    // if (user === "student") {
    //   setNavLinks(studentLinks);
    // } else if (user === "teacher") {
    //   setNavLinks(teacherLinks);
    // } else if (user === "parent") {
    //   setNavLinks(parentLinks);
    // }
    setNavLinks(roles[user]);
  }, [user]);

  return (
    <aside className={`miniSidebar ${toggle ? "open" : "closed"}`}>
      <div className="position-relative">
        <div className="sidebarLogo d-flex w-100 justify-content-center my-4">
          <img src={SidebarLogo} alt="logo" />
        </div>
        <div className=" d-flex flex-column gap-4 ">
          <div className="divider"></div>
          <div className="d-flex flex-column align-items-center gap-4 w-100 linksWrapperMiniSidebar ">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setToggle(false)}
                className={({ isActive }) =>
                  isActive
                    ? "sidebarLinkActive d-flex flex-row align-items-center  justify-content-between  w-100"
                    : "sidebarLink d-flex flex-row align-items-center  justify-content-between w-100"
                }
              >
                <div className="d-flex gap-3 align-items-center">
                  <span className="linkIcon">{link.icon}</span>
                  <span>{link.label}</span>
                </div>
                <ChevronRight className="px-0 m-0" />
              </NavLink>
            ))}
          </div>
        </div>
        {/* <div className="closeIconWrapper" onClick={() => setToggle(false)}>
          <XCircle className="sidebarMiniCloseIcon" />
        </div> */}
        <div
          className="sidebarToggle closeIconWrapper cursor-pointer "
          onClick={() => setToggle(false)}
        >
          {!toggle ? <ChevronRight /> : <ChevronLeft />}
        </div>
      </div>
    </aside>
  );
};

export default MiniSidebar;
