import React from "react";
import { courseBook } from "../../Constant/svgs";

const EntrollCourseTiles = (props) => {
  const { heading, price,isArabic } = props;

  return (
    <div className={`courseTiles ${isArabic === "sa" ? 'flex-row-reverse' : ''} `}>
      <div className="tilesText">
        <h6>{heading}</h6>
        <p>{price}</p>
      </div>
      {courseBook}
    </div>
  );
};

export default EntrollCourseTiles;
