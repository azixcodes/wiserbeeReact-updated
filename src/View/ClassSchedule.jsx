import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Store } from "../ContextAPI/Context";
import Modal from "react-modal";

import ScheduleClass from "../modals/ScheduleClass";
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
  const { auth } = Store();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  // Function to handle clicking on the left arrow icon
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

  // Function to generate an array of dates for the table header
  const generateDates = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    
    return dates.map((date, index) => (
      <th key={index} className="text-uppercase">
        {days[date.getDay()]} <br />
        <b>{date.getDate()}</b>
      </th>
    ));
  };

  return (
    <>
      <Modal isOpen={open} onRequestClose={closeModal} style={customStyles}>
        <ScheduleClass onRequestClose={closeModal} />
      </Modal>
      <div className="Time_Table">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6 d-flex  align-items-center justify-content-lg-start">
              <b>
                {currentDate.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </b>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-6 gap-1 mt-3 mt-lg-0  d-flex justify-content-center justify-content-lg-start calender_left">
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

            {auth.user && auth.user === "Teacher" && (
              <div className="col-lg-4 col-md-4 col-sm-6 mt-3 mt-lg-0 d-flex  justify-content-center justify-content-lg-end">
                <button
                  className="text-capitalize fs-6 gap-3 d-flex justify-content-between align-items-center"
                  style={{
                    backgroundColor: "#463C77",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    color: "white",
                    width: "auto",
                    whiteSpace: "nowrap",
                    border: "none",
                  }}
                  onClick={() => setOpen(true)}
                >
                  <span className="px-1 py-1   fw-4 rounded p-0 addButtonSty">
                    <Plus />
                  </span>
                  <span>Add New</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr className="bg-light-gray">
                <th className="exact_time"></th>
                {generateDates()}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="clocK_time">7 AM</td>
                <td className="Time"></td>
                <td className=""></td>
                <td className=""></td>

                <td className=""></td>
                <td className="" style={{ backgroundColor: "#EFF6FF" }}></td>
                <td className=""></td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">8 AM</td>
                <td className="Time"></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0EA5E9",
                  }}
                >
                  <div className="margin-10px-top font-size14">8:00 AM</div>
                  <div className="font-size13">Programming Fundamental</div>
                </td>
                <td className="bg-light-gray"></td>
                <td></td>
                <td className="" style={{ backgroundColor: "#EFF6FF" }}></td>
                <td></td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">9 AM</td>
                <td className="Time"></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0EA5E9",
                  }}
                >
                  <div className="margin-10px-top font-size14">9:00 AM</div>
                  <div className="margin-10px-top font-size14">
                    React Native and for <br></br> Mobile App
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: "#10B9811A",
                    color: "#047857",
                    borderLeft: "5px solid #047857",
                  }}
                >
                  <div className="margin-10px-top font-size14">9:00 AM</div>
                  <div className="margin-10px-top font-size14">
                    Design Basic & <br></br> Figma Tool
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0EA5E9",
                  }}
                >
                  <div className="margin-10px-top font-size14">9:00 AM</div>
                  <div className="margin-10px-top font-size14">
                    Presentation
                  </div>
                </td>
                <td className="" style={{ backgroundColor: "#EFF6FF" }}></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0EA5E9",
                  }}
                >
                  <div className="margin-10px-top font-size14">9:00 AM</div>
                  <div className="margin-10px-top font-size14">
                    English Proficieny
                  </div>
                </td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">10 AM</td>
                <td className="Time"></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0EA5E9",
                  }}
                >
                  <div className="margin-10px-top font-size14">10:00 AM</div>
                  <div className="margin-10px-top font-size14">
                    Financial Update
                  </div>
                </td>
                <td
                  className=""
                  style={{
                    backgroundColor: "#0EA5E91A",
                    borderLeft: "5px solid #0EA5E9",
                  }}
                ></td>
                <td className=""></td>
                <td
                  style={{
                    backgroundColor: "#8B5CF61A",
                    color: "#6D28D9",
                    borderLeft: "5px solid #6D28D9",
                  }}
                >
                  <div className="margin-10px-top font-size14">10:00 AM</div>
                  <div className="margin-10px-top font-size14">
                    Health Benefits<br></br>Walkthrough
                  </div>
                </td>
                <td className=""></td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">11 AM</td>
                <td className="Time"></td>
                <td
                  style={{
                    backgroundColor: "#8B5CF61A",
                    color: "#6D28D9",
                    borderLeft: "5px solid #6D28D9",
                  }}
                >
                  <div className="margin-10px-top font-size14">11:00 AM</div>
                  <div className="font-size13">
                    Design Basic &<br></br>Basic
                  </div>
                </td>
                <td className=""></td>
                <td
                  style={{
                    backgroundColor: "#8B5CF61A",
                    color: "#6D28D9",
                    borderLeft: "5px solid #6D28D9",
                  }}
                >
                  <div className="margin-10px-top font-size14">11:00 AM</div>
                  <div className="font-size13">
                    Onbording<br></br>Presentation
                  </div>
                </td>
                <td className="" style={{ backgroundColor: "#EFF6FF" }}></td>
                <td className=""></td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">12 PM</td>
                <td className="Time"></td>
                <td
                  className=""
                  style={{
                    backgroundColor: "#EFF6FF",
                    borderLeft: "5px solid #6D28D9",
                  }}
                ></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0369A1",
                  }}
                >
                  <div className="margin-10px-top font-size14">12:00 PM</div>
                  <div className="font-size13">
                    Design System<br></br>Kickoff Lunch
                  </div>
                </td>
                <td className=""></td>
                <td className="" style={{ backgroundColor: "#EFF6FF" }}></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0369A1",
                  }}
                >
                  <div className="margin-10px-top font-size14">12:00 PM</div>
                  <div className="font-size13">
                    MVP Prioritization <br></br>workShop
                  </div>
                </td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">1 PM</td>
                <td className="Time"></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0369A1",
                  }}
                >
                  <div className="margin-10px-top font-size14">1:00 PM</div>
                  <div className="font-size13">Design Review</div>
                </td>
                <td className=""></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0369A1",
                  }}
                >
                  <div className="margin-10px-top font-size14">1:00 PM</div>
                  <div className="font-size13">
                    MVP Prioritization <br></br>workShop
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0369A1",
                  }}
                >
                  <div className="margin-10px-top font-size14">1:00 PM</div>
                  <div className="font-size13">Design Review</div>
                </td>
                <td className=""></td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">2 PM</td>
                <td className="Time"></td>
                <td
                  style={{
                    backgroundColor: "#F59E0B1A",
                    color: "#B45309",
                    borderLeft: "5px solid #B45309",
                  }}
                >
                  <div className="margin-10px-top font-size14">2:00 PM</div>
                  <div className="font-size13">1:1 with Jon</div>
                </td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    color: "#0369A1",
                    borderLeft: "5px solid #0369A1",
                  }}
                >
                  <div className="margin-10px-top font-size14">2:00 PM</div>
                  <div className="font-size13">
                    Concept Design <br></br>Review II
                  </div>
                </td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    borderLeft: "5px solid #0369A1",
                  }}
                ></td>
                <td style={{ backgroundColor: "#EFF6FF" }}></td>
                <td
                  style={{
                    backgroundColor: "#F59E0B1A",
                    color: "#B45309",
                    borderLeft: "5px solid #B45309",
                  }}
                >
                  <div className="margin-10px-top font-size14">2:00 PM</div>
                  <div className="font-size13">Design Review</div>
                </td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">3 PM</td>
                <td className="Time"></td>
                <td className=""></td>
                <td
                  style={{
                    backgroundColor: "#0EA5E91A",
                    borderLeft: "5px solid #0369A1",
                  }}
                ></td>
                <td className=""></td>
                <td style={{ backgroundColor: "#EFF6FF" }}></td>
                <td className=""></td>
                <td className=""></td>
              </tr>

              <tr>
                <td className="clocK_time">4 PM</td>
                <td className="Time"></td>
                <td className=""></td>
                <td
                  style={{
                    backgroundColor: "#FFE4E6",
                    color: "#BE123C",
                    borderLeft: "5px solid #BE123C",
                  }}
                >
                  <div className="margin-10px-top font-size14">4:00 PM</div>
                  <div className="font-size13">Design Review</div>
                </td>
                <td className=""></td>
                <td style={{ backgroundColor: "#EFF6FF" }}></td>
                <td
                  style={{
                    backgroundColor: "#FFE4E6",
                    color: "#BE123C",
                    borderLeft: "5px solid #BE123C",
                  }}
                >
                  <div className="margin-10px-top font-size14">4:00 PM</div>
                  <div className="font-size13">Mathematics className</div>
                </td>
                <td className=""></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ClassSchedule;
