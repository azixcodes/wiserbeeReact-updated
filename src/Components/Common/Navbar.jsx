import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, ChevronUp, MenuIcon } from "lucide-react";
import { notificationSvg, person, logoutSvg } from "../../Constant/svgs";
import { countries } from "../../Constant/languages";
import { userSvg } from "../../Constant/svgs";
import Flag from "react-world-flags";
import { Link, useLocation, useParams } from "react-router-dom";
import { NavLogo } from "../../Constant/images";
import { useNavigate } from "react-router-dom";
const Nav2 = (props) => {
  const location = useLocation();
  const { handleToggleSidebar } = props;
  const dropDownRef = useRef(null);
  const navigate = useNavigate();
  const [openDropDown, setOpenDropdown] = useState(false);
  const [language, setLanguage] = useState({
    code: "aus",
    language: "English",
  });
  let role = "";
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    role = user.user;
  } else role = "Student";
  useEffect(() => {
    const handleClickWindow = (e) => {
      if (dropDownRef.current && dropDownRef.current.contains(e.target)) {
        setOpenDropdown((prev) => !prev);
      } else setOpenDropdown(false);
    };

    document.addEventListener("click", handleClickWindow);

    return () => {
      document.removeEventListener("click", handleClickWindow);
    };
  }, []);

  const handleListClick = (code, language) => {
    setLanguage({ code: code, language: language });
    setOpenDropdown(false);
  };

  const currentUrl = window.location.pathname;
  const modifiedUrl = currentUrl.replace("/", "");
  const { id } = useParams();
  const layoutTitles = {
    courses: "Courses",
    "class-schedule": "Class Schedule",
    "grade-book": "Grade Book",
    exams: "Exams",
    community: "Community",
    messages: "Messages",
    "account-settings": "Account Settings",
    "lesson-plan": "Lesson Plan",
    "curriculum-design": "Curriculum Design",
    "class-management": "Class Management",
    "personal-profile": "Personal Profile",
    "exams-management": "Exams Management",
    "grades-management": "Grades Management",
    library: "Library",
    attendance: "Class Management",
  };
  let labelContent = layoutTitles[modifiedUrl] || "Dashboard";
  if (id) {
    if (modifiedUrl === "exams" || modifiedUrl === `exams/${id}`) {
      labelContent = "Exams";
    } else if (modifiedUrl === "course" || modifiedUrl === `course/${id}`) {
      labelContent = "Course";
    }
  }
  const commonClassName =
    "navbarWrapper d-flex justify-content-between align-items-center flex-wrap customShadow";

  const useDropDownList = [
    { label: "My Profile", icon: person, path: "/my-profile" },
    { label: "Logout", icon: logoutSvg, path: "/" },
  ];
  return (
    <>
      <div
        className={`${
          location.pathname === "/assesment" ? "" : ""
        } ${commonClassName}`}
      >
        <h4 className="mb-0">
          <MenuIcon onClick={handleToggleSidebar} className="mneuIcon" />
          {/* {labelContent} */}
          {location.pathname === "/assesment" ||
          location.pathname === "/assesment-welcome" ? (
            <Link to="/home" className="d-flex gap-4 align-items-center">
              <img src={NavLogo} className="blackLogos" />
              <spa> Congnitive Assesment</spa>
            </Link>
          ) : (
            labelContent
          )}
        </h4>
        <div className="searchBox d-flex align-items-center ">
          <Search />
          <input type="text" placeholder="Search" className="w-100" />
        </div>
        <div className="position-relative ">
          <span>{notificationSvg}</span>
          <div className="chip position-absolute d-flex justify-content-center align-items-center text-white">
            5
          </div>
        </div>
        <div className="d-flex align-items-center position-relative setLanguage">
          <Flag
            code={language.code}
            fallback={<span>Unknown</span>}
            height="16"
          />
          {openDropDown ? (
            <div className="flagsDropdown custom-scrollbar ">
              {countries.map((flag, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center 2 flagList"
                  onClick={() => handleListClick(flag.code, flag.language)}
                >
                  <Flag
                    code={flag.code}
                    fallback={<span>Unknown</span>}
                    height="20"
                    width="30"
                  />
                  <span>{flag.language}</span>
                </div>
              ))}
            </div>
          ) : null}
          <div className="d-flex align-items-center" ref={dropDownRef}>
            <span className="m-0 p-0 d-none d-md-block mx-2">
              {language.language}
            </span>
            {openDropDown ? (
              <ChevronUp className="cursor-pointer" />
            ) : (
              <ChevronDown className="cursor-pointer" />
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center userAccount">
          <div className="navAvatar d-flex justify-content-center align-items-center">
            {userSvg}
          </div>
          <div className="align-items-center userName mx-2 d-none d-lg-block">
            <h6 className="fs-6  fw-bold ">John Doe</h6>
            <h5 className="font-sm ">{role}</h5>
          </div>
          <div className="userUpIcon d-none d-md-block">
            {/* <ChevronDown className="text-end" /> */}
            <div className="form-group d-flex align-items-center gap-1">
              <div class="dropdown">
                <button
                  class="dropdown-toggle customDropdown"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {/* <ChevronDown className="text-end" /> */}
                </button>
                <ul
                  class="dropdown-menu px-2 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  {useDropDownList.map((options, index) => (
                    <li
                      className="dropdown-item cursor-pointer d-flex justify-content-between py-2 px-2 align-items-center chatFilterDropdownLists"
                      key={index}
                      onClick={() => navigate(options.path)}
                    >
                      {options.label}
                      {options.icon}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav2;
