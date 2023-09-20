/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link, useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { UseClient } from "../../../../api/agent";
// import { API_END_POINTS, API_STATUS_CODE } from "../../../../api/config";
// import { toast } from "react-toastify";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import Loading from "../../../../api/loading";
// import SignUpSchema from "../../../../helpers/validations/signup/signup_schema";
// import { useTranslation } from "react-i18next";
// import SelectLocationMap from "../../../common/modals/SelectLocationMap";
// import { useDispatch, useSelector } from "react-redux";
// import { RegisterUser } from "../../../../redux/slices/Fetch";

// function CustomerSignup() {
//   /** Redux store */
//   const dispatch = useDispatch();
//   const [t, i18n] = useTranslation("common");
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const [formState, setFormState] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirm_password: "",
//     // terms_policy: false,
//   });

//   const handleSignUp = async (formData) => {
//     try {

//       await dispatch(RegisterUser(formData));
//       toast.success('Registration successful');
//     } catch (error) {

//       console.error("Registration error:", error);
//     }
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   // Get the form data and call the handleSignUp function
//   //   const formData = new FormData(event.target);
//   //   const registerData = {
//   //     email: formData.get("email"),
//   //     firstName: formData.get("firstName"),
//   //     lastName: formData.get("lastName"),
//   //     password: formData.get("password"),
//   //     confirm_password: formData.get("confirm_password"),
//   //     phone: formData.get("phone"),
//   //     // locale: formData.get('locale'),
//   //   };
//   //   handleSignUp(registerData);
//   // };

//   return (
//     <main>
//       <Loading active={loading} />
//       <SelectLocationMap />
//       <div className="layout-auth">
//         <div className="auth-visual-wrapper auth-visual-customer">
//           <div className="auth-visual">
//             <img
//               loading="lazy"
//               src="/assets/images/auth/customer-bg.png"
//               draggable={false}
//               alt="Customer Background Visual"
//               width="1582"
//               height="1197"
//             />
//           </div>
//         </div>
//         <div className="lang-switcher">
//           <div className="dropdown">
//             <button
//               className="dropdown-toggle"
//               type="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               <span>EN (US)</span>
//               <i className="icon icon-chevron-down"></i>
//             </button>
//             <ul className="dropdown-menu">
//               <li>
//                 <a
//                   className="dropdown-item"
//                   href="#"
//                   onClick={() => i18n.changeLanguage("en")}
//                 >
//                   EN (US)
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item"
//                   href="#"
//                   onClick={() => i18n.changeLanguage("es")}
//                 >
//                   ES (ES)
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="dropdown-item"
//                   href="#"
//                   onClick={() => i18n.changeLanguage("fr")}
//                 >
//                   FR (FR)
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="auth-content">
//           <div className="logo">
//             <img
//               loading="lazy"
//               src="/assets/images/logo-white.png"
//               draggable={false}
//               alt="Karisma White Logo"
//               width="1444"
//               height="412"
//             />
//           </div>
//           <div className="auth-form pallet-customer">
//             <Formik
//               initialValues={{
//                 email: "",
//                 firstName: "",
//                 lastName: "",
//                 password: "",
//                 confirm_password: "",
//                 phone: "",
//                 locale: "en",
//               }}
//               validationSchema={SignUpSchema}
//               enableReinitialize={true}
//               onSubmit={(values) => {
//                 handleSignUp(values);
//               }}
//             >
//               <Form>
//                 <div className="controls-group">
//                   <div className="form-group">
//                     <label className="visually-hidden">First Name</label>
//                     <Field
//                       type="text"
//                       className="form-control form-control-rounded"
//                       placeholder={t("CustomerSignup.firstName.text")}
//                       name="firstName"
//                     />
//                     <span className="text-danger mt-4">
//                       <ErrorMessage name="firstName" />
//                     </span>
//                   </div>
//                   <div className="form-group">
//                     <label className="visually-hidden">Last Name</label>
//                     <Field
//                       type="text"
//                       className="form-control form-control-rounded"
//                       placeholder={t("CustomerSignup.lastName.text")}
//                       name="lastName"
//                     />
//                     <span className="text-danger mt-4">
//                       <ErrorMessage name="lastName" />
//                     </span>
//                   </div>

//                   <div className="form-group">
//                     <label className="visually-hidden">Email</label>
//                     <Field
//                       type="email"
//                       className="form-control form-control-rounded"
//                       placeholder={t("CustomerSignup.email.text")}
//                       name="email"
//                     />
//                     <span className="text-danger mt-4">
//                       <ErrorMessage name="email" />
//                     </span>
//                   </div>

