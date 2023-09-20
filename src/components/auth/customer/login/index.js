import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import login_schema from "../../../../helpers/validations/login/login_schema";
import { LoggedInStatus } from "../../../../redux/slices/UserStates";
import { LoginUser } from "../../../../redux/slices/auth/login";
import { API_STATUS_CODE } from "../../../../api/config";
import { APP_ROUTES } from "../../../../routes/Routes";
import Loading from "../../../../api/loading";
import { toast } from "react-toastify";
import { TOAST_STATUS } from "../../../../api/config";
import Loader from "../../../common/loader";

function CustomerLogin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.user);
  const initialValues = { email: "", password: "" }; // Login Form Initial Schema
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      let response = await dispatch(LoginUser(data));

      if (response?.payload?.statusCode === API_STATUS_CODE.SUCCESS) {
        setLoading(false);
        if (!isLoggedIn) {
          setLoading(false);
          navigate("/");
          toast.success(TOAST_STATUS.LOGIN_SUCCESS);
        } else {
          dispatch(LoggedInStatus(false));
          navigate('/customer/login');
        }
      } else if (response?.payload?.response.status === API_STATUS_CODE.UNAUTHORIZED) {
        setLoading(false);
        toast.error("Incorrect username or password. Please try again.");
      } else {
        setLoading(false);
        toast.error("Please use correct credentials");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Please use correct credentials");
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
              <div className="burbujas-container">
                <div className="burbujas"></div>
                <div className="burbujas2"></div>
              </div>
              <div className="auth-visual-wrapper auth-visual-customer">
                <div className="auth-visual">
                  <img
                    loading="lazy"
                    src="/assets/images/auth/customer-bg-4.png"
                    draggable={false}
                    alt="Customer Background Visual"
                  />
                </div>
              </div>
              <div className="lang-switcher" style={{ position: "absolute", top: "32px", right: "60px" }}>
                <div className="dropdown">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ color: "#ffffff" }}>EN (US)</span>
                    <i style={{ color: "#ffffff" }} className="icon icon-chevron-down"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#src/components/auth/customer#"
                        onClick={() => i18n.changeLanguage("en")}
                      >
                        EN (US)
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#src/components/auth/customer#"
                        onClick={() => i18n.changeLanguage("es")}
                      >
                        ES (ES)
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#src/components/auth/customer#"
                        onClick={() => i18n.changeLanguage("fr")}
                      >
                        FR (FR)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={login_schema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form>
                  <div className="auth-content" style={{
                     position: "absolute",
                     top: "175px",
                     borderRadius: '25px',
                     padding: '24px',
                     transform: "translateX(-18%)", // Centra horizontalmente
                     border: "3px solid white",
                     background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))", // Hace que el fondo sea opaco en lugar de transparente
                     width: '100%', // Hace que ocupe todo el ancho disponible
                     maxWidth: '550px', // Establece un ancho máximo si lo deseas
                     backdropFilter: "blur(15px)"
                  }}>
                    <div className="logo">
                      <img
                        loading="lazy"
                        src="/assets/images/logo-white.png"
                        draggable={false}
                        alt="Karisma White Logo"
                        width="1444"
                        height="412"
                      />
                    </div>
                    <div className="auth-form pallet-customer ">
                      <div className="controls-group">
                        <div className="form-group email-wrap">
                          <label className="visually-hidden">Email or User</label>
                          <Field
                            type="email"
                            name="email"
                            className="form-control form-control-rounded"
                            placeholder={t("CustomerLogin.email.text")}
                          />
                          <span className="validate-message mt-4">
                            <ErrorMessage name="email" />
                          </span>
                        </div>
                        <div className="form-group password-input pass-wrap">
                          <label className="visually-hidden">Password</label>
                          <Field
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            className="form-control form-control-rounded"
                            placeholder={t("CustomerLogin.password.text")}
                          />
                          <span className="visibility-img" onClick={() => handleTogglePassword('password')}>
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                          </span>
                          <span className="validate-message mt-4">
                            <ErrorMessage name="password" />
                          </span>
                        </div>
                      </div>
                      <div className="cta-container forgot-pass-wrap">
                        <Link to="/customer/forgot" className="forgot-text">
                          {t("CustomerLogin.forgotPass.text")}
                        </Link>
                      </div>
                      <button
                        type="submit"
                        className="btn d-block w-100 text-uppercase login-btn common-rounded-btn"
                      >
                        {t("CustomerLogin.login.value")}
                      </button>
                      <div className="info-multi-line">
                        <p className="signup-text">
                          {t("CustomerLogin.dontHaveAcc.text")}
                          <Link to="/customer/signup" className="sign-up sign-up ms-1">
                            {t("CustomerLogin.signup.text")}
                          </Link>
                        </p>
                        <p className="terms-text">
                          {t("CustomerLogin.bySigning.text")}
                          <Link
                            to="/soins-karisma/terms-and-conditions"
                            className="policy mx-1"
                          >
                            {t("CustomerLogin.termsCondition.text")}
                          </Link>
                          <Link to="/soins-karisma/privacy-policy" className="policy">
                            {t("CustomerLogin.privacyPolicy.text")}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </main>
        )
      }
    </>
  );
}

export default CustomerLogin;
