import { Eye, Trash2 } from "lucide-react";
import React from "react";

const Popup = () => {
  const lists = [
    {
      label: "View",
      icon: <Eye style={{ height: "30px", width: "30px;" }} />,
    },
    {
      label: "Delete",
      icon: (
        <Trash2 style={{ height: "30px", width: "30px;", color: "#BF2929" }} />
      ),
    },
  ];
  return (
    <div className="popupWrapper">
      {lists.map((list, index) => (
        <div
          className="d-flex w-100 justify-content-between align-items-center  cursor-pointer optionLists px-1 rounded"
          key={index}
        >
          <h4
            className="h6 p-0 m-0"
            style={index === 1 ? { color: "#BF2929" } : { color: "black" }}
          >
            {list.label}
          </h4>
          {list.icon}
        </div>
      ))}
    </div>
  );
};

export default Popup;
