import React, { useState, useEffect, useRef } from "react";
import { CreditCard, MoreVertical } from "lucide-react";
import { Eye } from "lucide-react";
import Modal from "react-modal";
import ReportCardModel from "../../modals/ReportCardsModel";
import { Link } from "react-router-dom";
import { chats } from "../../Constant/chats";
import Avatar from "../../View/parent/Avatar";
import NameAvatar from "../Common/NameAvatar";
const FeesTable = ({ headings, data }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
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
      label: "View Slip",
      icon: <Eye style={{ height: "30px", width: "30px;", color: "black" }} />,
    },
    {
      label: "Pay Now",
      icon: <CreditCard style={{ height: "30px", width: "30px;" }} />,
    },
  ];

  const handleClick = (label) => {
    // if (label === "View") {
    //   setOpen(true);
    // }
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
                      <th
                        className={`cell100 column${index + 1} ${
                          index === headings.length - 1 && "text-align-end"
                        }`}
                        key={index}
                      >
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
                  {data.map((item, index) => (
                    <tr className="row100 body " key={index}>
                      <td className={`cell100 column1`}>
                        <div className="d-flex align-items-center gap-1">
                          {index === 2 ? (
                            <NameAvatar name={item.name} rounded />
                          ) : (
                            <Avatar image={item.avatar} />
                          )}
                          <span className="text-capitalize">{item.name}</span>
                        </div>
                      </td>
                      <td className={`cell100 column2`}>{item.id}</td>
                      <td className={`cell100 column3`}>{item.payable}</td>
                      <td className={`cell100 column4`}>{item.paid}</td>
                      <td className={`cell100 column5`}>{item.pending}</td>
                      <td className={`cell100 column5`}>{item.description}</td>

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
                                    style={{ color: "black" }}
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

export default FeesTable;
