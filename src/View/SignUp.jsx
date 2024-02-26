import React, { useState } from "react";
import * as images from "../Constant/images";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signUpForm,setSignUpForm] = useState({
    userFullName:'',
    userEmail:'',
    userPhoneNo:'',
    userPassword:'',
    userConfirmPassword:''
  })

  const location = useLocation();
  const selectedAccount = location.state && location.state.selectedAccount;
  console.log("selectedAccount", selectedAccount);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlerChange = (e) => {
    const {name,value} = e.target;
    setSignUpForm((preState) => ({
      ...preState,
      [name]:value,
    }))
  }

  console.log("kashif",signUpForm)

  return (
    <>
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="sign_in_box">
            <div className="row sign_in_box2">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="bg-white signin_box rounded-4">
                  <div className="pt-3 ps-4 pe-4">
                    <h3 className="poppins-bold sign_in_heading mt-3">
                      Sign Up
                    </h3>
                    <p className="poppins-regular sign_in_paragraph">
                      Please enter the information below to signup.
                    </p>
                    <div className="mt-3">
                      <input
                        name="userFullName"
                        value={signUpForm.userFullName}
                        onChange={handlerChange}
                        type="text"
                        className="sign_in_input"
                        placeholder="Enter Your Full Name"
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        name="userEmail"
                        value={signUpForm.userEmail}
                        onChange={handlerChange}
                        type="email"
                        className="sign_in_input"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        name="userPhoneNo"
                        value={signUpForm.userPhoneNo}
                        onChange={handlerChange}
                        type="number"
                        className="sign_in_input"
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                    <div className="mt-3">
                      <div className="input-group">
                        <input
                          name="userPassword"
                          value={signUpForm.userPassword}
                          onChange={handlerChange}
                          type={showPassword ? "text" : "password"}
                          className="sign_in_input password-input"
                          placeholder="Enter Your Password" />
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
                          name="userConfirmPassword"
                          value={signUpForm.userConfirmPassword}
                          onChange={handlerChange}
                          type={showConfirmPassword ? "text" : "password"}
                          className="sign_in_input password-input"
                          placeholder="Enter Your Confirm Password"
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
                    <Link className="text-decoration-none" to="/sign-in">
                    <div className="d-grid gap-2 mt-4">
                      <button
                        className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                        type="button"
                      >
                        Signup
                      </button>
                    </div>
                    </Link>
                    <div className="mt-3 pb-1">
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
      </div>
    </>
  );
};

export default SignUp;
