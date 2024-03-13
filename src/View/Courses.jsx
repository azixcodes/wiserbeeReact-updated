import React, { useRef, useState, useEffect } from "react";

import Course from "../Components/Common/Course";
import FilterHeader from "../Components/Common/FilterHeader";
import CourseFilter from "../Components/Filters/CourseFilter";
import SideFilter from "../Components/Filters/SideFilter";
import { Store } from "../ContextAPI/Context";
const Courses = () => {
  const filterationRef = useRef(null);
  const { toggleFilter } = Store();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let searchTerm = "UI Design";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      if (filterationRef.current) {
        filterationRef.current.classList.remove("filterSmSCreen");
      }
    }
  }, [windowWidth]);
  const openFilter = () => {
    if (filterationRef.current) {
      filterationRef.current.classList.add("filterSmSCreen");
    } else {
      console.log("no ref found");
    }
  };
  const handleRemoveFliterModal = () => {
    if (filterationRef.current) {
      filterationRef.current.classList.remove("filterSmSCreen");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        <FilterHeader searchTerm={searchTerm} openFilter={openFilter} />
      </div>
      {/*  course header ends here... */}

      {/*  Filter and courses*/}
      <div className="px-0 row mt-2">
        <SideFilter filterationRef={filterationRef}>
          <CourseFilter handleRemoveFliterModal={handleRemoveFliterModal} />
        </SideFilter>

        <div className={`${toggleFilter ? "col-md-9 " : "col-md-12"}`}>
          <Course />
        </div>
      </div>
    </div>
  );
};

export default Courses;
