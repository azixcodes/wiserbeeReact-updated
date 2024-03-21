import React from "react";

import UserProfile from "../Components/Common/UserProfile";
import UserGenInfo from "../Forms/UserGenInfo";
import ChangePassword from "../Forms/ChangePassword";
const AccountSettings = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <UserProfile />
        </div>
        <div className="col-md-8">
          <div className="settings w-100 d-flex flex-column gap-3">
            <UserGenInfo />
            <ChangePassword />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountSettings;
