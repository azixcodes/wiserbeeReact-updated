import React from "react";
import * as images from "../Constant/images";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="row sign_in_box2 g-0">
          <div className="col-lg-5 col-md-6 col-sm-8">
              <div className="bg-white signin_box rounded-4">
                <div className="pt-3 ps-4 pe-4">
                  <h3 className="poppins-bold sign_in_heading mt-3">
                    Forgot Password
                  </h3>
                  <p className="poppins-regular forgot_paragraph">
                    Enter your registered email to reset password.
                  </p>
                  <div className="pt-1">
                    <input
                      type="email"
                      className="sign_in_input mt-3"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-4 pt-2 pb-4">
                    <button
                      className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                      type="button"
                    >
                      Send OTP
                    </button>
                  </div>
                  <div className="pb-1">
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

export default ForgotPassword;
