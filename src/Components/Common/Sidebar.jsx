import React, { useRef } from "react";
import { SidebarLogo } from "../../Constant/images";
import { links } from "../../Constant/sidebarlinks";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Store } from "../../ContextAPI/Context";
const Sidebar = () => {
  const { toggleSidebar, setToggleSidebar } = Store();
  const sidebarRef = useRef(null);
  const handleSidebarToggle = () => {
    setToggleSidebar((prev) => !prev);
  };
  return (
    <div
      className={`${toggleSidebar ? "sidebarWrapperSm" : "sidebarWrapperLg"}`}
      ref={sidebarRef}
    >
      <div className="sidebarLogo d-flex w-100 justify-content-center">
        {/* sidebar logo */}
        <img src={SidebarLogo} alt="logo" />
      </div>
      <div className="linksWrapper d-flex flex-column gap-4 ">
        <div className="divider"></div>
        <div
          className={`${
            toggleSidebar
              ? "d-flex flex-column align-items-center gap-4"
              : "links d-flex flex-column gap-4 w-100 text-white"
          }`}
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebarLinkActive d-flex flex-row align-items-center  justify-content-between"
                  : "sidebarLink d-flex flex-row align-items-center  justify-content-between"
              }
            >
              <div className="d-flex gap-3 align-items-center">
                <span className="linkIcon">{link.icon}</span>
                {!toggleSidebar && <span>{link.label}</span>}
              </div>
              {!toggleSidebar && <ChevronRight className="px-0 m-0" />}
            </NavLink>
          ))}
        </div>
      </div>
      <div
        className="sidebarToggle cursor-pointer"
        onClick={handleSidebarToggle}
      >
        {toggleSidebar ? <ChevronRight /> : <ChevronLeft />}
      </div>
    </div>
  );
};

export default Sidebar;
