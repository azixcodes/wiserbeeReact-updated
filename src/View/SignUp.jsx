import React, { useState } from "react";
import * as images from "../Constant/images";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { validator } from "../Constant/validator";
import { postRequest } from "../services";
const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signUpForm, setSignUpForm] = useState({
    userFullName: "",
    userEmail: "",
    userPhoneNo: "",
    userPassword: "",
    userConfirmPassword: "",
  });

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
    const { name, value } = e.target;
    setSignUpForm((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    const obj = {
      name: signUpForm.userFullName,
      email: signUpForm.userEmail,
      "phone number": signUpForm.userPhoneNo,
      password: signUpForm.userPassword,
      "confirm password": signUpForm.userConfirmPassword,
    };
    const validate = validator(obj);
    if (validate !== "success") {
      alert(validate);
    } else if (obj.password !== obj["confirm password"]) {
      alert("passwords do not match..");
    } else if (
      selectedAccount === null ||
      selectedAccount === undefined ||
      selectedAccount === ""
    ) {
      alert("Please select your desired role first..");
    } else {
      // navigate("/home");
      try {
        const data = {
          username: obj.name,
          email: obj.email,
          role: selectedAccount,
          password: obj.password,
          password2: obj["confirm password"],
          phone: obj["phone number"],
        };
        const response = await postRequest("/accounts/register/", data);
        const result = await response.json();
        if (result.msg === "Registration Successful") {
          alert("resgistration success");
          navigate("/");
        } else {
          alert("something went wrong, please try again..");
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="row sign_in_box2 g-0">
            <div className="col-lg-5 col-md-8 col-sm-10">
              <div className="form-box bg-white rounded-4 w-100 h-100">
                <div className="pt-3 ps-4 pe-4 d-flex flex-column h-100">
                  <h3 className="poppins-bold sign_in_heading mt-3">Sign Up</h3>
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
                        placeholder="Enter Your Password"
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
                  <div className="text-decoration-none">
                    <div className="d-grid gap-2 mt-4">
                      <button
                        className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                        type="button"
                        onClick={handleSignup}
                      >
                        Signup
                      </button>
                    </div>
                  </div>
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
    </>
  );
};

export default SignUp;
