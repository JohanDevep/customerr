import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import logo_dark from "../../../public/assets/images/logo-dark.png";
import logo_white from "../../../public/assets/images/logo-white.png";
import {Link, useParams} from "react-router-dom";
import {UseFetch} from "../../api/fetch/useFetch";
import {getSubscriptionSuccessResult, payment_intent_call, resetCart} from "../../redux/slices/Cart";
import {API_END_POINTS, API_STATUS_CODE} from "../../api/config";
import {loading} from "../../redux/slices/UserStates";
import {useTranslation} from "react-i18next";

const Success = () => {
    const [t, i18n] = useTranslation("common");
    /** redux store */
    const isPaymentIntent = useSelector((state) => state.cart.paymentIntentCall);
    const {subscriptionPaymentIntent,subscriptionPaymentStatus} = useSelector((state) => state.cart);
    const {subscription} = useSelector((state) => state.fetch);
    const {userName,email} = useSelector((state) => state.login.user);
    const paymentResponse = useSelector((state) => state.cart.paymentResponse);
    const shippingInformation = useSelector((state) => state.cart.shipping_information);
    const billingInformation = useSelector((state) => state.cart.billing_information);
    const isSubscribe = useSelector((state) => state.cart.isSubscribe);
    const dispatch = useDispatch();
    /** react hooks */
    const {id} = useParams()
    const [paymentInfo, setPaymentInfo] = useState({})
    const [orderItems, setOrderItems] = useState([])
    dispatch(loading(false))
    useEffect(() => {
        if (isPaymentIntent) {
            dispatch(
                payment_intent_call({
                    isPaymentIntent: false,
                })
            );
        }
        if(subscriptionPaymentStatus) {
            let response  = dispatch(getSubscriptionSuccessResult())
            response.then((data)=>{
                if (data.payload.statusCode=== API_STATUS_CODE.SUCCESS_POST) {
                    setPaymentInfo(data?.payload)
                }
            })
        }else{
            fetchOrderDetails();
        }
        dispatch(resetCart())
    }, [isPaymentIntent, paymentResponse, id]);

    const fetchOrderDetails = async () => {
        const params = {
            uuid: id,
            groups: "paymentInfo",
        };
        let response = await UseFetch(API_END_POINTS.GET_ORDER_ITEM, null, params);
        // eslint-disable-next-line no-unused-expressions
        response?.statusCode === API_STATUS_CODE.SUCCESS ? setPaymentData(response?.order) : false
    };

    const setPaymentData = (data) => {
        setPaymentInfo(data);
        let payload = {
            "uuid": data?.cart?.uuid,
            "group": "cartItems"
        }
        getOrderItems(payload)
    }
    const getOrderItems = async (params) => {
        let response = await UseFetch(API_END_POINTS.GET_CART_ITEMS, null, params)
        // eslint-disable-next-line no-unused-expressions
        response?.statusCode === API_STATUS_CODE.SUCCESS ? setOrderItems(response?.cart?.cartItems) : null
    }

    return (
        <div className="page-wrapper bg-pi-800">
            <header className="site-header-secondary ">
                <div className="container">
                    <div className="site-header-secondary-wrapper">
                        <div className="link-back-wrapper mt-3">
                            <Link to="/" className="link-back">
                                <i className="icon icon-arrow-left"></i>
                                <span>{t("Global.button.home")}</span>
                            </Link>
                        </div>
                        <div className="site-header-secondary-logo-container ">
                            <img src={logo_dark} alt="Site Brand" width="100%"/>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="checkout-success">
                    <div className="container">
                        <div className="checkout-success-header">
                            <div className="checkout-success-icon">
                                <i className="icon icon-check-circle"></i>
                            </div>
                            <div className="checkout-success-message">
                                <p>{t("Checkout.cart.success.message")}</p>
                                <h1 className="checkout-success-title">
                                    <span className="user-name">{paymentInfo?.user?.firstName}</span>
                                    <span>{t("Checkout.cart.success.message")}</span>
                                </h1>
                                {!subscriptionPaymentStatus ?
                                    <small>{t("Checkout.cart.success.purchase_no")} {paymentInfo?.paymentInfo?.paymentMethodDetails?.charge_id}</small>
                                    :
                                    <small>{t("Checkout.cart.success.purchase_no")}{paymentInfo?.paymentDetails?.id}</small>
                                }

                            </div>
                        </div>
                        {!isSubscribe ?
                        <div className="checkout-success-order-detail">
                            <div className="checkout-success-order-detail-wrapper">
                                <div className="order-detail-grid">
                                    <div className="order-detail-item">
                                        <header className="order-detail-item-header">
                                            <h3 className="order-detail-item-title">{t("Checkout.cart.success.details")}</h3>
                                        </header>
                                        {!subscriptionPaymentStatus?
                                            <ul className="order-detail-text-items">
                                                <li>{paymentInfo?.shippingAddress?.firstName} {paymentInfo?.shippingAddress?.lastName}</li>
                                                <li>{paymentInfo?.shippingAddress?.address},{paymentInfo?.shippingAddress?.city},{paymentInfo?.shippingAddress?.state},{paymentInfo?.shippingAddress?.postCode}</li>
                                                <li>{paymentInfo?.shippingAddress?.phoneNumber}</li>
                                            </ul>
                                            :<ul className="order-detail-text-items">
                                                <li>-N/A-</li>
                                            </ul>
                                        }

                                    </div>
                                    <div className="order-detail-item">
                                        <header className="order-detail-item-header">
                                            <h3 className="order-detail-item-title">{t("Checkout.cart.success.PAYMENT")}</h3>
                                        </header>
                                        {!subscriptionPaymentStatus?
                                        <ul className="order-detail-text-items">
                                            <li>{paymentInfo?.paymentInfo?.paymentMethodDetails?.card?.brand}</li>
                                            <li>**** **** **** {paymentInfo?.paymentInfo?.paymentMethodDetails?.card?.last4}</li>
                                            <li>{paymentInfo?.paymentInfo?.paymentMethodDetails?.card?.exp_month +"/"+paymentInfo?.paymentInfo?.paymentMethodDetails?.card?.exp_year}</li>
                                            <li>{paymentInfo?.user?.firstName} {paymentInfo?.user?.lastName}</li>
                                        </ul>:
                                            <ul className="order-detail-text-items">
                                            <li>{paymentInfo?.paymentDetails?.card?.brand}</li>
                                            <li>**** **** **** {paymentInfo?.paymentDetails?.card?.last4}</li>
                                            <li>{paymentInfo?.paymentDetails?.card?.exp_month}/{paymentInfo?.paymentDetails?.card?.exp_year}</li>
                                        </ul>

                                        }
                                    </div>
                                    <div className="order-detail-item">
                                        <header className="order-detail-item-header">
                                            <h3 className="order-detail-item-title">{t("Checkout.cart.success.additional_information")}</h3>
                                        </header>
                                        {billingInformation !== null ?
                                            <ul className="order-detail-text-items">
                                                <li>{paymentInfo?.user?.firstName} {paymentInfo?.user?.lastName}</li>
                                                <li>{!subscriptionPaymentStatus? paymentInfo?.user?.email:email}</li>
                                                <li>Total amount: ${!subscriptionPaymentStatus? paymentInfo?.totalAmount:subscriptionPaymentIntent?.userSubscription?.totalAmount}</li>
                                            </ul>
                                            :
                                            <ul className="order-detail-text-items">
                                                <li>{paymentInfo?.user?.firstName} {paymentInfo?.user?.lastName}</li>
                                                <li>{paymentInfo?.user?.email}</li>
                                                <li>{paymentInfo?.totalAmount}</li>
                                            </ul>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>

                        :false}
                        {!isSubscribe ?
                            <div className="checkout-success-product-list cart-ui-mobile">
                                <div className="checkout-success-product-list-wrapper">
                                    <h2 className="checkout-success-product-list-title">{t("Checkout.cart.table.column_one")}</h2>
                                    <div className="cart-table">
                                        <div className="cart-table-header">
                                            <div className="cart-table-row">
                                                <div className="cart-table-cell">
                                                    <p> {t("Checkout.cart.table.column_one")}&nbsp;</p>
                                                </div>
                                                <div className="cart-table-cell">
                                                    <p>{t("Checkout.cart.table.column_three")}</p>
                                                </div>
                                                <div className="cart-table-cell">
                                                    <p>{t("Checkout.cart.table.column_two")}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-table-body">

                                            {orderItems && !subscriptionPaymentStatus  ?
                                                orderItems?.map((data) =>
                                                    <div className="cart-table-row success-table-row">
                                                        <div className="cart-table-cell cell-success-product">
                                                            <div className="cart-product">
                                                                <div className="cart-product-thumbnail">
                                                                    <img src={data?.product?.imageUrl}
                                                                         alt="Cart product Thumbnail" width="45"/>
                                                                </div>
                                                                <div className="cart-product-detail">
                                                                    <p className="cart-product-title">{data?.product?.name}</p>
                                                                    <small>{data?.product?.description}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="cart-table-cell cell-success-product-detail">
                                                            <div className="cart-product-detail">
                                                                <p className="cart-product-title">{data?.product?.name}</p>
                                                                <small>{data?.product?.description}</small>
                                                            </div>
                                                        </div>
                                                        <div className="cart-table-cell cell-success-count">
                                                            <p>{data?.quantity}</p>
                                                        </div>
                                                        <div className="cart-table-cell cell-success-total">
                                                            <p>${data?.product?.price}</p>
                                                        </div>
                                                    </div>
                                                )
                                                : <div className="cart-table-row success-table-row">
                                                    <div className="cart-table-cell cell-success-product">
                                                        <div className="cart-product">
                                                            <div className="cart-product-thumbnail ">
                                                                <div className="black-block-icon"><i
                                                                    className="icon icon-facial-treatment text-lg-right" style={{fontSize:"40px"}}></i>
                                                                </div>
                                                            </div>
                                                            <div className="cart-product-detail">
                                                                <p className="cart-product-title">{subscription.name}</p>
                                                                <small>{subscription?.description}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cart-table-cell cell-success-product-detail">
                                                        <div className="cart-product-detail">
                                                            <p className="cart-product-title">{subscription?.name}</p>
                                                            <small>{subscription?.duration[0]?.interval}</small>
                                                        </div>
                                                    </div>
                                                    <div className="cart-table-cell cell-success-count">
                                                        <p>{subscription?.duration[0]}</p>
                                                    </div>
                                                    <div className="cart-table-cell cell-success-total">
                                                        <p>${subscription?.price}</p>
                                                    </div>
                                                </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            : false
                        }
                        <div className="col-item col-md-12 billing-address-form-footer d-flex justify-content-end my-3 ">
                            <a href={"https://soinskarisma-dashboard-customer-jlpdw7b27a-nn.a.run.app/"}
                                    className={"btn-dark active"} >LOGIN
                            </a>
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

export default Success;
