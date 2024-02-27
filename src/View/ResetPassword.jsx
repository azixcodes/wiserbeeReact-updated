import React, { useState } from "react";
import * as images from "../Constant/images";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  // Password States
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Confirm Password States
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="row sign_in_box2 g-0">
          <div className="col-lg-5 col-md-6 col-sm-8">
              <div className="bg-white rounded-4">
                <div className="pt-3 ps-4 pe-4">
                  <h3 className="poppins-bold sign_in_heading mt-3">
                    Reset Password
                  </h3>
                  <p className="poppins-regular reset_psw_paragraph">
                    Enter your new password and confirm password to reset
                    password.
                  </p>
                  <div className="mt-4">
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="sign_in_input password-input"
                        placeholder="New Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <button
                        className="password-toggle-btn"
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="sign_in_input password-input"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      <button
                        className="password-toggle-btn"
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
                  </div>
                  <div className="d-grid gap-2 mt-4 pt-3 pb-3">
                    <button
                      className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                      type="button"
                    >
                      RESET PASSWORD
                    </button>
                  </div>
                  <div className="mt-1 pb-1">
                    <p className="text-center">
                      Already have an account? &nbsp;
                      <Link
                        className="poppins-semibold sign-in-forgot"
                        to="/sign-in"
                      >
                        LOGIN
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
