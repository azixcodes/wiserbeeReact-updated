import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import Modal from "react-modal";

import ScheduleClass from "../../modals/ScheduleClass";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    border: "none",
  },
};
const ClassSchedule = () => {
  const date = new Date();
  console.log(date.getHours());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

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
  let timeZone = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5];

  const classData = [
    {
      section: "Programming Fundamental",
      day: "Monday",
      time: "8",
      date: 3,
    },
    {
      section: "React Native",
      day: "Monday",
      time: "9",
      date: 3,
    },

    {
      section: "FU",
      day: "Monday",
      time: "5",
      date: 3,
    },

    {
      section: "1:1 ",
      day: "Wednesday",
      time: "2",
      date: 3,
    },

    {
      section: "DB",
      day: "Tuesday",
      time: "9",
      date: 3,
    },
    {
      section: "DS",
      day: "Tuesday",
      time: "12",
      date: 3,
    },

    {
      section: "CD",
      day: "Tuesday",
      time: "2",
      date: 3,
    },
    {
      section: "DR",
      day: "Tuesday",
      time: "4",
      date: 3,
    },
    {
      section: "Figma",
      day: "Wednesday",
      time: "9",
      date: 3,
    },
    {
      section: "OP",
      day: "Wednesday",
      time: "11",
      date: 3,
    },
    {
      section: "MVP",
      day: "Wednesday",
      time: "1",
      date: 3,
    },
    {
      section: "HBW",
      day: "Thursday",
      time: "10",
      date: 3,
    },
    {
      section: "DR",
      day: "Thursday",
      time: "1",
      date: 3,
    },
    {
      section: "EP",
      day: "Friday",
      time: "9",
      date: 3,
    },
    {
      section: "MVP",
      day: "Friday",
      time: "12",
      date: 3,
    },
    {
      section: "DR",
      day: "Friday",
      time: "2",
      date: 4,
    },
    {
      section: "MS",
      day: "Friday",
      time: "8",
      date: 4,
    },
  ];

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
  const setAMPM = (hour) => {
    const amPM = {
      8: "08 AM",
      9: "09 AM",
      10: "10 AM",
      11: "11 AM",
      12: "12 PM",
      1: "01 PM",
      2: "02 PM",
      3: "03 PM",
      4: "04 PM",
      5: "05 PM",
    };

    return amPM[hour];
  };
  return (
    <>
      <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
        <ScheduleClass onRequestClose={closeModal} />
      </Modal>
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
                onClick={() => setOpen(true)}
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
            {timeZone.map((time) => (
              <tr key={time} className="">
                <td className="clocK_time">
                  {/* {time >= 12
                    ? time.toString().padStart(2, "0") + " PM"
                    : time.toString().padStart(2, "0") + " AM"} */}
                  {setAMPM(time)}
                </td>

                {daysOfWeek.map((day, index) => {
                  const matchingClass = classData.find(
                    (classInfo) =>
                      classInfo.time === time.toString() &&
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
    </>
  );
};

export default ClassSchedule;
