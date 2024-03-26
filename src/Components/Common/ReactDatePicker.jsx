import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { datePickerSvg } from "../../Constant/svgs";
import "react-datepicker/dist/react-datepicker.css";
const ReactDatePicker = ({ placeholder }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef();
  const handlCalenderOpen = () => {
    datePickerRef.current.setOpen(true);
  };
  return (
    <div className="dateInputWrapper">
      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMM d, yyyy"
        className="DatePicker"
        placeholderText={placeholder}
      />
      <div className="iconbox" onClick={handlCalenderOpen}>{datePickerSvg}</div>
    </div>
  );
};
export default ReactDatePicker;
