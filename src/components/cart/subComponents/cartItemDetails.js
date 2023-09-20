import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { getCartItem } from "../../../redux/slices/Cart";
import CartItemOption from "./CartItemOption";
import { TAX } from "../data.js";
import { useTranslation } from "react-i18next";

function CartItemDetails({ isPaymentIntent }) {
  const [t, i18n] = useTranslation("common");
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const { paymentIntent } = useSelector((state) => state.cart);
  const token = localStorage.getItem("token");
  const cartItems = useSelector(({ cart }) => {
    if (cart.cartItems) {
      return Object.values(cart.cartItems);
    }
    return [];
  });
  const {
    subTotal,
    totalPrice,
    QST,
    GST,
    PST,
    HST,
    totalTaxes,
    transactionFee,
  } = useSelector(({ cart }) => {
    let totalPrice = 0;
    if (cart.cartItems) {
      const cartItems = Object.values(cart.cartItems);
      cartItems.forEach((cartItem) => {
        const {
          product: { price },
          quantity,
        } = cartItem;
        totalPrice += +price * +quantity;
      });
    }
    return {
      subTotal: parseFloat(totalPrice).toFixed(2),
      totalPrice: paymentIntent?.order?.totalAmount,
      QST: paymentIntent?.order?.taxQst,
      GST: paymentIntent?.order?.taxGst,
      PST: paymentIntent?.order?.taxPst,
      HST: paymentIntent?.order?.taxHst,
      totalTaxes: parseFloat((totalPrice * TAX.total) / 100).toFixed(2),
    };
  });
  useEffect(() => {
    if (!isMounted.current) {
      let decoded = jwt_decode(token);
      dispatch(getCartItem());
    }
  }, []);
  return (
    <div className="checkout-section-col col-xl-6 checkout-cart-col">
      <div className="checkout-cart-col-wrapper">
        <div className="cart-table-wrapper">
          <div className="cart-table-title-wrapper">
            <h1 className="cart-table-title">{t("Checkout.cart.title")}</h1>
          </div>
          <div className="cart-table">
            <div className="cart-table-header">
              <div className="cart-table-row">
                <div className="cart-table-cell">
                  <p>{t("Checkout.cart.table.column_one")}</p>
                </div>
                <div className="cart-table-cell cell-price">
                  <p>{t("Checkout.cart.table.column_two")}</p>
                </div>
                <div className="cart-table-cell">
                  <p>{t("Checkout.cart.table.column_three")}</p>
                </div>
                <div className="cart-table-cell">
                  <p>{t("Checkout.cart.table.column_four")}</p>
                </div>
                <div className="cart-table-cell">
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
            <div className="cart-table-body">
              {cartItems &&
                cartItems.map((cartItem) => {
                  const {
                    uuid,
                    quantity,
                    product: { name, price, imageUrl },
                  } = cartItem;
                  return (
                    <CartItemOption
                      key={uuid}
                      isDisabled={isPaymentIntent}
                      cartItem={{
                        uuid,
                        image: imageUrl,
                        name,
                        price,
                        quantity,
                      }}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <div className="discount-code-block">
          <div className="discount-code-form">
            <div className="form-group form-group-control">
              <label htmlFor="discountCode" className="visually-hidden">
                {t("Checkout.cart.gift_card")}
              </label>
              <input
                type="text"
                id="discountCode"
                className="form-control"
                placeholder={t("Checkout.cart.gift_card")}
              />
            </div>
            <div className="form-group-cta">
              <button className="btn-dark outline-transparent">
                {t("Global.button.apply")}
              </button>
            </div>
          </div>
        </div>
        <div className="grand-total-divisions-block">
          <ul className="list-grand-total-divisions">
            <li>
              <span className="division-label">
                {t("Checkout.cart.subtotal")}
              </span>
              <span className="division-amount">${subTotal}</span>
            </li>
            <hr />
            {isPaymentIntent ? (
              <>
                {QST !== "0.00"?
                <li>
                  <span className="division-label">
                    QST{" "}
                    <small className="text-sm">
                      (Quebec)
                    </small>
                  </span>
                  <span className="division-amount">${QST}</span>
                </li>
                :null}
                {GST !== "0.00"?
                <li>
                  <span className="division-label">
                    GST{" "}
                    <small className="text-sm">
                      {/*({paymentIntent?.order?.shippingAddress?.country})*/}
                    </small>
                  </span>
                  <span className="division-amount">${GST}</span>
                </li>
                :null
                }
                {PST !== "0.00"?
                    <li>
                  <span className="division-label">
                    PST <small className="text-sm"></small>
                  </span>
                      <span className="division-amount">${PST}</span>
                    </li>
                    :
                    null
                }

                     {HST !== "0.00"?
                <li>
                  <span className="division-label">
                    HST <small className="text-sm"></small>
                  </span>
                  <span className="division-amount">${HST}</span>
                </li>
                     :null}
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="grand-total-block">
          <div className="grand-total-block-labels">
            <p>
              {t("Checkout.cart.total")}
              <small>{t("Checkout.cart.total_tax_text")}</small>
            </p>
          </div>
          <div className="grand-total-block-amount">
            <p>${isPaymentIntent ? totalPrice:subTotal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemDetails;
