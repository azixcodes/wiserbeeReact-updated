import { Star } from "lucide-react";
import React from "react";

const Stars = ({ stars }) => {
  const starsArr = [];
  for (let i = 0; i < stars; i++) {
    starsArr.push(i);
  }

  return (
    <>
      {starsArr.map((_, index) => (
        <span className="p-0 m-0" style={{ color: "#FFD130" }} key={index}>
          ★
        </span>
      ))}
    </>
  );
};

export default Stars;
