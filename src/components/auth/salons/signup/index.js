import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Loading from "../../../../api/loading";
import { ErrorMessage, Field, Form, Formik } from "formik";
import SignUpSchema from "../../../../helpers/validations/signup/signup_schema";
import { UseClient } from "../../../../api/agent";
import { API_END_POINTS, API_STATUS_CODE } from "../../../../api/config";

function SalonsSignup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    cPassword: "",
    terms_policy: false,
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    let client = await UseClient();
    let payload = {
      firstName: values.fullName.split(" ")[0],
      lastName: values.fullName.split(" ")[1],
      email: values.email,
      password: values.password,
    };
    client[API_END_POINTS.REGISTER](null, payload)
      .then((response) => {
        if (response?.data?.statusCode === API_STATUS_CODE.SIGNUP_SUCCESS) {
          setLoading(false);
          navigate("/salon/login");
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
                <a className="dropdown-item" href="#">
                  EN (US)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
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
              validationSchema={SignUpSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              <Form>
                <div className="controls-group">
                  <div className="form-group">
                    <label className="visually-hidden">Full Name</label>
                    <Field
                      type="text"
                      className="form-control form-control-rounded"
                      placeholder="Full Name"
                      name="fullName"
                    />
                    <span className="text-danger mt-4">
                      <ErrorMessage name="fullName" />
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="visually-hidden">Email</label>
                    <Field
                      type="email"
                      className="form-control form-control-rounded"
                      placeholder="Email"
                      name="email"
                    />
                    <span className="text-danger mt-4">
                      <ErrorMessage name="email" />
                    </span>
                  </div>
                  {/*<div className="form-group">*/}
                  {/*    <label className="visually-hidden">Mobile Phone</label>*/}
                  {/*    <input type="tel" className="form-control form-control-rounded"*/}
                  {/*           placeholder="Mobile Phone"/>*/}
                  {/*</div>*/}
                  <div className="form-group">
                    <label className="visually-hidden">Password</label>
                    <Field
                      type="password"
                      className="form-control form-control-rounded"
                      placeholder="Password"
                      name="password"
                    />
                    <span className="text-danger mt-4">
                      <ErrorMessage name="password" />
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="visually-hidden">Confirm Password</label>
                    <Field
                      type="password"
                      className="form-control form-control-rounded"
                      placeholder="Confirm Password"
                      name="cPassword"
                    />
                    <span className="text-danger mt-4">
                      <ErrorMessage name="cPassword" />
                    </span>
                  </div>
                </div>
                <div className="cta-option text-start">
                  <div className="custom-checkbox">
                    <Field
                      id="checkbox-2"
                      name="terms_policy"
                      type="checkbox"
                    />
                    <label htmlFor="checkbox-2">
                      <span className="checkbox-cta"></span>
                      <span className="checkbox-label text-sm text-white">
                        Agree to our
                        <Link
                          to="/soins-karisma/terms-and-conditions"
                          className="cta mx-2"
                        >
                          {" "}
                          Terms & Condition,
                        </Link>
                        <Link
                          to="/soins-karisma/privacy-policy"
                          className="cta"
                        >
                          {" "}
                          Privacy Policy.
                        </Link>
                      </span>
                    </label>
                    <span className="text-danger mt-4">
                      <ErrorMessage name="terms_policy" />
                    </span>
                  </div>
                </div>
                <button
                  className="btn btn-rounded d-block w-100  text-uppercase"
                  type="submit"
                >
                  Sign up
                </button>
                <div className="form-info text-center">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link to="/salon/login" className="cta mx-2">
                      Login
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

export default SalonsSignup;
