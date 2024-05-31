import React, { useEffect, useState } from "react";
import * as images from "../Constant/images";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { validator } from "../Constant/validator";

import { postRequest } from "../services/index";
const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = location.state && location.state.selectedAccount;
  useEffect(() => {
    if (userRole === "" || userRole === undefined || userRole === null) {
      return navigate("/sign-in-first");
    }
  }, [navigate]);
  console.log(userRole);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [signInForm, setSignInForm] = useState({
    userEmail: "",
    userPassword: "",
  });

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

  const apiRoutes = {
    parent: "/api/parentadmin/parentadmin_login/",
    teacher: "/api/teacheradmin/teacheradmin_login/",
    student: "/api/studentadmin/studentadmin_login/",
  };

  //   http://127.0.0.1:8000/api/parentadmin/parentadmin_login/
  // [4:11 PM] Kashaf Arooj
  // http://127.0.0.1:8000/api/studentadmin/studentadmin_login/
  // [4:12 PM] Kashaf Arooj
  // http://127.0.0.1:8000/api/teacheradmin/teacheradmin_login/

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLogin = async () => {
    const obj = {
      email: signInForm.userEmail,
      password: signInForm.userPassword,
    };
    const validate = validator(obj);
    if (validate !== "success") {
      toast.error(validate);
    } else {
      try {
        setLoading(true);
        const response = await postRequest(apiRoutes[userRole], obj);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          // const { access } = data.token;
          let { user } = data;
          if (user === "management") {
            user = "admin";
          }
          localStorage.setItem(
            "user",
            JSON.stringify({
              token: "access",
              user: user,
            })
          );
          setLoading(false);
          navigate("/home");
        } else {
          if (data.errors["non_field_errors"]) {
            toast.error(data.errors["non_field_errors"][0]);
            setLoading(false);
          } else {
            toast.error("Something went wrong, please try again..");
            setLoading(false);
          }
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message);
        setLoading(false);
      }
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <>
      <Toaster />
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="row sign_in_box2 g-0">
            <div className="col-lg-5 col-md-8 col-sm-10">
              <div className="form-box bg-white rounded-4 w-100 h-100">
                <div className="pt-3 ps-4 pe-4 d-flex flex-column h-100">
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
                        onKeyDown={handleKeyPress}
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
                        {loading ? "Loading ..." : "Login"}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
