// CustomDropdown.js
import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";

const CustomDropdown = ({
  placeholder,
  chips,
  addChip,
  removeChip,
  removeLastChip,
  chipType,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      addChip(inputValue.trim(), chipType);
      setInputValue(""); // Clear input after adding chip
    } else if (event.key === "Backspace" && inputValue === "") {
      event.preventDefault();
      removeLastChip(chipType);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={inputRef}>
      <div className="dropdown-header">
        <input
          type="text"
          placeholder={`Type and press enter ${placeholder}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-input form-control"
        />
        {chips?.map((chip, index) => (
          <div className="sectionChip" key={index}>
            {chip}
            <span
              className="closebtn"
              onClick={() => removeChip(chip, chipType)}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
