import React from "react";
import { Store } from "../ContextAPI/Context";
import WelcomeSection from "../Components/Common/WelcomeSection";
import { useLocation } from "react-router-dom";
const ParentLayout = ({ children }) => {
  const location = useLocation();

  const pathName = location.pathname;
  const hideWelcomeSection =
    pathName === "/account-setting" || pathName === "/fees-dues";
  const { auth } = Store();
  const user = auth.user;
  return (
    <div>
      {hideWelcomeSection ? null : <WelcomeSection user={user} />}

      {children}
    </div>
  );
};

export default ParentLayout;
