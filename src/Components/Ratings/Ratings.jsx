import React from "react";
import { Rating } from "react-simple-star-rating";
const Ratings = (props) => {
  const { nums, rating } = props;
  const stars = [];
  for (let i = 0; i < nums; i++) {
    stars.push(stars[i]);
  }
  return (
    <>
      {stars.map((_, index) => (
        <Rating
          initialValue={rating}
          key={index}
          disableFillHover={true}
          allowHover={false}
        />
      ))}
    </>
  );
};

export default Ratings;

// yarn add react-star-ratings-component
