import React from "react";

const UserAvatars = ({ users }) => {
  return (
    <div className="userAvatars">
      {users.slice(0, 4)?.map((user, index) =>
        index === 3 ? (
          <div
            className="userAvatar mask position-relative d-flex justify-content-center align-items-center"
            title={user.first_name}
            key={index}
          >
            <img
              src={user.avatar}
              alt={user.first_name}
              className="h-100 w-100"
            />
            <div className="avatarBackdrop">
              <span>{users?.length}+</span>
            </div>
          </div>
        ) : (
          <div className="userAvatar lists" title={user.first_name} key={index}>
            <img
              src={user.avatar}
              alt={user.first_name}
              className="h-100 w-100"
            />
          </div>
        )
      )}
    </div>
  );
};

export default UserAvatars;
