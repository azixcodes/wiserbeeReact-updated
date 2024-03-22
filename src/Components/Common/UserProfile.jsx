import React from "react";
import { userAvatar } from "../../Constant/images";
import { pencilSvg } from "../../Constant/svgs";
import UserMeta from "./UserMeta";
import { Store } from "../../ContextAPI/Context";
const UserProfile = () => {
  const { auth } = Store();
  return (
    <div className="w-100 userProfileWrapper py-4">
      <div className="userMeta w-100 d-flex align-items-center flex-column gap-2 mt-2">
        <div className="avatarWrapper">
          <img src={userAvatar} alt="user" />
          <div className="editAvatarImage">{pencilSvg}</div>
        </div>
        <h4 className="fw-bold fs-6">Leena Smith</h4>
        <h6 className="text-secondary ">{auth.user}</h6>
      </div>
      <UserMeta />
    </div>
  );
};

export default UserProfile;
