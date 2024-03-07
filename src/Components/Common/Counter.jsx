import { Minus, Plus } from "lucide-react";
import React from "react";

const Counter = ({ isFullWidth, handleClick, counter, value }) => {
  const handlePlus = () => {
    if (counter === "mins") {
      handleClick("mins", "increment");
    } else {
      handleClick("question", "increment");
    }
  };
  const handleMinus = () => {
    if (counter === "question") {
      handleClick("question", "decrement");
    } else {
      handleClick("mins", "decrement");
    }
  };
  return (
    <div className="Examcounter" style={isFullWidth && { width: "100%" }}>
      <div className="counterIconWrapper" onClick={handleMinus}>
        <Minus />
      </div>
      <span className="fw-bold fs-5">{value}</span>
      <div className="counterIconWrapper" onClick={handlePlus}>
        <Plus />
      </div>
    </div>
  );
};

export default Counter;
