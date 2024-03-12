import React, { useRef, useEffect, useState } from "react";
import LibraryCards from "../Components/Common/LibraryCards";

import LibraryFilteration from "../Components/Common/LibraryFilteration";
import { Filter } from "lucide-react";
const searchTerm = " thriller and mystery";

const Library = () => {
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
    }
  };
  const handleRemoveFliterModal = () => {
    if (filterationRef.current) {
      filterationRef.current.classList.remove("filterSmSCreen");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 pt-2 pb-4">
          <div className="libraryHeader d-flex w-100 align-items-center px-2 justify-content-between">
            <div>
              Showing 2,312 results for
              <span className="">{searchTerm}</span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <div
                className="px-2 py-2 rounded bg-main text-white block d-md-none"
                onClick={openFilter}
              >
                <Filter
                  className="cursor-pointer filterIcon "
                  // onClick={handleToggleFilter}
                />
              </div>
              <select
                className="rounded form-select"
                style={{ borderColor: "#C7C7C7" }}
              >
                <option>Most Popular</option>
                <option>Best Rated </option>
                <option>New </option>
                <option>Upcoming</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-none d-md-block" ref={filterationRef}>
          <LibraryFilteration
            handleRemoveFliterModal={handleRemoveFliterModal}
          />
        </div>
        <div className="col-md-9">
          <LibraryCards />
        </div>
      </div>
    </div>
  );
};
export default Library;
