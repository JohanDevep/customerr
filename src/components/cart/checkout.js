/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useRef, useState, useEffect} from "react";
import logo_dark from "../../../public/assets/images/logo-dark.png";
import pay_paypal from "../../../public/assets/images/checkout/pay-paypal.jpg";
import pay_apple from "../../../public/assets/images/checkout/pay-apple.jpg";
import logo_white from "../../../public/assets/images/logo-white.png";
import "./Style/Index.css";
import {Link} from "react-router-dom";
import {API_END_POINTS, API_STATUS_CODE, COUNTRY} from "../../api/config";
import CartItemDetails from "./subComponents/cartItemDetails";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {
    ShippingFormSchema,
    BillingFormSchema,
} from "../../helpers/validations/checkout";
import {useDispatch, useSelector} from "react-redux";
import {
    billingInformation,
    shippingInformation,
    payment_intent_call, createPaymentIntet, createSubscriptionPaymentIntent, getUserShippingAddresses,
} from "../../redux/slices/Cart";
import PaypalPayment from "../payment_gateways/paypal/paypal_payment";
import Payment from "../payment_gateways/stripe/PaymentStatus";
import GooglePay from "../payment_gateways/google";
import SubscriptionDetail from "./subComponents/subscriptionDetail";
import jwtDecode from "jwt-decode";
import {toast} from "react-toastify";
import {loading} from "../../redux/slices/UserStates";
import {UseFetch} from "../../api/fetch/useFetch";
import {useTranslation} from "react-i18next";
import {LoginUser, RegisterBasic} from "../../redux/slices/auth/login";
import login_schema from "../../helpers/validations/login/login_schema";
import Autocomplete from "react-google-autocomplete";
import {filterCountry, filterStateCity, getStates} from "../../data/filterCountry";

