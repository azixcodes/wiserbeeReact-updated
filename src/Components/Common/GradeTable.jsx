import React, { useState, useEffect, useRef } from "react";
import { MoreVertical } from "lucide-react";
import { Eye, Trash2 } from "lucide-react";

const GradeTable = ({ headings, data }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDropdown = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [index];
      }
    });
  };

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
      label: "View",
      icon: <Eye style={{ height: "30px", width: "30px;", color: "black" }} />,
    },
    {
      label: "Delete",
      icon: (
        <Trash2 style={{ height: "30px", width: "30px;", color: "#BF2929" }} />
      ),
    },
  ];

  return (
    <div className="table-responsive gradesTable">
      <table className="table table-striped">
        <thead>
          <tr>
            {headings.map((head, index) => (
              <th key={index}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index} className="align-middle">
              <td>{d.name}</td>
              <td>{d.classLevel}</td>
              <td>{d.attendance}</td>
              <td>{d.firstTerm}</td>
              <td>{d.midTerm}</td>
              <td>{d.overallScore}</td>
              <td>
                <div className="dropdown">
                  <div
                    className="iconWrapper"
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
                      <li key={i} className="px-2 rounded">
                        <a
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
                          </span>{" "}
                          {item.icon}
                        </a>
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
  );
};

export default GradeTable;
