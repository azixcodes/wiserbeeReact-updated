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
    <aside className={`${toggleSidebar ? "sidebarOuterSm" : "sidebarOuterLg"}`}>
      <div
        className={`position-fixed ${
          toggleSidebar ? "sidebarWrapperSm" : "sidebarWrapperLg "
        }`}
        ref={sidebarRef}
      >
        <div className="sidebarLogo d-flex w-100 justify-content-center">
          {/* sidebar logo */}
          <img src={SidebarLogo} alt="logo" />
        </div>
        <div className="linksWrapper linksScroll  d-flex flex-column gap-4 ">
          <div className="divider"></div>
          <div
            className={`linksScroll ${
              toggleSidebar
                ? " d-flex flex-column align-items-center gap-4 customSidebarScroll h-100 "
                : "links  d-flex flex-column gap-3 w-100 text-white h-50 customSidebarScroll h-100 "
            }`}
          >
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "sidebarLinkActive d-flex px-2 py-3 flex-row align-items-center justify-content-between"
                    : "sidebarLink d-flex px-2 py-3 flex-row align-items-center  justify-content-between"
                }
              >
                <div className="d-flex gap-2 align-items-center ">
                  <span className="linkIcon m-0">{link.icon}</span>
                  {!toggleSidebar && <span>{link.label}</span>}
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
