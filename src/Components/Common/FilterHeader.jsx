import { Filter } from "lucide-react";
import React from "react";
import { Store } from "../../ContextAPI/Context";

const FilterHeader = (props) => {
  const { toggleFilter, setToggleFilter } = Store();
  const toggleFilterAside = () => {
    setToggleFilter(!toggleFilter);
    console.log(toggleFilter);
  };
  const { searchTerm, openFilter } = props;
  return (
    <div className="d-flex justify-content-between">
      <div>
        Showing 2,312 results for
        <span className="fw-bold"> {searchTerm}</span>
      </div>
      <div className="d-flex align-items-center gap-3">
        <Filter
          className="cursor-pointer filterIcon block d-md-none"
          onClick={openFilter}
        />
        <select
          className=" rounded form-select m-0"
          style={{ borderColor: "#C7C7C7" }}
        >
          <option>Most Popular</option>
          <option>Best Rated </option>
          <option>New </option>
          <option>Upcoming</option>
        </select>
        <div
          className="px-1 py-1 bg-main d-flex justify-content-center align-items-center text-white rounded cursor-pointer"
          onClick={toggleFilterAside}
        >
          <Filter />
        </div>
      </div>
    </div>
  );
};
export default FilterHeader;
