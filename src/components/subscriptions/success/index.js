import React, { useEffect, useState } from "react";
import logo_dark from "../../../../public/assets/images/logo-dark.png";
import logo_white from "../../../../public/assets/images/logo-white.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UseFetch } from "../../../api/fetch/useFetch";
import { API_END_POINTS, API_STATUS_CODE } from "../../../api/config";

const SubscriptionSuccessPage = () => {
  const user = useSelector((state) => state.login.user);
  const [subscription, setSubscription] = useState({});

  const data = useSelector((state) => state.CardSuccess.subscriptionResponse);
  let subscriptionUuid = localStorage.getItem("subscriptionUuid");
  useEffect(() => {
    let response = UseFetch(API_END_POINTS.GET_SUBSCRIPTION_ITEM, null, {
      subscriptionUuid,
    });
    response.then((res) => {
      // eslint-disable-next-line no-unused-expressions
      res.statusCode === API_STATUS_CODE.SUCCESS
        ? setSubscription(res.subscription)
        : false;
    });
  }, []);

  return (
    <div className="page-wrapper bg-pi-800">
      <header className="site-header-secondary ">
        <div className="container">
          <div className="site-header-secondary-wrapper">
            <div className="link-back-wrapper mt-3">
              <Link to="/" className="link-back">
                <i className="icon icon-arrow-left"></i>
                <span>Home</span>
              </Link>
            </div>
            <div className="site-header-secondary-logo-container">
              <img src={logo_dark} alt="Site Brand" width="100%" />
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
                <p>SUCCESSFUL PAYMENT</p>
                <h1 className="checkout-success-title">
                  <span className="user-name">
                    {user?.userName?.split("_")[0]}
                  </span>
                  <span>SUCCESSFUL PAYMENT</span>
                </h1>
                <small>PURCHASE No. {subscriptionUuid?.slice(0, 8)}</small>
              </div>
            </div>
            <div className="checkout-success-order-detail">
              <div className="checkout-success-order-detail-wrapper">
                {/*<h2 className="checkout-success-order-detail-title">DETAILS</h2>*/}
                <div className="order-detail-grid">
                  <div className="order-detail-item">
                    <header className="order-detail-item-header">
                      <h3 className="order-detail-item-title">Details</h3>
                    </header>
                    <ul className="order-detail-text-items">
                      <li>{user?.userName?.split("_")[0]}</li>
                    </ul>
                  </div>
                  <div className="order-detail-item">
                    <header className="order-detail-item-header">
                      <h3 className="order-detail-item-title">PAYMENT</h3>
                    </header>
                    <ul className="order-detail-text-items">
                      <li>CREDIT CARD</li>
                      <li>**** **** ****{data?.cardNumber?.slice(-4)}</li>
                      <li>{data?.year}</li>
                    </ul>
                  </div>
                  <div className="order-detail-item">
                    <header className="order-detail-item-header">
                      <h3 className="order-detail-item-title">
                        ADITIONAL INFORMATION
                      </h3>
                      {/*<h3 className="order-detail-item-subtitle">BILLING ADDRESS</h3>*/}
                    </header>
                    <ul className="order-detail-text-items">
                      <li>{subscription?.name}</li>
                      <li>{subscription?.description}</li>
                      <li>{subscription?.price}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="checkout-success-product-list">*/}
            {/*    <div className="checkout-success-product-list-wrapper">*/}
            {/*        <h2 className="checkout-success-product-list-title">Products</h2>*/}
            {/*        <div className="cart-table">*/}
            {/*            <div className="cart-table-header">*/}
            {/*                <div className="cart-table-row">*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <p>&nbsp;</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <p>Quantity</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <p>PRice</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="cart-table-body">*/}
            {/*                <div className="cart-table-row">*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <div className="cart-product">*/}
            {/*                            <div className="cart-product-thumbnail">*/}
            {/*                                <img src={single_men} alt="Cart product Thumbnail" width="45"/>*/}
            {/*                            </div>*/}
            {/*                            <div className="cart-product-detail">*/}
            {/*                                <p className="cart-product-title">Lorem Ipsum</p>*/}
            {/*                                <small>lorem ipsum</small>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <p>2</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <p>$25.00</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="cart-table-row">*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <div className="cart-product">*/}
            {/*                            <div className="cart-product-thumbnail">*/}
            {/*                                <img src={single_men} alt="Cart product Thumbnail" width="45"/>*/}
            {/*                            </div>*/}
            {/*                            <div className="cart-product-detail">*/}
            {/*                                <p className="cart-product-title">Lorem Ipsum</p>*/}
            {/*                                <small>lorem ipsum</small>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <p>2</p>*/}
            {/*                    </div>*/}
            {/*                    <div className="cart-table-cell">*/}
            {/*                        <p>$25.00</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="footer-secondary-content">
          <div className="container">
            <div className="footer-secondary-col-center">
              <div className="footer-secondary-logo-container">
                <img src={logo_white} alt="White Brand" />
              </div>
            </div>
            <div className="footer-secondary-col-end">
              <p>2023 ©KARISMA. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionSuccessPage;
