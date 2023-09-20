/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Yup from "yup";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { API_END_POINTS, API_STATUS_CODE } from "../../../api/config";
import { resetPassword } from "../../../redux/slices/Fetch";
import Loading from "../../../api/loading";
import { toast } from "react-toastify";
import { TOAST_STATUS } from "../../../api/config";
import Loader from "../../common/loader"

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]*$/,
      "Password should contain at least 1 upper case letter, 1 lower case letter, and 1 number."
    )
    .required("This field is required").min(8, 'Password is too short - should be 8 chars minimum.')
    .max(16, 'Password is too long - should be 16 chars maximum.'),
  cPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password must be same"
    ),
  }),
});

function ResetPassword() {
  const [t, i18n] = useTranslation("common");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  // const handleSubmit = async (values) => {
  //   try {
  //     // Get OTP code and email from local storage
  //     let otpCode = localStorage.getItem("otpCode");
  //     let email = localStorage.getItem("userEmail");
  //     let updatePasswordPayload = {
  //       email: email,
  //       medium: "email",
  //       otpCode: otpCode,
  //       password: values.password,
  //     };
  //     await dispatch(resetPassword(updatePasswordPayload));
  //     toast.success("password reset successfully")
  //   } catch (error) {
  //     // Password reset failed, handle error here
  //     console.error("Password reset error:", error);
  //   }
  // };
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Get OTP code and email from local storage
      let otpCode = localStorage.getItem("otpCode");
      let email = localStorage.getItem("userEmail");
      let updatePasswordPayload = {
        email: email,
        medium: "email",
        otpCode: otpCode,
        password: values.password,
      };

      await dispatch(resetPassword(updatePasswordPayload)).then((el) => {
        if (el?.payload?.statusCode === 200) {
          setLoading(true);
          navigate('/customer/login');
          toast.success(el.payload.message);
          setLoading(false);
        } else {
          toast.error("Password reset failed. Please try again.");
        }
      }).catch((err) => {
        setLoading(false);
      })

    } catch (error) {
      toast.error("An error occurred while resetting the password. Please try again later.");
    }
  };
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
            <div className="logo">
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
                initialValues={initialValues}
                validationSchema={ResetPasswordSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form>
                  <div className="controls-group">
                    <div className="form-group">
                      <label className="visually-hidden">password</label>
                      <Field
                        type="password"
                        className="form-control form-control-rounded"
                        placeholder={t("ResetPassword.password.text")}
                        name="password"
                      />
                      <span className="text-danger mt-4">
                        <ErrorMessage name="password" />
                      </span>
                    </div>
                    <div className="form-group">
                      <label className="visually-hidden mt-3">
                        Confirm Password
                      </label>
                      <Field
                        type="password"
                        className="form-control form-control-rounded mt-2"
                        placeholder={t("ResetPassword.confirmPassword.text")}
                        name="cPassword"
                      />
                      <span className="text-danger mt-4">
                        <ErrorMessage name="cPassword" />
                      </span>
                    </div>
                  </div>
                  <button className="btn common-rounded-btn d-block w-100  text-uppercase mt-4" type="submit">
                    {t("ResetPassword.resetPass.text")}
                  </button>
                  <div className="form-info text-center">
                    <p className="text-sm">
                      {t("ResetPassword.goBack.text")}
                      <Link to="/customer/login" className="sign-up sign-up ms-1">
                        {t("ResetPassword.login.text")}
                      </Link>{" "}
                      or
                      <Link to="/customer/signup" className="sign-up sign-up ms-1">
                        {t("ResetPassword.signUp.text")}
                      </Link>
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </main>
      )}
    </>
  
  );
}

export default ResetPassword;
