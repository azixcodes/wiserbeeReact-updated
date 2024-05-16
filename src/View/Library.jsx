import React, { useRef, useEffect, useState } from "react";
import LibraryCards from "../Components/Common/LibraryCards";

import FilterHeader from "../Components/Common/FilterHeader";
import SideFilter from "../Components/Filters/SideFilter";
import LibraryFilter from "../Components/Filters/LibraryFilter";
import { useSelector } from "react-redux";

const Library = () => {
  const toggleFilter = useSelector((state) => state.toggler.toggleFilter);
  console.log(toggleFilter);
  const filterationRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  let searchTerm = "Thriller and Mystery";
  return (
    <div className="container-fluid">
      <div className="row">
        <FilterHeader searchTerm={searchTerm} openFilter={openFilter} />
      </div>
      <div className="row px-0 mt-2">
        <SideFilter filterationRef={filterationRef}>
          <LibraryFilter handleRemoveFliterModal={handleRemoveFliterModal} />
        </SideFilter>

        <div className={`${toggleFilter ? "col-md-9 " : "col-md-12"}`}>
          <LibraryCards />
        </div>
      </div>
    </div>
  );
};
export default Library;
