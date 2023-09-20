import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Loading from "../../../../api/loading";
import login_schema from "../../../../helpers/validations/login/login_schema";
import { UseClient } from "../../../../api/agent";
import {
  API_END_POINTS,
  API_STATUS_CODE,
} from "../../../../api/config";
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";

function SalonsLogin() {
  const [t, i18n] = useTranslation("common");
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" }; // Login Form Initial Schema
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    let client = await UseClient();
    client[API_END_POINTS.LOGIN](null, data)
      .then((response) => {
        if (response.data.statusCode === API_STATUS_CODE.SUCCESS) {
          setLoading(false);
          let user = jwtDecode(response.data.token); //decode token
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", user.email);
          localStorage.setItem("subdomain", user?.salon?.subdomain);

          navigate(0);
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <main>
      <Loading active={loading} />
      <div className="layout-auth">
        <div className="auth-visual-wrapper auth-visual-saloon">
          <div className="auth-visual">
            <img
              loading="lazy"
              src="/assets/images/auth/salons-bg.png"
              alt="Salons Background Visual"
              width="1132"
              height="1318"
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
              src="/assets/images/logo-salon-white.png"
              alt="Karisma White Logo"
              width="3885"
              height="1487"
            />
          </div>
          <div className="auth-form pallet-salon">
            <Formik
              initialValues={initialValues}
              validationSchema={login_schema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              <Form>
                <div className="controls-group">
                  <div className="form-group">
                    <label className="visually-hidden">Email or User</label>
                    <Field
                      type="email"
                      className="form-control form-control-rounded"
                      placeholder={t("SalonLogin.email.text")}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="visually-hidden">Password</label>
                    <Field
                      type="password"
                      className="form-control form-control-rounded"
                      placeholder={t("SalonLogin.password.text")}
                      name="password"
                    />
                  </div>
                </div>
                <div className="cta-container">
                  <Link to="/salon/forgot" className="cta text-sm">
                    {t("SalonLogin.forgotPass.text")}
                  </Link>
                </div>
                <button className="btn btn-rounded d-block w-100  text-uppercase">
                  {t("SalonLogin.login.value")}
                </button>
                <div className="form-info">
                  <p className="text-sm text-center">
                    {t("SalonLogin.dontHaveAcc.text")}
                    <Link to="/salon/signup" className="cta mx-2">
                      {" "}
                      {t("SalonLogin.signup.text")}{" "}
                    </Link>
                  </p>
                  <p className="text-sm">
                    {t("SalonLogin.bySigning.text")}
                    <Link
                      to="/soins-karisma/terms-and-conditions"
                      className="cta mx-2"
                    >
                      {t("SalonLogin.termsCondition.text")}
                    </Link>
                    <Link to="/soins-karisma/privacy-policy" className="cta">
                      {" "}
                      {t("SalonLogin.privacyPolicy.text")}
                    </Link>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SalonsLogin;
