import React, { useState, useEffect, useRef } from "react";
import { Search, MenuIcon } from "lucide-react";
import {
  notificationSvg,
  person,
  logoutSvg,
  arrowDown,
} from "../../Constant/svgs";
import { userSvg } from "../../Constant/svgs";
import Flag from "react-world-flags";
import { Link, useLocation, useParams } from "react-router-dom";
import { NavLogo } from "../../Constant/images";
import { useNavigate } from "react-router-dom";
import { setLanguage } from "../../redux/languageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
  const location = useLocation();
  const { handleToggleSidebar } = props;
  const dropDownRef = useRef(null);
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const { t, i18n } = useTranslation();

  const countries = [
    { code: "US", language: "English" },
    { code: "SA", language: "عربي" },
    { code: "FR", language: "French" },
    { code: "ES", language: "Spanish" },
    { code: "DE", language: "German" },
  ];

  let role = "student"; // Default role
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.user) {
    role = user.user;
  }

  const translatedRole = t(`roles.${role.toLowerCase()}`);

  useEffect(() => {
    const handleClickWindow = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("click", handleClickWindow);

    return () => {
      document.removeEventListener("click", handleClickWindow);
    };
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language.code.toLowerCase());
  }, [language, i18n]);

  const handleListClick = (code, language) => {
    dispatch(setLanguage({ code, language }));
    setOpenDropdown(false);
  };

  const currentUrl = window.location.pathname;
  const modifiedUrl = currentUrl.replace("/", "");
  const { id } = useParams();
  const isArabic = i18n.language;

  const layoutTitles = {
    courses: t("courses"),
    "class-schedule": t("classSchedule"),
    "grade-book": t("gradeBook"),
    exams: t("exams"),
    community: t("community"),
    messages: t("messages"),
    "account-settings": t("accountSettings"),
    "lesson-plan": t("lessonPlan"),
    "curriculum-design": t("curriculumDesign"),
    "class-management": t("classManagement"),
    "personal-profile": t("personalProfile"),
    "exams-management": t("examsManagement"),
    "grades-management": t("gradesManagement"),
    library: t("library"),
    attendance: t("classManagement"),
  };

  let labelContent = layoutTitles[modifiedUrl] || t("dashboard");
  if (id) {
    if (modifiedUrl === "exams" || modifiedUrl === `exams/${id}`) {
      labelContent = t("exams");
    } else if (modifiedUrl === "course" || modifiedUrl === `course/${id}`) {
      labelContent = t("course");
    }
  }

  const commonClassName =
    "navbarWrapper d-flex justify-content-between align-items-center flex-wrap customShadow";

  const useDropDownList = [
    { label: t("myProfile"), icon: person, path: "/my-profile" },
    { label: t("logout"), icon: logoutSvg, path: "/" },
  ];

  const handleDropdownClick = (path) => {
    if (path === "/") {
      let auth = JSON.parse(localStorage.getItem("user"));
      if (auth) {
        localStorage.removeItem("user");
        navigate("/sign-in-first");
      }
    }
    navigate(path);
  };

  return (
    <div
      className={`${
        location.pathname === "/assesment" ? "" : ""
      } ${commonClassName} ${isArabic === "sa" ? "flex-row-reverse" : ""}`}
    >
      <MenuIcon onClick={handleToggleSidebar} className="mneuIcon" />
      <h4 className="mb-0 d-none d-md-block">
        {location.pathname === "/assesment" ||
        location.pathname === "/assesment-welcome" ? (
          <Link to="/home" className="d-flex gap-4 align-items-center">
            <img src={NavLogo} className="blackLogos" alt="logo" />
            <span>{t("cognitiveAssessment")}</span>
          </Link>
        ) : (
          labelContent
        )}
      </h4>
      <div
        className={`searchBox align-items-center ${
          isArabic === "sa" ? "flex-row-reverse" : ""
        } d-none d-md-flex`}
      >
        <Search />
        <input
          type="text"
          placeholder={t("search")}
          className="w-100"
          style={{ textAlign: isArabic === "sa" ? "right" : "left" }}
        />
      </div>
      <div className="position-relative">
        <span>{notificationSvg}</span>
        <div className="chip position-absolute d-flex justify-content-center align-items-center text-white">
          5
        </div>
      </div>
      <div className="d-flex align-items-center position-relative setLanguage">
        <div className="navbarDropdown" ref={dropDownRef}>
          <button
            className="dropdown-button"
            onClick={() => setOpenDropdown((prev) => !prev)}
          >
            {language.language}
            <Flag code={language.code} height="20" width="30" />
            {arrowDown}
          </button>
          {openDropdown && (
            <div className="flagsDropdown custom-scrollbar">
              {countries.map((flag, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center flagList"
                  onClick={() => handleListClick(flag.code, flag.language)}
                >
                  <Flag
                    code={flag.code}
                    fallback={<span>Unknown</span>}
                    height="20"
                    width="30"
                  />
                  <span className="flag-language">{flag.language}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center userAccount ${
          isArabic === "sa" ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className="navAvatar d-flex justify-content-center align-items-center"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
        >
          {userSvg}
        </div>
        <div className="align-items-center userName mx-2 d-none d-lg-block">
          <h6 className="fs-6 fw-bold"> John Doe</h6>
          <h5 className="font-sm">{translatedRole}</h5>
        </div>
        <div className="userUpIcon">
          <div className="form-group d-flex align-items-center gap-1">
            <div className="dropdown">
              <button
                className="dropdown-toggle customDropdown"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul
                className="dropdown-menu px-2"
                aria-labelledby="dropdownMenuButton1"
              >
                {useDropDownList.map((options, index) => (
                  <li
                    className={`dropdown-item cursor-pointer d-flex justify-content-between py-2 px-2 align-items-center chatFilterDropdownLists ${
                      isArabic === "sa" ? "flex-row-reverse" : ""
                    }`}
                    key={index}
                    onClick={() => handleDropdownClick(options.path)}
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
  );
};

export default Navbar;
