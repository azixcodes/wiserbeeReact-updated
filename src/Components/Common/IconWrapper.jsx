import React from "react";

const IconWrapper = ({ children, bg, color,handleClick }) => {
  return (
    <div
      className="iconWrapper cursor-pointer"
      style={{ backgroundColor: bg, color }}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
