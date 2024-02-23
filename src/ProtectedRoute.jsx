import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const location = useLocation();
  const authHome = location.state?.authHome;
  const loginKey = localStorage.getItem("signInput");
  // console.log("protect",loginKey)
  const navigate = useNavigate();
  useEffect(() => {
    if (!loginKey) {
      navigate("/home");
    } else if (!authHome) {
      navigate("/home");
    }
  }, [loginKey, authHome, navigate]);
  return <Component />;
};

export default ProtectedRoute;
