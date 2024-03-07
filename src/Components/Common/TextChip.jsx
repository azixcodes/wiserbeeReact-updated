import React from "react";

const TextChip = ({ bg = "#585085", text = "white", label }) => {
  return (
    <div className="textChip" style={{ backgroundColor: bg, color: text }}>
      {label}
    </div>
  );
};

export default TextChip;
