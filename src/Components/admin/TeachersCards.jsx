import React from "react";
import Avatar from "../../View/parent/Avatar";

const TeachersCards = ({ user }) => {
  return (
    <div className="col-md-3 card py-2 ml-3">
      <div className="d-flex justify-content-center">
        <Avatar image={user.avatar} />
      </div>
      <h6 className="fw-bold text-center">{user.name}</h6>
      <p className="text-xs text-secondary text-center">{user.email}</p>
    </div>
  );
};

export default TeachersCards;
