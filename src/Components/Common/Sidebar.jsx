import React from "react";
import { SidebarLogo } from "../../Constant/images";
import { links } from "../../Constant/sidebarlinks";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebarWrapper ">
      <div className="sidebarLogo d-flex w-100 justify-content-center">
        {/* sidebar logo */}
        <img src={SidebarLogo} alt="logo" />
      </div>
      <div className="linksWrapper d-flex flex-column gap-4 ">
        <div className="divider"></div>
        <div className="links d-flex flex-column gap-4 w-100 text-white">
          {links.map((link, index) => (
            <div
              key={index}
              className="sidebarLink d-flex flex-row align-items-center  justify-content-between "
            >
              <div className="d-flex gap-3 align-items-center">
                <span className="linkIcon">{link.icon}</span>
                <span>{link.label}</span>
              </div>
              <ChevronRight className="px-0 m-0" />
            </div>
          ))}
        </div>
      </div>
      <div className="sidebarToggle">
        <ChevronLeft />
      </div>
    </div>
  );
};

export default Sidebar;
