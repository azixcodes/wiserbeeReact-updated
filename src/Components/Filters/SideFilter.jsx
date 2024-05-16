import React from "react";

import { useSelector } from "react-redux";
const SideFilter = ({ children, filterationRef }) => {
  const toggleFilter = useSelector((state) => state.toggler.toggleFilter);

  return (
    <>
      {toggleFilter && (
        <div
          className={`col-md-3 customShadow rounded-md d-none d-md-block bg-white py-3`}
          ref={filterationRef}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default SideFilter;
