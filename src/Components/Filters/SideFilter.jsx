import React from "react";
import { Store } from "../../ContextAPI/Context";
const SideFilter = ({ children, filterationRef }) => {
  const { toggleFilter } = Store();
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
