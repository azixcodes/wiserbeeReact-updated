import React, { useState } from "react";
import {
  durations,
  categories,
  levels,
  languages,
  software,
  ratings,
} from "../../Constant/filtercategories";

import { ChevronUp, ChevronDown, Filter, X } from "lucide-react";
const CourseFilter = ({ handleRemoveFliterModal }) => {
  const [toggler, setToggler] = useState({
    durationToggler: true,
    categoriesToggler: false,
    softwareToggler: false,
    levelToggler: false,
    languageToggler: false,
    ratingsToggler: true,
  });
  const handleDropdownToggle = (type) => {
    setToggler((prevState) => ({
      ...prevState,
      [`${type}Toggler`]: !prevState[`${type}Toggler`],
    }));
  };
  return (
    <div className="w-100">
      <div className="d-flex justify-content-between align-items-center w-100 mb-3">
        <button className="btn btn-outline fw-bold m-0 p-0">Filter</button>

        <button className="btn btn-outline text-primary">Clear</button>
        <X
          className="filterIcon block d-md-none cursor-pointer"
          onClick={handleRemoveFliterModal}
        />
      </div>
      <div className="d-flex flex-column gap-4 filterItemsWrapper">
        <div className="d-flex flex-column  w-100 gap-1">
          {ratings.map((item, index) => (
            <>
              <div
                className="d-flex justify-content-between w-100 align-items-center"
                key={index}
              >
                <h6 className="h6 m-0 p-0 fw-bold filterTitle">{item.title}</h6>
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
                  <div className="d-flex gap-2 align-items-center" key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        name={index}
                      />

                      {/* <Ratings nums={content.star} /> */}
                      <div
                        className="Stars"
                        style={{ "--rating": content.star }}
                        aria-label="Rating of this product is 2.3 out of 5."
                      ></div>
                    </div>
                    <div
                      className="d-flex align-items-center starFilter"
                      style={{ color: "#858585" }}
                    >
                      <span className="p-0 m-0  ratingPoint">
                        {content.ratingPoint} & up
                      </span>
                      <span className="p-0 m-0 totalRatings">
                        ({content.totalRating})
                      </span>
                    </div>
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
                <h4 className="h6 m-0 p-0 fw-bold filterTitle">{item.title}</h4>
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
                  <div className="d-flex gap-2 align-items-center" key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={content.duration}
                      />
                      <label
                        className="form-check-label"
                        for={content.duration}
                      >
                        {content.duration}
                      </label>
                    </div>
                    <span className="h6 text-secondary p-0 m-0 totalViewsRating">
                      ({content.rating})
                    </span>
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
                <h4 className="h6 m-0 p-0 fw-bold filterTitle">{item.title}</h4>
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
                  <div className="d-flex gap-2 align-items-center" key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={index}
                      />
                      <label className="form-check-label" for={index}>
                        {content.category}
                      </label>
                    </div>
                    <span className="h6 text-secondary p-0 m-0 totalViewsRating">
                      ({content.rating})
                    </span>
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
                <h4 className="h6 m-0 p-0 fw-bold filterTitle">{item.title}</h4>
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
                  <div className="d-flex gap-2 align-items-center" key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="software"
                        id={content}
                      />
                      <label className="form-check-label" for={content}>
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
                <h4 className="h6 m-0 p-0 fw-bold filterTitle">{item.title}</h4>
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
                  <div className="d-flex gap-2 align-items-center" key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level"
                        id={content}
                      />
                      <label className="form-check-label" for={content}>
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
                <h4 className="h6 m-0 p-0 fw-bold filterTitle">{item.title}</h4>
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
                  <div className="d-flex gap-2 align-items-center" key={index}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="language"
                        id={content}
                      />
                      <label className="form-check-label" for={content}>
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
  );
};

export default CourseFilter;
