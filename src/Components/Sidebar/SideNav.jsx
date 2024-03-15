import "./style.css";
import { Store } from "../../ContextAPI/Context";
const SideNav = () => {
  const { toggleSidebar } = Store();
  return (
    <div className={` ${toggleSidebar ? "sideNavNone" : "sideNav"}`}>
      sidenav
    </div>
  );
};

export default SideNav;
