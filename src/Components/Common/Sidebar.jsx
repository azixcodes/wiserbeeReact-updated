import React from "react";
import { SidebarLogo } from "../../Constant/images";
const Sidebar = () => {
  return (
    <div className="sidebarWrapper ">
      <div>
        {/* sidebar logo */}
        <img src={SidebarLogo} alt="logo" />
      </div>
    </div>
  );
};

export default Sidebar;
