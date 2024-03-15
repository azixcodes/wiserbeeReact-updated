import React from "react";
import { SidebarLogo } from "../../Constant/images";
import { studentLinks } from "../../Constant/sidebarlinks";
import { ChevronLeft, ChevronRight, XCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const MiniSidebar = ({ toggle, setToggle }) => {
  return (
    <aside className={`miniSidebar ${toggle ? "open" : "closed"}`}>
      <div className="position-relative">
        <div className="sidebarLogo d-flex w-100 justify-content-center my-4">
          <img src={SidebarLogo} alt="logo" />
        </div>
        <div className="linksWrapper d-flex flex-column gap-4 ">
          <div className="divider"></div>
          <div className="d-flex flex-column align-items-center gap-4 w-100  ">
            {studentLinks.map((link, index) => (
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
