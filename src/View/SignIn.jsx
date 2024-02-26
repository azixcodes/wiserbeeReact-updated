import React, { useState } from "react";
import * as images from "../Constant/images";
import { Eye, EyeOff } from 'lucide-react';
import { Link } from "react-router-dom";
import "../usman.css";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="sign_in_box">
            <div className="row sign_in_box2">
              <div className="col-lg-1 col-md-1 col-sm-1"></div>
              <div className="col-lg-10 col-md-10 col-sm-10">
                <div className="bg-white signin_box rounded-4">
                  <div className="pt-3 ps-4 pe-4">
                    <h3 className="poppins-bold sign_in_heading mt-3">Login</h3>
                    <p className="poppins-regular sign_in_paragraph">
                      Please enter the information below to log in to your
                      account.
                    </p>
                    <div className="pt-1">
                      <input
                        type="email"
                        className="sign_in_input mt-3"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="pt-1">
                      <div className="input-group mt-3">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="sign_in_input password-input"
                          placeholder="Enter Password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        <button
                          className="password-toggle-btn"
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <Eye />
                          ) : (
                            <EyeOff />
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="form-check form-switch d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                        <label className="sign-in-toggle poppins-regular">
                          Remember Me
                        </label>
                      </div>
                      <div>
                        <Link
                          className="poppins-semibold sign-in-forgot"
                          to="/forgot-password"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <Link className="text-decoration-none" to="/">
                    <div className="d-grid gap-2 mt-4">
                      <button
                        className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                        type="button"
                      >
                        Login
                      </button>
                    </div>
                    </Link>
                    <div className="mt-3 pb-1">
                      <p className="text-center">
                        Don’t have an account? &nbsp;
                        <Link
                          className="poppins-semibold sign-in-forgot"
                          to="/sign-up-first"
                        >
                          Apply Now
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

