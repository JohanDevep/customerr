/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Customer_bg_img from "../../../../../public/assets/images/auth/customer-bg.png";
import logo_white_img from "../../../../../public/assets/images/logo-white.png";
import { UseClient } from "../../../../api/agent";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { API_END_POINTS, API_STATUS_CODE } from "../../../../api/config";
import "../../style/Style.css";
import Loading from "../../../../api/loading";
import { useNavigate, useParams, Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import { Circles } from "react-loader-spinner";
import { useTranslation } from "react-i18next";
import { VerifyOTP } from "../../../../redux/slices/Fetch";
import { toast } from "react-toastify";
import { TOAST_STATUS } from "../../../../api/config";
import Loader from "../../../common/loader";

const OtpVerification = () => {
  const [t, i18n] = useTranslation("common");
  const RESEND_WAIT_INTERVAL = 60; //seconds
  const dispatch = useDispatch();
  const { email } = useParams();

  const navigate = useNavigate();
  const [otpCode, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [setDisabled] = useState(true);
  const [disableResendButton, setDisableResendButton] = useState(true);
  const [resendTime, setResendTime] = useState(RESEND_WAIT_INTERVAL);
  const [isResendLoading, setIsResendLoading] = useState(false);
  const resendTimeIntervalRef = useRef();
  const resendTimeRef = useRef(RESEND_WAIT_INTERVAL);

  const clearResendOtpIntervalData = () => {
    setDisableResendButton(false);
    clearInterval(resendTimeIntervalRef.current);
    resendTimeIntervalRef.current = null;
    resendTimeRef.current = RESEND_WAIT_INTERVAL;
  };

  useEffect(() => {
    if (disableResendButton && !resendTimeIntervalRef.current) {
      setResendTime(RESEND_WAIT_INTERVAL);
      const interval = 1000;
      resendTimeIntervalRef.current = setInterval(() => {
        if (resendTimeRef.current) {
          setResendTime((resendTime) => resendTime - 1);
        } else {
          clearResendOtpIntervalData();
        }
      }, interval);
    }
  }, [disableResendButton]);

  useEffect(() => {
    resendTimeRef.current = resendTime;
  }, [resendTime]);

  // jump to next field logic
  // const handleChange = (value) => {
  //   console.log("value",value);
  //   if (value.length === 4) {
  //     setState(value);
  //     setDisabled(false);
  //     handleSubmit(value);
  //   } else {
  //     setState(value);
  //     setDisabled(true);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail");
      let payload = {
        email: userEmail,
        medium: "email",
        otpCode: otpCode,
      };
      const response = await dispatch(VerifyOTP(payload));
      if (response.payload.statusCode === 200) {
        setLoading(true)
        navigate("/customer/reset");
        localStorage.setItem("otpCode", otpCode);
        toast.success("Verify otp successfully")
      } else {
        // console.error("OTP verification request failed with status:");
      }
    } catch (error) {
      // Handle other errors, such as network issues or server errors
      toast.error("Invalid OTP code");
    }
  };

  const handleChange = (otpValue) => {
    setOTP(otpValue); // Update the OTP value in the state
  };

  const resendOtpCodeHandler = async () => {
    if (!disableResendButton && !isResendLoading) {
      setIsResendLoading(true);
      const requestPayload = {
        email,
        medium: "email",
      };
      const client = await UseClient();
      client[API_END_POINTS.FORGOT_PASSWORD](null, requestPayload)
        .then((response) => {
          setDisableResendButton(true);
        })
        .catch((error) => {
          setDisableResendButton(false);
          clearResendOtpIntervalData();
        })
        .finally(() => {
          setIsResendLoading(false);
        });
    }
  };

  // otp input logic
  return (
    <>
      {loading == true ? (
        <Loader loading={loading} />
      ) : (
        <main>
          <Loading active={loading} />
          <div className="layout-auth">
            <div className="auth-visual-wrapper auth-visual-customer">
              <div className="auth-visual">
                <img
                  loading="lazy"
                  src={Customer_bg_img}
                  draggable={false}
                  alt="Customer Background Visual"
                  width="1582"
                  height="1197"
                />
              </div>
            </div>
            <div className="lang-switcher">
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>EN (US)</span>
                  <i className="icon icon-chevron-down"></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => i18n.changeLanguage("en")}
                    >
                      EN (US)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => i18n.changeLanguage("es")}
                    >
                      ES (ES)
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => i18n.changeLanguage("fr")}
                    >
                      FR (FR)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="auth-content">
              <div className="logo forgot-pass-logo">
                <img
                  loading="lazy"
                  src={logo_white_img}
                  draggable={false}
                  alt="Karisma White Logo"
                  width="1444"
                  height="412"
                />
              </div>
              <div className="auth-form pallet-customer">
                <Formik initialValues={{}} onSubmit={handleSubmit}>
                  <Form>
                    <div className="otp-controls-group">
                      <div className="form-group">
                        <OtpInput
                          value={otpCode}
                          onChange={handleChange}
                          numInputs={4}
                          inputStyle="form-control form-control-rounded w-75"
                          errorStyle="form-control form-control-rounded error  w-75"
                          hasErrored={false}
                          isInputNum={true}
                          separator={<span></span>}
                          name="otpCode"
                        />
                      </div>
                    </div>
                    <hr />

                    <button
                      type="submit"
                      className="btn common-rounded-btn d-block w-100 text-uppercase mt-4"
                    >
                      Verify OTP
                    </button>
                    <div className="cta-container forgot-pass-wrap">
                        <Link to="/customer/forgot" className="forgot-text">
                          {t("Back")}
                        </Link>
                      </div>
                  </Form>
                </Formik>

                <div className="form-info text-center">
                  <p className="text-sm otp-text-container">
                    {/* Your resend OTP logic here */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>

  );
};

export default OtpVerification;
