import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, ChevronUp, MenuIcon } from "lucide-react";
import { notificationSvg } from "../../Constant/svgs";
import { countries } from "../../Constant/languages";
import { userSvg } from "../../Constant/svgs";
import Flag from "react-world-flags";

const Nav2 = (props) => {
  const { handleToggleSidebar } = props;
  const dropDownRef = useRef(null);

  const [openDropDown, setOpenDropdown] = useState(false);
  const [language, setLanguage] = useState({
    code: "usa",
    language: "English",
  });

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
  const modifiedUrl = currentUrl.replace('/', '');
  console.log(modifiedUrl)

  const layoutTitles = {
    'courses': "Courses",
    'class-schedule': "Class Schedule",
    'grade-book': "Grade Book",
    'exams': "Exams",
    'community': "Community",
    'messages': "Messages",
    'account-settings': "Account Settings",
  };
  const labelContent =  layoutTitles[modifiedUrl] || 'Dashboard';

  return (
    <>
      <div className="navbarWrapper d-flex justify-content-between align-items-center flex-wrap">
        <h4 className="mb-0">
          <MenuIcon onClick={handleToggleSidebar} className="mneuIcon"/>
          {labelContent}
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
        <div className="d-flex align-items-center position-relative ">
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
                  className="d-flex align-items-center  2 flagList"
                  onClick={() => handleListClick(flag.code, flag.language)}
                >
                  <Flag
                    code={flag.code}
                    fallback={<span>Unknown</span>}
                    height="16"
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
          <div className="align-items-center userName mx-2 d-none d-md-block">
            <h6 className="fs-6  fw-bold ">john doe</h6>
            <h5 className="font-sm ">Admin</h5>
          </div>
          <div className="userUpIcon d-none d-md-block">
            <ChevronDown className="text-end" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav2;