//                   <div className="form-group">
//                     <label className="visually-hidden">Phone</label>
//                     <Field
//                       type="text"
//                       inputMode="numeric"
//                       pattern="[0-9]*"
//                       className="form-control form-control-rounded"
//                       placeholder={t("CustomerSignup.phone.text")}
//                       name="phone"
//                     />
//                     <span className="text-danger mt-4">
//                       <ErrorMessage name="phone" />
//                     </span>
//                   </div>

//                   <div className="form-group">
//                     <label className="visually-hidden">Password</label>
//                     <Field
//                       type="password"
//                       className="form-control form-control-rounded"
//                       placeholder={t("CustomerSignup.password.text")}
//                       name="password"
//                     />
//                     <span className="text-danger mt-4">
//                       <ErrorMessage name="password" />
//                     </span>
//                   </div>

//                   <div className="form-group">
//                     <label className="visually-hidden">Confirm Password</label>
//                     <Field
//                       type="password"
//                       className="form-control form-control-rounded"
//                       placeholder={t("CustomerSignup.confirm_password.text")}
//                       name="confirm_password"
//                     />
//                     <span className="text-danger mt-4">
//                       <ErrorMessage name="confirm_password" />
//                     </span>
//                   </div>
//                   {/* <div className="form-group">
//                     <input
//                       className="btn btn-rounded d-block w-100  text-uppercase"
//                       data-bs-toggle="modal"
//                       data-bs-target="#locationsModal"
//                       readOnly={true}
//                       name="location"
//                       placeholder="SELECT SALON"
//                       value={
//                         selectedSalon?.name
//                           ? selectedSalon?.name
//                           : "SELECT SALON"
//                       }
//                     />
//                     <span className="text-danger mt-4">
//                       {selectedSalon === "" && isSelected===true ?"This field is required":""}
//                     </span>
//                   </div> */}
//                 </div>
//                 <div className="cta-option text-start">
//                   <div className="custom-checkbox">
//                     <Field
//                       id="checkbox-2"
//                       name="terms_policy"
//                       type="checkbox"
//                     />
//                     <label htmlFor="checkbox-2">
//                       <span className="checkbox-cta"></span>
//                       <span className="checkbox-label text-sm text-white">
//                         {" "}
//                         {t("CustomerSignup.agreeTo.text")}
//                         <Link
//                           to="/soins-karisma/terms-and-conditions"
//                           className="cta mx-2"
//                         >
//                           {" "}
//                           {t("CustomerSignup.termsCondition.text")}
//                         </Link>
//                         <Link
//                           to="/soins-karisma/privacy-policy"
//                           className="cta"
//                         >
//                           {" "}
//                           {t("CustomerSignup.privacyPolicy.text")}
//                         </Link>
//                       </span>
//                     </label>
//                     <span className="text-danger mt-4">
//                       <ErrorMessage name="terms_policy" />
//                     </span>
//                   </div>
//                 </div>
//                 <button
//                   className="btn btn-rounded d-block w-100  text-uppercase"
//                   type="submit"
//                 >
//                   {" "}
//                   {t("CustomerSignup.signUp.value")}
//                 </button>
//                 <div className="form-info text-center">
//                   <p className="text-sm">
//                     {t("CustomerSignup.alreadyAccount.text")}{" "}
//                     <Link to="/customer/login" className="cta mx-2">
//                       {t("CustomerSignup.login.text")}
//                     </Link>
//                   </p>
//                 </div>
//               </Form>
//             </Formik>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default CustomerSignup;
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { UseClient } from "../../../../api/agent";
import { API_END_POINTS, API_STATUS_CODE } from "../../../../api/config";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Loading from "../../../../api/loading";
import SignUpSchema from "../../../../helpers/validations/signup/signup_schema";
import { useTranslation } from "react-i18next";
// import SelectLocationMap from "../../../common/modals/SelectLocationMap";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../../../redux/slices/Fetch";
import Loader from "../../../common/loader";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomerSignup() {
  /** Redux store */
  const dispatch = useDispatch();
  const selectedSalon = useSelector((state) => state.login.selectedSalon);
  const [t, i18n] = useTranslation("common");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleSubmit = async (values) => {
    try {
      if (selectedSalon !== "") {
        setIsSelected(false);
        setLoading(true);
        delete values["cPassword"]; // Remove cPassword from payload object
        delete values["terms_policy"]; // Remove cPassword from payload object
        delete values["location"]; // Remove cPassword from payload object
        let client = await UseClient();
        client[API_END_POINTS.REGISTER](null, {
          ...values,
          salonUuid: selectedSalon.uuid,
        })
          .then((response) => {
            if (response?.data?.statusCode === API_STATUS_CODE.SIGNUP_SUCCESS) {
              setLoading(false);
              navigate("/customer/login");
            }
          })
          .catch((error) => {
            toast.info(error?.response?.data.message);
            setLoading(false);
          });
        setLoading(false);
      } else {
        setIsSelected(true);
      }
    } catch (e) {
      setLoading(false);
    }
  };
  // Date- 28/07/2023
  // const handleSignUp = async (formData) => {
  //   try {
  //     // Dispatch the RegisterUser action with the form data
  //     const response = await dispatch(RegisterUser(formData));
  //     console.log("response", response);
  //     toast.success("User is created successfully.");
  //     navigate("/customer/login");
  //   } catch (error) {
  //   }
  // };
  
  // Date- 28/07/2023
  const handleSignUp = async (formData) => {
    setLoading(true);
    try {
      const response = await dispatch(RegisterUser(formData));
      if (response?.payload?.statusCode === 201) {
        setLoading(false);
        toast.success(response.payload.message);
        navigate("/customer/login");
      } else {
        setLoading(false);
        toast.error("User registration failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred while creating the user. Please try again later.");
    }
  };
  return (
    <>
    {
      loading == true ? (
        <Loader loading={loading} />
      ) : (
<main>
      {/* <SelectLocationMap /> */}
      <div className="layout-auth">
        <div className="auth-visual-wrapper auth-visual-customer">
          <div className="auth-visual">
            <img
              loading="lazy"
              src="/assets/images/auth/customer-bg.png"
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
          <div className="logo karisma-logo">
            <img
              loading="lazy"
              src="/assets/images/logo-white.png"
              draggable={false}
              alt="Karisma White Logo"
              width="1444"
              height="412"
            />
          </div>
          <div className="auth-form pallet-customer">
            <Formik
              initialValues={{
                email: "",
                firstName: "",
                lastName: "",
                password: "",
                confirm_password: "",
                phone: "",
                locale: "en",
              }}
              validationSchema={SignUpSchema}
              enableReinitialize={true}
              onSubmit={(values) => {
                handleSignUp(values);
              }}
            >
              <Form>
                <div className="form-group common-input">
                  <div className="form-group common-input">
                    <label className="visually-hidden">First Name</label>
                    <Field
                      type="text"
                      className="form-control form-control-rounded"
                      placeholder={t("CustomerSignup.firstName.text")}
                      name="firstName"
                    />
                    <span className="validate-message mt-4">
                      <ErrorMessage name="firstName" />
                    </span>
                  </div>
                  <div className="form-group common-input">
                    <label className="visually-hidden">Last Name</label>
                    <Field
                      type="text"
                      className="form-control form-control-rounded"
                      placeholder={t("CustomerSignup.lastName.text")}
                      name="lastName"
                    />
                    <span className="validate-message mt-4">
                      <ErrorMessage name="lastName" />
                    </span>
                  </div>

                  <div className="form-group common-input">
                    <label className="visually-hidden">Email</label>
                    <Field
                      type="email"
                      className="form-control form-control-rounded"
                      placeholder={t("CustomerSignup.email.text")}
                      name="email"
                    />
                    <span className="validate-message mt-4">
                      <ErrorMessage name="email" />
                    </span>
                  </div>

                  <div className="form-group common-input">
                    <label className="visually-hidden">Phone</label>
                    <Field
                      type="text"
                      className="form-control form-control-rounded"
                      placeholder={t("CustomerSignup.PhoneNumber.text")}
                      name="phone"
                    />
                    <span className="validate-message mt-4">
                      <ErrorMessage name="phone" />
                    </span>
                  </div>

                  <div className="form-group password-input common-input">
                    <label className="visually-hidden">Password</label>
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      className="form-control form-control-rounded"
                      placeholder={t("CustomerSignup.password.text")}
                      name="password"
                    />
                    <span className="visibility-img" onClick={() => handleTogglePassword('password')}>
                            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                          </span>
                    <span className="validate-message mt-4">
                      <ErrorMessage name="password" />
                    </span>
                  </div>

                  <div className="form-group mb-2 password-input common-input">
                    <label className="visually-hidden">Confirm Password</label>
                    <Field
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="form-control form-control-rounded"
                      placeholder={t("CustomerSignup.ConfirmPass.text")}
                      name="confirm_password"
                    />
                    <span className="visibility-img" onClick={() => handleToggleConfirmPassword('password')}>
                            <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                          </span>
                    <span className="validate-message mt-4">
                      <ErrorMessage name="confirm_password" />
                    </span>
                  </div>
                </div>

                <button
                  className="btn signup-btn common-rounded-btn d-block w-100 text-uppercase mt-4"
                  type="submit"
                >
                  {t("CustomerSignup.signUp.value")}
                </button>
                <div className="form-info text-center">
                  <p className="already-acc-text text-white">
                    {t("CustomerSignup.alreadyAccount.text")}{" "}
                    <Link to="/customer/login" className="login">
                      {t("CustomerSignup.login.text")}
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

export default CustomerSignup;