const Checkout = () => {
    const [t, i18n] = useTranslation("common");
    const shippingAddressForm = useRef();
    /** redux store */
    const dispatch = useDispatch();
    const {isSubscribe, shipping_information, billing_information, addresses} = useSelector((state) => state.cart);
    const subscription = useSelector((state) => state.fetch.subscription);
    const cart = useSelector(state => state.cart.detail)

    const [isDisabled, setIsDisabled] = useState(true);
    const [tabActive, setTabActive] = useState("information");
    const [showForm, setShowForm] = useState(false);
    const [paymentIntentCall, setPaymentIntentCall] = useState(false);
    const token = localStorage.getItem("token");
    const [payPalbit, setPayPalBit] = useState(false);
    const [role, setRole] = useState("")
    const [isLogin, setLogin] = useState(false)
    const [cities, setCity] = useState([])
    const [state, setState] = useState(getStates())
    const [country, setCountry] = useState([])
    const [address,setAddress] = useState()
    /** set login register data */
    const [userData, setUserData] = useState()
    dispatch(loading(false))
    useEffect(() => {
        /** decode token */
        let decode = jwtDecode(token);
        decode?.roles?.forEach((role) => {
            setRole(role?.name)
        })
        // eslint-disable-next-line no-unused-expressions
        // dispatch(getUserShippingAddresses())
        /** address */
    }, [role])
    const tabs = [
        {
            id: "1",
            name: "information",
            active: false,
        },
        {
            id: "2",
            name: "payment",
            active: true,
        },
    ];

    /** handle login */
    const login = async (data) => {
        let response = dispatch(await LoginUser(data));
        response
            .then((e) => {
                if (e?.payload?.statusCode === API_STATUS_CODE.SUCCESS) {
                    dispatch(getUserShippingAddresses())
                    let token = localStorage.getItem("token")
                    let decode = jwtDecode(token);
                    decode?.roles?.forEach((role) => {
                        setRole(role?.name)
                    })
                    // eslint-disable-next-line no-unused-expressions
                    isLogin !==true && !isSubscribe ?createPaymentIntent( {
                        "cartUuid": cart?.uuid,
                        "shippingAddress": userData
                    }): isLogin !==true && isSubscribe ?createSubscribePaymentIntent(
                        { subscriptionUuid: subscription?.uuid,
                            "billingAddress": {
                                state: address?.state
                            }
                        }):null
                }
            })
            .catch((e) => {
                toast.error("Invalid Credentials")
            });

    }
    /** basic registeration */
    /** create payment intent for order */
    const createPaymentIntent = (payload)=>{
        const paymentMethod = dispatch(createPaymentIntet(payload));
        paymentMethod.then((response) => {
            response?.payload?.statusCode === API_STATUS_CODE.SUCCESS ? setStatuses() : toast.info(response?.payload?.message)
        }).catch((error)=>{
            dispatch(loading(false))
        })
    }
    dispatch(loading(false))
    const createSubscribePaymentIntent = (payload)=>{
        const intent = dispatch(createSubscriptionPaymentIntent(payload));
        intent.then((data) => {
            data.payload.statusCode === API_STATUS_CODE.SUCCESS ? setStatuses() : toast.info(data?.payload?.message)
            dispatch(loading(false));
        })
    }
    const basicRegisteration = async (data) => {
        dispatch(loading(true))
        let response = dispatch(RegisterBasic(data))
        response.then((res) => {
            dispatch(loading(false))
            if (res.payload.statusCode === API_STATUS_CODE.SUCCESS_POST) {
                login(data)
            } else {
                dispatch(loading(false))
                toast.info(res.payload.message)
            }
        })
    }
    /** handle login submit */
    const handleSubmitLogin = async (data) => {
        isLogin ? login(data) : basicRegisteration(data)
    }

    const handleSubmit = (values) => {
        if (role !== "Guest") {
            if (!isSubscribe) {
                dispatch(shippingInformation(values));
                /** create payment intent */
                dispatch(loading(true))
                let payoad = {
                    "cartUuid": cart?.uuid,
                    "shippingAddress": values
                }
                const paymentMethod = dispatch(createPaymentIntet(payoad));
                paymentMethod.then((response) => {
                    dispatch(loading(false))
                    // eslint-disable-next-line no-unused-expressions
                    response?.payload?.statusCode === API_STATUS_CODE.SUCCESS ? setStatuses() : toast.info(response?.payload?.message)
                })

            } else {
                dispatch(shippingInformation(values));
                dispatch(billingInformation(values))
                let requestPayload = {
                    subscriptionUuid: subscription?.uuid,
                    "billingAddress": {
                            state: values?.state
                    }
                };
                // createSubscriptionSession(requestPayload);
                dispatch(loading(true));
                let intent = dispatch(createSubscriptionPaymentIntent(requestPayload));
                intent.then((data) => {
                    data.payload.statusCode === API_STATUS_CODE.SUCCESS ? setStatuses() : toast.info(data?.payload?.message)
                    dispatch(loading(false));
                })
                // eslint-disable-next-line no-unused-expressions

            }
        } else {
            setAddress(values)
            dispatch(loading(false))
            shippingAddressForm.current?.submitForm();
        }
    };
    const setStatuses = () => {
        setTabActive("payment");
        setPaymentIntentCall(true);
        setIsDisabled(false);
    }
    useEffect(() => {

        if (!isSubscribe) {
            if (paymentIntentCall) {
                dispatch(
                    payment_intent_call({
                        isPaymentIntent: true,
                    })
                );
            }
        }
        // handleCountry(shipping_information && shipping_information.country)
        // handleState(shipping_information && shipping_information.state)
    }, [paymentIntentCall]);

    /** handle states */
    const handleCountry = (value, add) => {
        let response = filterCountry(value)
        setCountry(response[0])
    }
    const handleState = (value) => {
        // dispatch(shippingInformation({
        //     ...shipping_information,
        //     state: value
        // }))
        let response = filterStateCity(value)
        setCity(response?.cities)

    }
    const handleCity = (value) => {
        // dispatch(shippingInformation({
        //     ...shipping_information,
        //     city: value
        // }))
    }
    const CheckBox = ({field}) => {
        return (
            <div className="cta-option text-start">
                <div className="custom-checkbox">
                    <input name="terms_policy" id="checkbox-2" type="checkbox" defaultChecked={showForm}
                        onClick={() =>{
                            dispatch(billingInformation(shipping_information))
                            showForm
                                ? setShowForm(false)
                                : setShowForm(true)
                        }}
                    />
                    <label htmlFor="checkbox-2">
                        <span className="checkbox-cta"></span>
                        <span
                            className="grand-total-block-labels mt-2"><p><small>  {t("Checkout.address.same_as_shipping_text")}</small></p></span>
                    </label>
                </div>
            </div>
        );
    };
    const autoComplete = () => {
        return <Autocomplete
            type="text"
            className="form-control"
            id="Address"
            placeholder={t("Global.auth.form.address")}
            defaultValue={shipping_information.address}
            apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
            onPlaceSelected={(place, s) => {
                handleCountry(place.address_components?.slice(-1)[0]?.long_name, place?.formatted_address)
            }}

        />
    }
    return (
        <div className="page-wrapper bg-pi-800">
            <header className="site-header-secondary ">
                <div className="container">
                    <div className="site-header-secondary-wrapper">
                        <div className="site-header-secondary-logo-container">
                            <img src={logo_dark} alt="Site Brand" width="100%"/>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="checkout-section">
                    <div className="container">
                        <div className="link-back-wrapper">
                            <Link to="/cart" className="link-back">
                                <i className="icon icon-arrow-left"></i>
                                <span>{t("Global.button.back")}</span>
                            </Link>
                        </div>
                        <div className="row checkout-section-row">
                            <div className="checkout-section-col col-xl-6 checkout-form-col">
                                <div className="checkout-form-col-wrapper">
                                    <div className="checkout-custom-tabs custom-tabs">
                                        <ul
                                            className="nav nav-tabs nav-tabs-fr"
                                            id="myTab"
                                            role="tablist"
                                        >
                                            {tabs ? (
                                                tabs.map((tab) => {
                                                    return (
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className={
                                                                    tab?.name == tabActive
                                                                        ? "nav-link active"
                                                                        : "nav-link"
                                                                }
                                                                disabled={isDisabled}
                                                                id="information-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#information-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="information-tab-pane"
                                                                aria-selected="true"
                                                                onClick={() => {
                                                                    if (tab?.name === "information") {
                                                                        setPaymentIntentCall(true);
                                                                    }
                                                                    setTabActive(tab?.name);
                                                                }}
                                                            >
                                                                {t(`Checkout.tabs.${tab.name}`)}
                                                            </button>
                                                        </li>
                                                    );
                                                })
                                            ) : (
                                                <li></li>
                                            )}
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className={
                                                    tabs[0].name == tabActive
                                                        ? "tab-pane fade show active"
                                                        : "tab-pane fade"
                                                }
                                                id="information-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="information-tab"
                                                tabIndex="0"
                                            >
                                                <div className="tab-pane-content-wrapper">
                                                    {role === "Guest" ? (
                                                        <div
                                                            className="checkout-tab-block checkout-tab-block-contact-info">
                                                            <div className="grand-total-block-labels text-sm">
                                                                <h2 className="checkout-tab-block-title">
                                                                    <span> {!isLogin ? t(`Global.auth.signup`) : t(`Global.auth.login`)}</span>
                                                                    <p className="d-flex justify-content-end">
                                                                        <small>
                                                                            {!isLogin ? t(`Global.auth.haveAccount`) : t(`Global.auth.noAccount`)}
                                                                            <span
                                                                                className={"text-dark fw-bold pointer-event"}
                                                                                onClick={() => !isLogin ? setLogin(true) : setLogin(false)}>{!isLogin ? t(`Global.auth.login`) : t(`Global.auth.signup`)}</span>
                                                                        </small>
                                                                    </p>
                                                                </h2>
                                                            </div>
                                                            <ul className="list-auth-ctas">
                                                                <Formik
                                                                    initialValues={{email: "", password: ""}}
                                                                    validationSchema={login_schema}
                                                                    onSubmit={(values) => {
                                                                        handleSubmitLogin(values);
                                                                    }}

                                                                    innerRef={shippingAddressForm}
                                                                >
                                                                    <Form >
                                                                        <li>
                                                                            <Field
                                                                                type="email"
                                                                                name="email"
                                                                                className="form-control"
                                                                                placeholder={t("CustomerLogin.email.text")}
                                                                            />
                                                                            <span className="text-danger mt-4">
                                                                              <ErrorMessage name="email"/>
                                                                            </span>
                                                                        </li>
                                                                        <li className={"mt-2"}>
                                                                            <Field
                                                                                type="password"
                                                                                name="password"
                                                                                className="form-control"
                                                                                placeholder={t("CustomerLogin.password.text")}
                                                                            />
                                                                            <span className="text-danger mt-4">
                                                                              <ErrorMessage name="password"/>
                                                                            </span>
                                                                        </li>
                                                                        <div
                                                                            className="col-item col-md-12 billing-address-form-footer d-flex justify-content-start mt-3">
                                                                            <button type={"submit"}
                                                                                    className={!isLogin ? "d-none" : "btn-dark active"}>LOGIN
                                                                            </button>
                                                                        </div>
                                                                    </Form>
                                                                </Formik>
                                                            </ul>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}

                                                    <div
                                                        className="checkout-tab-block checkout-tab-block-express-checkout d-none">
                                                        <h2 className="checkout-tab-block-title">
                                                            Express Checkout
                                                        </h2>
                                                        <ul className="list-payment-type-ctas">
                                                            <li>
                                                                <a
                                                                    // href="src/components/cart#"
                                                                    role="button"
                                                                    className="payment-type-cta"
                                                                >
                                                                    <img
                                                                        onClick={() => setPayPalBit(!payPalbit)}
                                                                        src={pay_paypal}
                                                                        alt="Pay via paypal"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <GooglePay/>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    role="button"
                                                                    className="payment-type-cta"
                                                                >
                                                                    <img
                                                                        src={pay_apple}
                                                                        alt="Pay via Apple pay"
                                                                    />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    {/* Formik Form start */}

                                                    <Formik
                                                        initialValues={shipping_information}
                                                        validationSchema={ShippingFormSchema}
                                                        onSubmit={(values) => {
                                                            setUserData(values)
                                                            handleSubmit(values);
                                                        }}
                                                    >

                                                        <Form>
                                                            <div
                                                                className="checkout-tab-block checkout-tab-block-shipping-address">
                                                                <h2 className="checkout-tab-block-title">
                                                                    {t("Checkout.address.shipping_address_title")}
                                                                </h2>
                                                                <div className="row billing-address-form">
                                                                    <div className="col-item col-md-6">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="fName"
                                                                                className="visually-hidden"
                                                                            >
                                                                                First Name
                                                                            </label>
                                                                            <Field
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="fName"
                                                                                name="firstName"
                                                                                placeholder={t("Global.auth.form.firstName")}
                                                                            />
                                                                            <span className="text-danger mt-4">
                                          <ErrorMessage name="firstName"/>
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-6">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="lName"
                                                                                className="visually-hidden"
                                                                            >
                                                                                Last Name
                                                                            </label>
                                                                            <Field
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="lName"
                                                                                name="lastName"
                                                                                placeholder={t("Global.auth.form.lastName")}
                                                                            />
                                                                            <span className="text-danger mt-4">
                                          <ErrorMessage name="lastName"/>
                                        </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-12">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="Address"
                                                                                className="visually-hidden"
                                                                            >
                                                                                Address
                                                                            </label>
                                                                            <Field name="address"
                                                                                   placeholder={t("Global.auth.form.address")}
                                                                                   className={"form-control"}/>

                                                                            <span className="text-danger mt-4">
                                                                                  <ErrorMessage name="address"/>
                                                                                </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-12">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="country"
                                                                                className="visually-hidden"
                                                                            >
                                                                                Country
                                                                            </label>
                                                                            {/*<Field*/}
                                                                            {/*    id="country"*/}
                                                                            {/*    className="form-control"*/}

                                                                            {/*    as="select"*/}
                                                                            {/*   */}

                                                                            {/*>*/}
                                                                            {/*    <option selected disabled value="">*/}
                                                                            {/*        Country*/}
                                                                            {/*    </option>*/}
                                                                            {/*    {COUNTRY*/}
                                                                            {/*        ? COUNTRY?.map((country) => (*/}
                                                                            {/*            <option*/}
                                                                            {/*                value={country?.name}*/}
                                                                            {/*            >*/}
                                                                            {/*                {country?.name} {country?.emoji}*/}
                                                                            {/*            </option>*/}
                                                                            {/*        ))*/}
                                                                            {/*        : false}*/}
                                                                            {/*</Field>*/}
                                                                            <Field type="text" className="form-control"
                                                                                   name="country"
                                                                                   placeholder={t("Global.auth.form.country")}
                                                                                   list="productName"

                                                                            />
                                                                            <datalist id="productName"
                                                                                      className={"form-control"}>
                                                                                {COUNTRY
                                                                                    ? COUNTRY?.map((country) => (
                                                                                        <option
                                                                                            value={country?.name}
                                                                                        >
                                                                                            {country?.name} {country?.emoji}
                                                                                        </option>
                                                                                    ))
                                                                                    : false}
                                                                            </datalist>
                                                                            <span className="text-danger mt-4">
                                                                              <ErrorMessage name="country"/>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-6">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="state"
                                                                                className="visually-hidden"
                                                                            >
                                                                                State
                                                                            </label>
                                                                            <Field
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder={t("Global.auth.form.state")}
                                                                                name="state"
                                                                                // defaultValue={shipping_information? shipping_information?.state:"Alberta"}
                                                                                // onChange={(e)=>{setState(e.target.value)}}
                                                                                list={"stateList"}
                                                                            />
                                                                            <datalist id="stateList">
                                                                                {state
                                                                                    ? state.map((data) => (
                                                                                        <option
                                                                                            value={data?.name}
                                                                                            key={data.id}
                                                                                        >
                                                                                            {data?.name}
                                                                                        </option>
                                                                                    ))
                                                                                    : false}
                                                                                </datalist>

                                                                            {/*</Field>*/}
                                                                            <span className="text-danger mt-4">
                                                                              <ErrorMessage name="state"/>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-6">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="city"
                                                                                className="visually-hidden"
                                                                            >
                                                                                City
                                                                            </label>
                                                                            <Field
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="city"
                                                                                placeholder={t("Global.auth.form.city")}
                                                                                name="city"
                                                                            />
                                                                            {/*<option selected disabled value="">*/}
                                                                            {/*    Select City*/}
                                                                            {/*</option>*/}
                                                                            {/*{cities*/}
                                                                            {/*    ? cities.map((city) => (*/}
                                                                            {/*        <option*/}
                                                                            {/*            value={city?.name}*/}
                                                                            {/*            key={city.id}*/}
                                                                            {/*        >*/}
                                                                            {/*            {city?.name}*/}
                                                                            {/*        </option>*/}
                                                                            {/*    ))*/}
                                                                            {/*    : false}*/}

                                                                            {/*</Field>*/}
                                                                            <span className="text-danger mt-4">
                                                                              <ErrorMessage name="city"/>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-6">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="postcode"
                                                                                className="visually-hidden"
                                                                            >
                                                                                Postcode
                                                                            </label>
                                                                            <Field
                                                                                type="text"
                                                                                className="form-control"
                                                                                id="postcode"
                                                                                placeholder={t("Global.auth.form.postCode")}
                                                                                name="postCode"
                                                                            />
                                                                            <span className="text-danger mt-4">
                                                                                  <ErrorMessage name="postCode"/>
                                                                                </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-6">
                                                                        <div className="form-group">
                                                                            <label
                                                                                htmlFor="phone"
                                                                                className="visually-hidden"
                                                                            >
                                                                                Phone
                                                                            </label>
                                                                            <Field
                                                                                type="tel"
                                                                                className="form-control"
                                                                                id="phone"
                                                                                placeholder={t("Global.auth.form.phone")}
                                                                                name="phoneNumber"
                                                                            />
                                                                            <span className="text-danger mt-4">
                                                                              <ErrorMessage name="phoneNumber"/>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-item col-md-12">
                                                                        <Field name="acceptTerms" type="checkbox"
                                                                               component={CheckBox}/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Formik form end */}
                                                            {/* Billing form address start */}
                                                            {showForm ? (
                                                                <Formik
                                                                    initialValues={billing_information}
                                                                    validationSchema={BillingFormSchema}
                                                                    onSubmit={(values) => {
                                                                        dispatch(billingInformation(values));
                                                                        handleSubmitLogin(shipping_information)
                                                                    }}
                                                                    innerRef={shippingAddressForm}
                                                                >
                                                                    <div
                                                                        className="checkout-tab-block checkout-tab-block-billing-address">
                                                                        <h2 className="checkout-tab-block-title">
                                                                            {t("Checkout.address.billing_address_title")}
                                                                            <a
                                                                                href="#"
                                                                                className="checkout-tab-block-title-link"
                                                                                aria-label="Delete Billing Address"
                                                                                onClick={() => setShowForm(false)}
                                                                            >
                                                                                <span>  {t("Checkout.address.delete_billing_address")}</span>
                                                                                <i className="icon icon-close"></i>
                                                                            </a>
                                                                        </h2>
                                                                        <div className="row billing-address-form">
                                                                            <div className="col-item col-md-12">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        htmlFor="address1"
                                                                                        className="visually-hidden"
                                                                                    >
                                                                                        Address
                                                                                    </label>
                                                                                    <Field
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        id="address1"
                                                                                        placeholder="Address"
                                                                                        name="address"
                                                                                    />
                                                                                    <span
                                                                                        className="text-danger mt-4">
                                                                                      <ErrorMessage name="address"/>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-item col-md-12">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        htmlFor="country1"
                                                                                        className="visually-hidden"
                                                                                    >
                                                                                        Country
                                                                                    </label>
                                                                                    <Field
                                                                                        id="country1"
                                                                                        className="form-control"
                                                                                        name="country"
                                                                                        as="select"
                                                                                    >
                                                                                        <option
                                                                                            selected
                                                                                            disabled
                                                                                            value=""
                                                                                        >
                                                                                            Country
                                                                                        </option>
                                                                                        {COUNTRY
                                                                                            ? COUNTRY?.map((country) => (
                                                                                                <option
                                                                                                    value={country?.name}
                                                                                                >
                                                                                                    {country?.name}
                                                                                                </option>
                                                                                            ))
                                                                                            : false}
                                                                                    </Field>
                                                                                    <span
                                                                                        className="text-danger mt-4">
                                                                                      <ErrorMessage name="country"/>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-item col-md-6">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        htmlFor="state1"
                                                                                        className="visually-hidden"
                                                                                    >
                                                                                        State
                                                                                    </label>
                                                                                    <Field
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        id="state"
                                                                                        placeholder={t("Global.auth.form.state")}
                                                                                        name="state"
                                                                                    />
                                                                                    <span
                                                                                        className="text-danger mt-4">
                                              <ErrorMessage name="state"/>
                                            </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-item col-md-6">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        htmlFor="city"
                                                                                        className="visually-hidden"
                                                                                    >
                                                                                        City
                                                                                    </label>
                                                                                    <Field
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        id="city"
                                                                                        placeholder={t("Global.auth.form.city")}
                                                                                        name="city"
                                                                                    />
                                                                                    <span
                                                                                        className="text-danger mt-4">
                                              <ErrorMessage name="city"/>
                                            </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-item col-md-6">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        htmlFor="postcode1"
                                                                                        className="visually-hidden"
                                                                                    >
                                                                                        Postcode
                                                                                    </label>
                                                                                    <Field
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        id="postcode1"
                                                                                        placeholder={t("Global.auth.form.postCode")}
                                                                                        name="postCode"
                                                                                    />
                                                                                    <span
                                                                                        className="text-danger mt-4">
                                              <ErrorMessage name="postCode"/>
                                            </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-item col-md-6">
                                                                                <div className="form-group">
                                                                                    <label
                                                                                        htmlFor="phone1"
                                                                                        className="visually-hidden"
                                                                                    >
                                                                                        Phone
                                                                                    </label>
                                                                                    <Field
                                                                                        type="tel"
                                                                                        className="form-control"
                                                                                        id="phone1"
                                                                                        placeholder={t("Global.auth.form.phone")}
                                                                                        name="phoneNumber"
                                                                                    />
                                                                                    <span
                                                                                        className="text-danger mt-4">
                                                                                      <ErrorMessage name="phoneNumber"/>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Formik>
                                                            ) : null}
                                                            <div
                                                                className="col-item col-md-12 billing-address-form-footer d-flex justify-content-end mt-3">
                                                                <button
                                                                    className="btn-dark active"
                                                                    type="submit"
                                                                >
                                                                    {t("Global.button.continue")}
                                                                </button>
                                                            </div>
                                                        </Form>
                                                    </Formik>

                                                    {/* Billing form address end */}
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    tabs[1].name == tabActive
                                                        ? "tab-pane fade show active"
                                                        : "tab-pane fade"
                                                }
                                                id="payment-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="payment-tab"
                                                tabIndex="0"
                                            >
                                                <div className="tab-pane-content-wrapper">
                                                    <div
                                                        className="checkout-tab-block checkout-tab-block-express-checkout d-none">
                                                        <h2 className="checkout-tab-block-title">
                                                            Express Checkout
                                                        </h2>
                                                        <ul className="list-payment-type-ctas">
                                                            <li>
                                                                <a
                                                                    // href="src/components/cart#"
                                                                    role="button"
                                                                    className="payment-type-cta"
                                                                >
                                                                    <img
                                                                        onClick={() => setPayPalBit(!payPalbit)}
                                                                        src={pay_paypal}
                                                                        alt="Pay via paypal"
                                                                    />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <GooglePay/>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    role="button"
                                                                    className="payment-type-cta"
                                                                >
                                                                    <img
                                                                        src={pay_apple}
                                                                        alt="Pay via Apple pay"
                                                                    />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="checkout-tab-block checkout-tab-block-payment-info">
                                                        {!payPalbit ?
                                                            <>
                                                                <h2 className="checkout-tab-block-title">
                                                                    {t('Checkout.tabs.payment_information')}
                                                                </h2>
                                                                {paymentIntentCall && <Payment/>}
                                                            </>
                                                            :
                                                            <div className="mt-5">
                                                                <div>
                                                                    <PaypalPayment/>
                                                                </div>
                                                            </div>
                                                        }
                                                        {/* <OrderCreditCard/> */}
                                                        {/**/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* cart items details */}
                            {isSubscribe ? <SubscriptionDetail isPaymentIntent={paymentIntentCall}/> : <CartItemDetails isPaymentIntent={paymentIntentCall} />}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="site-footer">
                <div className="footer-secondary-content">
                    <div className="container">
                        <div className="footer-secondary-col-center">
                            <div className="footer-secondary-logo-container">
                                <img src={logo_white} alt="White Brand"/>
                            </div>
                        </div>
                        <div className="footer-secondary-col-end">
                            <p>2022 ©KARISMA. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Checkout;
