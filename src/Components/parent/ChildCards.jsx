import React, { useState } from "react";

import { useParentContext } from "../../ContextAPI/ParentContext";
const ChildCards = () => {
  const { users, setusers } = useParentContext();

  const handleClick = (index) => {
    const updatedUsers = users.map((user, i) => ({
      ...user,
      isActive: index === i,
    }));
    setusers(updatedUsers);
  };
  return (
    <div className="d-flex gap-3 justify-content-start flex-wrap smFlexScreen">
      {users.map((child, index) => (
        <div
          key={index}
          className={` ${
            child.isActive ? "childChipActive" : "childChip"
          } d-flex flex-row  gap-2 align-items-center cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          <div className="childAvatar">
            <img src={child.avatar} alt="name" className="h-100 w-100" />
          </div>
          <div className="d-flex flex-column">
            <h6 className="p-0 m-0">{child.name}</h6>
            <span>{child.class}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChildCards;
