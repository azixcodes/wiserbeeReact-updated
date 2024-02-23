import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, ChevronUp } from "lucide-react";
import { notificationSvg } from "../../Constant/svgs";
import { countries } from "../../Constant/languages";
import { userSvg } from "../../Constant/svgs";
import Flag from "react-world-flags";

const Navbar = () => {
  const dropDownRef = useRef(null);
  const [openDropDown, setOpenDropdown] = useState(false);
  const [language, setLanguage] = useState({
    code: "usa",
    language: "English",
  });

  //   useEffect(() => {
  //     const handleClickWindow = (e) => {
  //       if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
  //         // setOpenDropdown(false);
  //         alert("clicked outside");
  //       } else alert("inside");
  //     };

  //     document.addEventListener("click", handleClickWindow);

  //     return () => {
  //       document.removeEventListener("click", handleClickWindow);
  //     };
  //   }, []);

  const handleListClick = (code, language) => {
    setLanguage({ code: code, language: language });
    setOpenDropdown(false);
  };

  return (
    <div className="navbarWrapper d-flex position-relative flex-row align-items-center px-2 justify-content-around">
      <div className="routeName d-flex align-items-center ">
        <h4>Route name</h4>
      </div>
      <div className="searchBoxWrapper d-flex align-items-center">
        <div className="searchBox d-flex align-items-center px-1 gap-2 w-100">
          <Search />
          <input type="text" placeholder="search" className="w-100" />
        </div>
      </div>
      <div className=" d-flex align-items-center gap-4">
        <div className="position-relative">
          <span>{notificationSvg}</span>
          <div className="chip position-absolute d-flex justify-content-center align-items-center text-white">
            5
          </div>
        </div>
        <div
          className="d-flex align-items-center position-relative gap-3"
          ref={dropDownRef}
        >
          {/* <select> */}
          <Flag
            code={language.code}
            fallback={<span>Unknown</span>}
            height="16"
            ref={dropDownRef}
          />
          {openDropDown ? (
            <div className="flagsDropdown">
              {countries.map((flag, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-2 flagList"
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
          {/* </select> */}
          <div className="d-flex align-items-center">
            <span className="m-0 p-0">{language.language}</span>
            {openDropDown ? (
              <ChevronUp
                className="cursor-pointer"
                onClick={() => setOpenDropdown(!openDropDown)}
              />
            ) : (
              <ChevronDown
                className="cursor-pointer"
                onClick={() => setOpenDropdown((prev) => !prev)}
              />
            )}

            {/* <ChevronUp /> */}
          </div>
        </div>
        <div className="d-flex flex-row align-items-center userSection">
          <div className="navAvatar p-0 m-0 d-flex justify-content-center align-items-center">
            {userSvg}
          </div>
          <div className="d-flex flex-row justify-content-between  align-items-center position-relative">
            <div>
              <h5 className="font-sm fw-bold p-0 m-0">admin</h5>
              <h6 className="fs-6">john doe</h6>
            </div>
            <ChevronDown className="userDropdownIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
