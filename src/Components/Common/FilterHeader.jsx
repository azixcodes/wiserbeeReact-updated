import React, { useState } from "react";
import { Filter } from "lucide-react";
import { Store } from "../../ContextAPI/Context";
import { setToggleFilter } from "../../redux/ToggleSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterHeader = (props) => {
  const dispatch = useDispatch();
  const toggleFilter = useSelector((state) => state.toggler.toggleFilter);

  const [test, setTest] = useState(false);
  const [filter, setFilter] = useState("Most Popular");
  const toggleFilterAside = () => {
    dispatch(setToggleFilter());
    setTest(!test);
  };
  const { searchTerm, openFilter } = props;

  const filterDropdown = ["Most Popular", "Best Selling", "Most Viewed"];
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

        <div className="form-group d-flex align-items-center gap-1">
          <div class="dropdown">
            <button
              class="dropdown-toggle filterDropdown"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {filter}
            </button>
            <ul
              class="dropdown-menu px-2"
              aria-labelledby="dropdownMenuButton1"
            >
              {filterDropdown.map((filter, index) => (
                <li
                  className="dropdown-item cursor-pointer d-flex justify-content-between py-2 px-2 align-items-center chatFilterDropdownLists"
                  key={index}
                  onClick={() => setFilter(filter)}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`px-1 py-1 d-flex justify-content-center align-items-center text-white rounded cursor-pointer ${
            toggleFilter ? "bgMain " : "bgInActive"
          }`}
          onClick={toggleFilterAside}
        >
          <Filter className={`${!toggleFilter && "fg-main"}`} />
        </div>
      </div>
    </div>
  );
};
export default FilterHeader;
