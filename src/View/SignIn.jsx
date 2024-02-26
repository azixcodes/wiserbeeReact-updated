import React, { useState } from "react";
import * as images from "../Constant/images";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { validator } from "../Constant/validator";
const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [signInForm, setSignInForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  const location = useLocation();
  const selectedAccount = location.state && location.state.selectedAccount;
  console.log("selectedAccount", selectedAccount);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setSignInForm((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };

  // if (rememberMe) {
  //   console.log("llll")
  //   localStorage.setItem("signInput", JSON.stringify(signInForm));
  // }
  const handleLogin = () => {
    const obj = {
      password: signInForm.userPassword,
      email: signInForm.userEmail,
    };
    const validate = validator(obj);
    if (validate !== "success") {
      alert(validate);
    } else {
      navigate("/");
    }
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
                        name="userEmail"
                        value={signInForm.userEmail}
                        onChange={handlerChange}
                        type="email"
                        className="sign_in_input mt-3"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="pt-1">
                      <div className="input-group mt-3">
                        <input
                          name="userPassword"
                          value={signInForm.userPassword}
                          onChange={handlerChange}
                          type={showPassword ? "text" : "password"}
                          className="sign_in_input password-input"
                          placeholder="Enter Password"
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
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="form-check form-switch d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                          checked={rememberMe}
                          onChange={handleCheckboxChange}
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
                    <div className="text-decoration-none">
                      <div className="d-grid gap-2 mt-4">
                        <button
                          className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                          type="button"
                          onClick={handleLogin}
                        >
                          Login
                        </button>
                      </div>
                    </div>
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
