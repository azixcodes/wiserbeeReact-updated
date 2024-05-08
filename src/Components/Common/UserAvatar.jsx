import React from "react";

const UserAvatar = ({ user }) => {
  return (
    <div className="userAvatar" title={user.first_name}>
      <img src={user.avatar} alt={user.first_name} className="h-100 w-100" />
    </div>
  );
};

export default UserAvatar;
