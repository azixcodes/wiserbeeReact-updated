import React from "react";
import { chats as child } from "../../Constant/chats";
const ChildCards = () => {
  return (
    <div className="d-flex gap-3 flex-column flex-md-row">
      {child.slice(0, 3).map((child, index) => (
        <div
          key={index}
          className="childChip d-flex flex-row  gap-2 align-items-center"
        >
          <div className="childAvatar">
            <img src={child.dp} alt="name" className="h-100 w-100" />
          </div>
          <div className="d-flex flex-column">
            <h6 className="p-0 m-0">{child.user}</h6>
            <span>class {index + 2}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildCards;
