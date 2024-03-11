import React from "react";

const FlexBtn = ({ label, icon, bgColor, color, hasBg, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="d-flex py-2 px-2 align-items-center gap-2"
      role="button"
      style={{ color, backgroundColor: bgColor, borderRadius: "5px" }}
    >
      <span className={`p-0 m-0 ${hasBg ? "iconWithBg" : ""}`}>{icon}</span>
      <h4 className="h6 p-0 m-0">{label}</h4>
    </div>
  );
};

export default FlexBtn;
