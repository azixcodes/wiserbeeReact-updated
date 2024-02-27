import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, ChevronUp } from "lucide-react";
import { notificationSvg } from "../../Constant/svgs";
import { countries } from "../../Constant/languages";
import { userSvg } from "../../Constant/svgs";
import Flag from "react-world-flags";

const Nav2 = () => {
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

  return (
    <div className="navbarWrapper d-flex align-items-center">
      <div className="container-fluid  ">
        <div className="row gap-5 d-flex justify-content-between align-items-center">
          <div className="col-md-7 d-flex flex-md-row align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <h4>Dashboard</h4>
            </div>
            <div className="searchBoxWrapper   col-md-8 ">
              <div className="searchBox d-flex align-items-center px-1  2">
                <Search />
                <input type="text" placeholder="Search" className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-md-row justify-content-end gap-4 ">
            <div className="col-md-6 d-flex flex-md-row gap-5 align-items-center">
              <div className="col-md-1">
                <div className="position-relative ">
                  <span>{notificationSvg}</span>
                  <div className="chip position-absolute d-flex justify-content-center align-items-center text-white">
                    5
                  </div>
                </div>
              </div>
              <div className="col-md-11  d-flex justify-content-center px-4   gap-4">
                <div className="d-flex align-items-center position-relative ">
                  {/* <select> */}
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
                          onClick={() =>
                            handleListClick(flag.code, flag.language)
                          }
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
                  <div className="d-flex align-items-center" ref={dropDownRef}>
                    <span className="m-0 p-0 d-none d-md-block ">
                      {language.language}
                    </span>
                    {openDropDown ? (
                      <ChevronUp
                        className="cursor-pointer"
                        // onClick={() => setOpenDropdown(!openDropDown)}
                      />
                    ) : (
                      <ChevronDown
                        className="cursor-pointer"
                        // onClick={() => setOpenDropdown((prev) => !prev)}
                      />
                    )}

                    {/* <ChevronUp /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end px-3  ">
              <div className="row userSection select d-flex ">
                <div className="col-md-3 navAvatar d-flex justify-content-center align-items-center">
                  {userSvg}
                </div>
                <div className=" col-md-9 row align-items-center d-none d-md-flex justify-content-between">
                  <div className="col-md-9 align-items-center">
                    <h6 className="fs-6  fw-bold p-0 m-0">john doe</h6>
                    <h5 className="font-sm p-0 m-0">admin</h5>
                  </div>
                  <div className="col-md-3">
                    <ChevronDown className="text-end" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
