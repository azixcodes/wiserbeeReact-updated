import React from "react";

const Avatar = ({ children }) => {
  const styles = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    backgroundColor: "#E9E8EF",
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={styles}
    >
      {children}
    </div>
  );
};

export default Avatar;
