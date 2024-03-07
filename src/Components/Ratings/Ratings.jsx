import React from "react";

import { starSvg } from "../../Constant/svgs";
const Ratings = (props) => {
  const { nums, rating } = props;
  const stars = [];
  for (let i = 0; i < nums; i++) {
    stars.push(stars[i]);
  }
  return (
    <div className="d-flex gap-1 align-items-center overflow-hidden">
      {stars.map((_, index) => (
        <span className="p-0 m-0" key={index}>
          {starSvg}
        </span>
      ))}
    </div>
  );
};

export default Ratings;

// yarn add react-star-ratings-component
