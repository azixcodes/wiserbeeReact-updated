import React from "react";
import { useState } from "react";
import UserType from "../../Components/admin/UserType";
import { Parent, Student, Teacher } from "../../Components/admin/Forms/index";
const Users = () => {
  const [user, setUser] = useState("Student");

  const userComponents = {
    Student: <Student />,
    Teacher: <Teacher />,
    Parent: <Parent />,
  };
  const handleItemClick = (item) => {
    setUser(item);
  };

  const renderForms = () => userComponents[user];
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-4 col-md-3 col-sm-12 h-100">
          <div>
            <UserType itemClick={handleItemClick} />
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 mt-3 mt-lg-0 m-0 p-0 px-0 px-lg-2">
          <div className="card shadow p-0" style={{ height: "29rem" }}>
            {renderForms()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
