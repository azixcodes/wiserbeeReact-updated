import React, { useState } from "react";
import { ratings } from "../../Constant/filtercategories";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { categories, genre, languages } from "../../Constant/librarycategories";
const LibraryFilter = ({ handleRemoveFliterModal }) => {
  const [toggler, setToggler] = useState({
    categoriesToggler: true,
    genreToggler: true,

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
    <div className="w-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center w-100 mb-3">
        <button className="btn btn-outline fw-bold m-0 p-0">Filter</button>

        <button className="btn btn-outline text-primary">Clear</button>
        <X
          className="filterIcon block d-md-none cursor-pointer"
          onClick={handleRemoveFliterModal}
        />
      </div>
      <div className="d-flex flex-column gap-4 filterItemsWrapper">
        {/* Ratings */}
        <div className="d-flex flex-column  w-100 gap-1">
          {ratings.map((item, index) => (
            <>
              <div
                className="d-flex justify-content-between w-100 align-items-center"
                key={index}
              >
                <h6 className="m-0 p-0 fw-bold filterTitle">{item.title}</h6>
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
                        {content.ratingPoint} & up ({content.totalRating})
                      </span>
                      {/* <span className="p-0 m-0 totalRatings">
                     
                    </span> */}
                    </div>
                  </div>
                ))}
            </>
          ))}
        </div>
        {/* Categories */}
        <div className="d-flex flex-column w-100 gap-3 ">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <h4 className="h6 m-0 p-0 fw-bold filterTitle mb-2">Categories</h4>
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
            categories.map((cate, index) => (
              <div className="d-flex gap-2 align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  name={index}
                />
                {cate.icon}
                <label className="font13px">{cate.label}</label>
              </div>
            ))}
        </div>
        {/* Genre */}
        <div className="d-flex flex-column gap-1 ">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <h4 className="h6 m-0 p-0 fw-bold filterTitle mb-2">Genre</h4>
            {toggler.genreToggler ? (
              <ChevronUp
                className="icon"
                onClick={() => handleDropdownToggle("genre")}
              />
            ) : (
              <ChevronDown
                className="icon"
                onClick={() => handleDropdownToggle("genre")}
              />
            )}
          </div>
          <div className="d-flex flex-column gap-2">
            {toggler.genreToggler &&
              genre.map((gen, index) => (
                <div className="d-flex gap-1 align-items-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    name={index}
                  />
                  <label className="font13px">{gen.label}</label>
                  <p className="p-0 m-0 totalViewsRating text-secondary">
                    {gen.ratings}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* Languages */}
        <div className="d-flex flex-column gap-2">
          <div className="d-flex justify-content-between w-100 align-items-center">
            <h4 className="h6 m-0 p-0 fw-bold filterTitle mb-2">Language</h4>
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
            languages.map((lang, index) => (
              <div className="form-check" key={index}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="language"
                  id={lang}
                />
                <label className="font13px form-check-label" for={lang}>
                  {lang}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryFilter;
