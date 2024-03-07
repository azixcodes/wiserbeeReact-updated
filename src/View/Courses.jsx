import React, { useState, useRef } from "react";
import {
  durations,
  categories,
  levels,
  languages,
  software,
  ratings,
} from "../Constant/filtercategories";
// import Ratings from "../Components/Ratings/Ratings";
import { Rating } from "react-simple-star-rating";
import { ChevronUp, ChevronDown, Filter, X } from "lucide-react";
import Course from "../Components/Common/Course";
const Courses = () => {
  const filterRef = useRef(null);
  const [toggler, setToggler] = useState({
    durationToggler: true,
    categoriesToggler: false,
    softwareToggler: false,
    levelToggler: false,
    languageToggler: false,
    ratingsToggler: true,
  });
  const [openFilter, setOpenFilter] = useState(false);
  const handleDropdownToggle = (type) => {
    setToggler((prevState) => ({
      ...prevState,
      [`${type}Toggler`]: !prevState[`${type}Toggler`],
    }));
  };
  let searchTerm = "UI Design";
  const handleToggleFilter = () => {
    // filterRef.current.classList.remove("filterationCourse");
    filterRef.current.classList.add("filterSmSCreen");
    setOpenFilter(true);
  };
  const handleRemoveFliterModal = () => {
    // filterRef.current.classList.add("filterationCourse");
    filterRef.current.classList.remove("filterSmSCreen");
    setOpenFilter(false);
  };
  return (
    <>
      <div className="row ">
        {/*  course  header stars here... */}
        <div className="d-flex justify-content-between">
          <div>
            Showing 2,312 results for{" "}
            <span className="fw-bold">{searchTerm}</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Filter
              className="cursor-pointer filterIcon block d-md-none"
              onClick={handleToggleFilter}
            />
            <select className="p-1 rounded" style={{ borderColor: "#C7C7C7" }}>
              <option>Most Popular</option>
              <option>Best Rated </option>
              <option>New </option>
              <option>Upcoming</option>
            </select>
          </div>
        </div>
      </div>
      {/*  course header ends here... */}

      {/*  Filter and courses*/}
      <div className="row mt-2">
        <div
          className="col-md-3 customShadow rounded-md d-none d-md-block bg-white"
          ref={filterRef}
        >
          <div
            className="filterationCourse w-100 "
            // ref={filterRef}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <button className="btn btn-outline fw-bold m-0 p-0">
                Filter
              </button>

              <button className="btn btn-outline text-primary">Clear</button>
              <X
                className="filterIcon block d-md-none cursor-pointer"
                onClick={handleRemoveFliterModal}
              />
            </div>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex flex-column  w-100 gap-1">
                {ratings.map((item, index) => (
                  <>
                    <div
                      className="d-flex justify-content-between w-100 align-items-center"
                      key={index}
                    >
                      <h4 className="h6 m-0 p-0 fw-bold">{item.title}</h4>
                      {toggler.ratingsToggler ? (
                        <ChevronUp
                          className="icon"
                          onClick={() => handleDropdownToggle("ratings")}
                        />
                      ) : (
                        <ChevronDown
                          className="icon"
                          onClick={() => handleDropdownToggle("ratings")}
                        />
                      )}
                    </div>
                    {toggler.ratingsToggler &&
                      item.content.map((content, index) => (
                        <div
                          className="d-flex gap-2 align-items-center"
                          key={index}
                        >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              name={index}
                            />
                            <label class="form-check-label" for={index}>
                              <Rating initialValue={content.star} />
                            </label>
                          </div>
                          <h4 className="h6 text-secondary p-0 m-0">
                            ({content.label})
                          </h4>
                        </div>
                      ))}
                  </>
                ))}
              </div>
              <div className="d-flex flex-column  w-100 gap-1">
                {durations.map((item, index) => (
                  <>
                    <div
                      className="d-flex justify-content-between w-100 align-items-center"
                      key={index}
                    >
                      <h4 className="h6 m-0 p-0 fw-bold">{item.title}</h4>
                      {toggler.durationToggler ? (
                        <ChevronUp
                          className="icon"
                          onClick={() => handleDropdownToggle("duration")}
                        />
                      ) : (
                        <ChevronDown
                          className="icon"
                          onClick={() => handleDropdownToggle("duration")}
                        />
                      )}
                    </div>
                    {toggler.durationToggler &&
                      item.content.map((content, index) => (
                        <div
                          className="d-flex gap-2 align-items-center"
                          key={index}
                        >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id={content.duration}
                            />
                            <label
                              class="form-check-label"
                              for={content.duration}
                            >
                              {content.duration}
                            </label>
                          </div>
                          <h4 className="h6 text-secondary p-0 m-0">
                            ({content.rating})
                          </h4>
                        </div>
                      ))}
                  </>
                ))}
              </div>

              {/* Categories */}

              <div className="d-flex flex-column  w-100 gap-1">
                {categories.map((item, index) => (
                  <>
                    <div
                      className="d-flex justify-content-between w-100 align-items-center"
                      key={index}
                    >
                      <h4 className="h6 m-0 p-0 fw-bold">{item.title}</h4>
                      {toggler.categoriesToggler ? (
                        <ChevronUp
                          className="icon"
                          onClick={() => handleDropdownToggle("categories")}
                        />
                      ) : (
                        <ChevronDown
                          className="icon"
                          onClick={() => handleDropdownToggle("categories")}
                        />
                      )}
                    </div>

                    {toggler.categoriesToggler &&
                      item.content.map((content, index) => (
                        <div
                          className="d-flex gap-2 align-items-center"
                          key={index}
                        >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id={index}
                            />
                            <label class="form-check-label" for={index}>
                              {content.category}
                            </label>
                          </div>
                          <h4 className="h6 text-secondary p-0 m-0">
                            ({content.rating})
                          </h4>
                        </div>
                      ))}
                  </>
                ))}
              </div>
              {/* Software */}
              <div className="d-flex flex-column  w-100 gap-1">
                {software.map((item, index) => (
                  <>
                    <div
                      className="d-flex justify-content-between w-100 align-items-center"
                      key={index}
                    >
                      <h4 className="h6 m-0 p-0 fw-bold">{item.title}</h4>
                      {toggler.softwareToggler ? (
                        <ChevronUp
                          className="icon"
                          onClick={() => handleDropdownToggle("software")}
                        />
                      ) : (
                        <ChevronDown
                          className="icon"
                          onClick={() => handleDropdownToggle("software")}
                        />
                      )}
                    </div>
                    {toggler.softwareToggler &&
                      item.content.map((content, index) => (
                        <div
                          className="d-flex gap-2 align-items-center"
                          key={index}
                        >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="software"
                              id={content}
                            />
                            <label class="form-check-label" for={content}>
                              {content}
                            </label>
                          </div>
                        </div>
                      ))}
                  </>
                ))}
              </div>
              {/* Levele */}
              <div className="d-flex flex-column  w-100 gap-1">
                {levels.map((item, index) => (
                  <>
                    <div
                      className="d-flex justify-content-between w-100 align-items-center"
                      key={index}
                    >
                      <h4 className="h6 m-0 p-0 fw-bold">{item.title}</h4>
                      {toggler.softwareToggler ? (
                        <ChevronUp
                          className="icon"
                          onClick={() => handleDropdownToggle("level")}
                        />
                      ) : (
                        <ChevronDown
                          className="icon"
                          onClick={() => handleDropdownToggle("level")}
                        />
                      )}
                    </div>
                    {toggler.levelToggler &&
                      item.content.map((content, index) => (
                        <div
                          className="d-flex gap-2 align-items-center"
                          key={index}
                        >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="level"
                              id={content}
                            />
                            <label class="form-check-label" for={content}>
                              {content}
                            </label>
                          </div>
                        </div>
                      ))}
                  </>
                ))}
              </div>
              {/* Lanuages */}
              <div className="d-flex flex-column  w-100 gap-1">
                {languages.map((item, index) => (
                  <>
                    <div
                      className="d-flex justify-content-between w-100 align-items-center"
                      key={index}
                    >
                      <h4 className="h6 m-0 p-0 fw-bold">{item.title}</h4>
                      {toggler.languageToggler ? (
                        <ChevronUp
                          className="icon"
                          onClick={() => handleDropdownToggle("language")}
                        />
                      ) : (
                        <ChevronDown
                          className="icon"
                          onClick={() => handleDropdownToggle("language")}
                        />
                      )}
                    </div>
                    {toggler.languageToggler &&
                      item.content.map((content, index) => (
                        <div
                          className="d-flex gap-2 align-items-center"
                          key={index}
                        >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="language"
                              id={content}
                            />
                            <label class="form-check-label" for={content}>
                              {content}
                            </label>
                          </div>
                        </div>
                      ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9  ">
          <Course />
        </div>
      </div>
    </>
  );
};

export default Courses;
