/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { UseClient } from "../../../../api/agent";
import { useDispatch } from "react-redux";
import { API_END_POINTS, API_STATUS_CODE } from "../../../../api/config";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ForgotSchema from "../../../../helpers/validations/forgot";
import Loading from "../../../../api/loading";
import { useTranslation } from "react-i18next";
import { ForgotPassword } from "../../../../redux/slices/Fetch";
import {toast} from "react-toastify";
import { TOAST_STATUS } from "../../../../api/config";
import { apiErrors } from "../../../../../src/api/config";
import Loader from "../../../common/loader";


function CustomerForgot() {
  const [t, i18n] = useTranslation("common");
  const navigate = useNavigate();
  const initialValues = { email: "", medium: "email" }; // Login Form Initial Schema
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await dispatch(ForgotPassword(values)).then((el) => {
        if(el.payload.statusCode === 200) {
          setLoading(true);
          navigate("/customer/otp");
          localStorage.setItem("userEmail", values.email.toString());
          toast.success(TOAST_STATUS.OTP_CODE_SEND_SUCCESS);
          setLoading(false);
        }
        else if (el?.payload?.response?.status == 404) {
          throw el?.payload?.response?.data;
        }
      })
    } catch (error) {
      setLoading(false);
      toast.error("Incorrect email address! User not found!");
      
    }
  };
  return (
    <>
    {
      loading == true ? (
        <Loader loading={loading} />
      ) : (
        <main>
        <div className="layout-auth">
          <div className="auth-visual-wrapper auth-visual-customer">
            <div className="auth-visual">
              <img
                loading="lazy"
                src="/assets/images/auth/customer-bg.png"
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
                src="/assets/images/logo-white.png"
                alt="Karisma White Logo"
                width="1444"
                height="412"
              />
            </div>
            <div className="auth-form pallet-customer">
              <Formik
                initialValues={{
                  email: "",
                  medium: "email",
                }}
                validationSchema={ForgotSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form>
                  <div className="controls-group">
                    <div className="form-group common-input">
                      <label className="visually-hidden">Email</label>
                      <Field
                        type="email"
                        className="form-control form-control-rounded"
                        placeholder={t("CustomerForgotPassword.email.text")}
                        name="email"
                      />
                      <span className="validate-message mt-4">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                  </div>
                  <button className="btn common-rounded-btn reset-btn d-block w-100  text-uppercase mt-4">
                    {t("CustomerForgotPassword.sendResetLink.text")}
                  </button>
                  <div className="form-info text-center">
                    <p className="go-back-text text-white">
                      {t("CustomerForgotPassword.goBack.text")}
                      <Link to="/customer/login" className="login ms-1">
                        {t("CustomerForgotPassword.login.text")}
                      </Link>{" "}
                      {t("CustomerForgotPassword.or.text")}
                      <Link to="/customer/signup" className="login ms-1">
                        {t("CustomerForgotPassword.signUp.value")}
                      </Link>
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </main>
      )
    }
    </>
   
  );
}

export default CustomerForgot;
