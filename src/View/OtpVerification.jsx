import React, { useState,useEffect } from "react";
import * as images from "../Constant/images";
import { Link } from "react-router-dom";
import { validator } from "../Constant/validator";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otpCode, setOtpCode] = useState();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(10);
  const navigate = useNavigate();

  const handlerChange = (e) => {
    setOtpCode(e.target.value)
  }

  const handlerClick = () => {
    const obj = {
      OTP: otpCode,
    };
    const validate = validator(obj);
    if (validate !== "success") {
      alert(validate);
    }
    else {
      if (otpCode !== '1111') {
        alert(`${otpCode} is not valid OTP`);
      }
      else {
        navigate('/reset-password');
      }
    }
  }
  const HandleGetOTP = () => {
    setCurrentTime(10);
    setIsTimerRunning(true);
  };
  useEffect(() => {
    if (currentTime === 0) {
      setIsTimerRunning(false);
    }
  }, [currentTime]);
  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setCurrentTime((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isTimerRunning]);

  return (
    <>
      <div className="signin_page">
        <div className="container">
          <div className="logo_img">
            <img src={images.SidebarLogo} alt="logo-img" width={100} />
          </div>
          <div className="row sign_in_box2 g-0">
            <div className="col-lg-5 col-md-8 col-sm-10">
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
                      name="otpCode"
                      value={otpCode}
                      onChange={handlerChange}
                      type="number"
                      className="sign_in_input mt-3"
                      placeholder="Enter OTP"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-4">
                    <button
                      onClick={handlerClick}
                      className="btn sign_in_btn pt-3 pb-3 text-uppercase poppins-semibold rounded-3"
                      type="button"
                    >
                      Verify
                    </button>
                  </div>
                  <div className="mt-3 pb-1">
                    <p className="poppins-medium text-center otp_error_msg">
                      {(!isTimerRunning) ?
                        <p className='pt-4 text-capitalize text-secondary'>
                          didn’t receive the code? <span className='poppins-semibold sign-in-forgot'
                            onClick={HandleGetOTP}>RESEND ?</span>
                        </p>
                        :
                        <p className=' pt-4 poppins-semibold sign-in-forgot'>Resend OTP <span className='otp-span'>{currentTime} sec</span></p>
                      }
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
