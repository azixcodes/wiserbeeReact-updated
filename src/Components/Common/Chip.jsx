import React from "react";

const Chip = ({ color,text,bg }) => {
  return (
    <div className="courseChip" style={{ backgroundColor: bg ,color}}>
      {text}
    </div>
  );
};

export default Chip;
