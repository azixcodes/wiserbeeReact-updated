import React from "react";

const Avatar = ({ image }) => {
  return (
    <div className="userAvatar">
      <img src={image} alt="user" className="h-100 w-100" />
    </div>
  );
};

export default Avatar;
