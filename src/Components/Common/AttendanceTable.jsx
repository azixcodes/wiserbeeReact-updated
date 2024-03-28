import React, { useState, useEffect, useRef } from "react";
import { MoreVertical } from "lucide-react";
import { Eye, Trash2 } from "lucide-react";
import Modal from "react-modal";
import ReportCardModel from "../../modals/ReportCardsModel";
import { Link } from "react-router-dom";
import NameAvatar from "./NameAvatar";

const AttendanceTable = ({ headings, data }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [attData, setAttData] = useState(data);
  const [open, setOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [index];
      }
    });
  };

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

  function closeModal() {
    setOpen(false);
  }

  const closeDropdown = (e) => {
    const clickedInsideDropdown = openIndexes.some(
      (index) => e.target.closest(`#dropdownMenu-${index}`) !== null
    );
    if (!clickedInsideDropdown) {
      setOpenIndexes([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [openIndexes]);

  const items = [
    {
      label: "Teacher's Observation",
      icon: <Eye style={{ height: "30px", width: "30px;", color: "black" }} />,
    },
    {
      label: "Delete",
      icon: (
        <Trash2 style={{ height: "30px", width: "30px;", color: "#BF2929" }} />
      ),
    },
  ];

  const handleClick = (label) => {
    if (label === "View") {
      setOpen(true);
    }
  };
  let click = false;
  const handleAttBtnClick = (index, name) => {
    click = !click;
    const oldData = [...attData];

    const attIndex = oldData.findIndex((item) => item.name === name);

    if (attIndex !== -1) {
      const att = oldData[attIndex].attendance;
      const updatedAtt = att?.map((item, i) => {
        return {
          ...item,
          checked: i === index,
        };
      });
      oldData[attIndex].attendance = updatedAtt;
    }
    setAttData(oldData);
  };

  const createAttendance = (arr, name) => {
    return arr.map((item, index) => {
      switch (item.label) {
        case "PP":
          return (
            <button
              className={`${item.checked ? "ppBtnActive " : "ppBtn"}`}
              onClick={() => handleAttBtnClick(index, name)}
            >
              {item.label}
            </button>
          );
          break;
        case "PO":
          return (
            <button
              className={`${item.checked ? "poBtnActive" : "poBtn"}`}
              onClick={() => handleAttBtnClick(index, name)}
            >
              {item.label}
            </button>
          );
          break;
        case "A":
          return (
            <button
              className={`${item.checked ? "aBtnActive " : "aBtn"}`}
              onClick={() => handleAttBtnClick(index, name)}
            >
              {item.label}
            </button>
          );
          break;
        case "L":
          return (
            <button
              className={`${item.checked ? "lBtnActive" : "lBtn"}`}
              onClick={() => handleAttBtnClick(index, name)}
            >
              {item.label}
            </button>
          );
          break;
      }
    });
  };
  return (
    <>
      <Modal isOpen={open} style={customStyles} onRequestClose={closeModal}>
        <ReportCardModel onRequestClose={closeModal} />
      </Modal>
      <div className="container-table100">
        <div className="wrap-table100">
          <div className="table100 ver5 m-b-110">
            <div className="table100-head">
              <table>
                <thead>
                  <tr className="row100 head">
                    {headings.map((head, index) => (
                      <th className={`cell100 column${index + 1}`} key={index}>
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>

            <div className="table100-body">
              <table>
                <tbody>
                  {attData.map((item, index) => (
                    <tr className="row100 body " key={index}>
                      <td className={`cell100 column1`}>
                        <div className="d-flex align-items-center attendanceUser gap-2 ">
                          {item.dp === null ? (
                            <NameAvatar name={item.name} rounded />
                          ) : (
                            <img src={item.dp} alt="user" />
                          )}

                          {item.name}
                        </div>
                      </td>
                      <td className={`cell100 column2`}>{item.section}</td>

                      <td className={`cell100 column3`}>
                        <div className="d-flex gap-2 generateAtt">
                          {createAttendance(item.attendance, item.name)}
                        </div>
                      </td>
                      <td className={`cell100 column4`}>{item.performance}</td>

                      <td className={`cell100 column7`}>
                        <div className="dropdown d-flex justify-content-end">
                          <div
                            className="iconWrapper "
                            type="button"
                            onClick={() => toggleDropdown(index)}
                            id={`dropdownMenu-${index}`}
                          >
                            <MoreVertical />
                          </div>
                          <ul
                            className={`dropdown-menu gradeTableDropdown p-0 py-1 ${
                              openIndexes.includes(index) ? "show" : ""
                            }`}
                          >
                            {items.map((item, i) => (
                              <li
                                key={i}
                                className="px-2 rounded"
                                onClick={() => handleClick(item.label)}
                              >
                                <Link
                                  className="dropdown-item  optionLists align-items-center rounded  mt-1 d-flex justify-content-between"
                                  href="#"
                                >
                                  <span
                                    className="h6 p-0 m-0"
                                    style={
                                      i === 1
                                        ? { color: "#BF2929" }
                                        : { color: "black" }
                                    }
                                  >
                                    {item.label}
                                  </span>
                                  {item.icon}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendanceTable;
