import React from "react";

const IconWrapper = ({ children, bg, color }) => {
  return (
    <div
      className="iconWrapper cursor-pointer"
      style={{ backgroundColor: bg, color }}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
