import React from "react";
import { Store } from "../ContextAPI/Context";
import WelcomeSection from "../Components/Common/WelcomeSection";
const ParentLayout = ({ children }) => {
  const { auth } = Store();
  const user = auth.user;
  return (
    <div>
      <WelcomeSection user={user} />
      {children}
    </div>
  );
};

export default ParentLayout;
