import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { datePickerSvg } from "../../Constant/svgs";
import "react-datepicker/dist/react-datepicker.css";
const ReactDatePicker = ({ placeholder, getDate, name }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef();
  const handlCalenderOpen = () => {
    datePickerRef.current.setOpen(true);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    getDate(name, date);
  };
  return (
  <div className="dateInputWrapper">
      <DatePicker
        ref={datePickerRef}
        name={name}
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="MMM d, yyyy"
        className="DatePicker"
        placeholderText={placeholder}
      />
      <div className="iconbox" onClick={handlCalenderOpen}>
        {datePickerSvg}
      </div>
    </div>
  );
};
export default ReactDatePicker;
