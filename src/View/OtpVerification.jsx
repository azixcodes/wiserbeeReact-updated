import React from "react";
import * as images from "../Constant/images";
import { Link } from "react-router-dom";

const OtpVerification = () => {
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
                    OTP Verification
                  </h3>
                  <p className="poppins-regular sign_in_paragraph">
                    OTP has been sent to your registered email, please enter 6
                    digit verification code.
                  </p>
                  <div className="pt-1">
                    <input
                      type="number"
                      className="sign_in_input mt-3"
                      placeholder="Enter OTP"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-4">
                    <button
                      className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                      type="button"
                    >
                      Verify
                    </button>
                  </div>
                  <div className="mt-3 pb-1">
                    <p className="poppins-medium text-center otp_error_msg">
                      Invalid OTP! &nbsp;
                      <Link className="poppins-semibold sign-in-forgot" to="/">
                        RESEND
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

export default OtpVerification;
