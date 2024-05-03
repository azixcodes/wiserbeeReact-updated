import { Minus, Plus } from "lucide-react";
import React from "react";

const Counter = ({ isFullWidth, handleClick, counter, value, disable }) => {
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
      <button
        className="counterIconWrapper"
        onClick={handleMinus}
        disabled={disable}
      >
        <Minus />
      </button>
      <span className="fw-bold fs-5">{value}</span>
      <button
        className="counterIconWrapper"
        onClick={handlePlus}
        disabled={disable}
      >
        <Plus />
      </button>
    </div>
  );
};

export default Counter;
