import React, { useState } from "react";
import "./test.css";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const Timetable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const dates = [];
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const getUniqueTimes = (classData) => {
    const uniqueTimes = new Set();

    for (const classInfo of classData) {
      uniqueTimes.add(classInfo.time);
    }

    return Array.from(uniqueTimes);
  };

  const handleLeftArrowClick = () => {
    const updatedDate = new Date(currentDate);
    updatedDate.setDate(updatedDate.getDate() - 1); // Move one day back
    setCurrentDate(updatedDate);
  };

  // Function to handle clicking on the right arrow icon
  const handleRightArrowClick = () => {
    const updatedDate = new Date(currentDate);
    updatedDate.setDate(updatedDate.getDate() + 1); // Move one day forward
    setCurrentDate(updatedDate);
  };
  const classData = [
    {
      section: "Programming Fundamental",
      day: "Monday",
      time: "8AM",
      date: 3,
    },
    {
      section: "React Native",
      day: "Monday",
      time: "9AM",
      date: 3,
    },

    {
      section: "FU",
      day: "Monday",
      time: "5PM",
      date: 3,
    },

    {
      section: "1:1 ",
      day: "Wednesday",
      time: "2PM",
      date: 3,
    },

    {
      section: "DB",
      day: "Tuesday",
      time: "9AM",
      date: 3,
    },
    {
      section: "DS",
      day: "Tuesday",
      time: "12AM",
      date: 3,
    },

    {
      section: "CD",
      day: "Tuesday",
      time: "2PM",
      date: 3,
    },
    {
      section: "DR",
      day: "Tuesday",
      time: "4PM",
      date: 3,
    },
    {
      section: "Figma",
      day: "Wednesday",
      time: "9AM",
      date: 3,
    },
    {
      section: "OP",
      day: "Wednesday",
      time: "11AM",
      date: 3,
    },
    {
      section: "MVP",
      day: "Wednesday",
      time: "1PM",
      date: 3,
    },
    {
      section: "HBW",
      day: "Thursday",
      time: "10AM",
      date: 3,
    },
    {
      section: "DR",
      day: "Thursday",
      time: "1PM",
      date: 3,
    },
    {
      section: "EP",
      day: "Friday",
      time: "9AM",
      date: 3,
    },
    {
      section: "MVP",
      day: "Friday",
      time: "12AM",
      date: 3,
    },
    {
      section: "DR",
      day: "Friday",
      time: "2PM",
      date: 4,
    },
    {
      section: "MS",
      day: "Friday",
      time: "8AM",
      date: 4,
    },
  ];

  const uniqueTimes = getUniqueTimes(classData);

  const generateDates = () => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }

    return days.map((date, index) => {
      const d = dates[index];
      return (
        <th key={index} className="text-uppercase">
          <b>{date}</b>
          <br />
          {d.getDate()} <br />
        </th>
      );
    });
   
  };
  return (
    <div className="timetable ">
      <div className="container text-center">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2 col-md-4 col-sm-6 d-flex  align-items-center justify-content-lg-start p-0 m-0">
            <b className="classManagementDate">
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </b>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-6 gap-1   mt-lg-0  d-flex justify-content-center justify-content-lg-start calender_left">
            <div
              className=" rounded-start d-flex align-items-center justify-content-center left_angle"
              onClick={handleLeftArrowClick}
            >
              <ChevronLeft className="h-75 w-75" />
            </div>
            <span className="d-flex align-items-center center_calender">
              Today
            </span>
            <div
              className=" rounded-end d-flex align-items-center  right_angle justify-content-center"
              onClick={handleRightArrowClick}
            >
              <ChevronRight className="h-75 w-75" />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 mt-lg-0 d-flex  justify-content-center justify-content-lg-end p-0 m-0">
            <button
              className="text-capitalize fs-6 gap-3 d-flex justify-content-between align-items-center btnWithIcon bg-main"
              // onClick={() => setOpen(true)}
            >
              <span className="px-1 py-1 flex align-items-center justify-content-center  fw-4 rounded p-0 addButtonSty">
                <Plus />
              </span>
              <span>add new</span>
            </button>
          </div>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-light-gray">
            <th className=" "></th>
            {generateDates()}
          </tr>
        </thead>
        <tbody>
          {uniqueTimes.map((time, i) => (
            <tr key={time} className="">
              <td className="clocK_time">{time}</td>

              {daysOfWeek.map((day, index) => {
                const matchingClass = classData.find(
                  (classInfo) =>
                    classInfo.time === time &&
                    classInfo.day === day &&
                    classInfo.date === dates[0].getDate()
                );
                return (
                  <td
                    key={`${day}-${time}`}
                    className={`class-cell  px-2 py-2 ${
                      matchingClass ? "has-class" : ""
                    }`}
                    style={{
                      // backgroundColor: matchingClass ? "#0EA5E9" : "#E6F6FD",
                      color: "#0369A1",
                      borderLeft:
                        index % 2 === 0
                          ? "5px solid #0EA5E9"
                          : "5px solid green",
                    }}
                  >
                    {matchingClass ? matchingClass.section : "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Timetable;
