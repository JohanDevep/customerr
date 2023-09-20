import React, { useState } from "react";
import { AddItem, RemoveItem } from "../../helpers/itemCounter";
import {addCartItems, getCartItem, isSubscribe} from "../../redux/slices/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AddToCartItems() {
  const [t] = useTranslation("common");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  let { id } = useParams(); //uuid
  const collection_products = useSelector(
    (state) => state.fetch.collectionProducts
  );
  const addCartItem = () => {
    setQuantity(AddItem(quantity));
  };
  const removeCartItem = () => {
    setQuantity(RemoveItem(quantity));
  };
  const addToCart = async () => {
    dispatch(isSubscribe(false))
    let item = collection_products.filter((data) => {
      return data?.uuid === id;
    });
    let payloadData = {
      quantity: quantity,
      productUuid: item[0]?.uuid,
      statusId: 1,
    };
    try {
      let { payload } = await dispatch(addCartItems(payloadData));
      dispatch(await getCartItem());
      if (payload.statusCode === 201) {
        dispatch(await getCartItem());
      }
    } catch (e) {}
  };
  const shopNow = async () => {
    dispatch(isSubscribe(false))
    let item = collection_products.filter((data) => {
      return data?.uuid === id;
    });
    let payloadData = {
      quantity: quantity,
      productUuid: item[0]?.uuid,
      statusId: 1,
    };
    try {
      let { payload } = await dispatch(addCartItems(payloadData));
      dispatch(await getCartItem());
      if (payload.statusCode === 201) {
        dispatch(await getCartItem());
        navigate("/cart/checkout");
      }
    } catch (e) {}
  };
  return (
    <div className="single-item-banner-footer">
      <div className="single-item-banner-counter">
        <div className="input-group counter-control-group">
          <span
            className="input-group-text"
            onClick={() => {
              removeCartItem();
            }}
          >
            -
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Item Count"
            value={quantity}
          />
          <span
            className="input-group-text"
            onClick={() => {
              addCartItem();
            }}
          >
            +
          </span>
        </div>
      </div>
      <ul className="single-item-banner-cta-list">
        <li>
          <button
            className="single-item-banner-footer-cta btn-dark"
            onClick={() => {
              shopNow();
            }}
          >
            {" "}
            {t("RepairCollection.shopNow.value")}
          </button>
        </li>
        <li>
          <button
            className="single-item-banner-footer-cta btn-dark outline"
            onClick={() => {
              addToCart();
            }}
          >
            {t("RepairCollection.addToCart.value")}
          </button>
        </li>
      </ul>
    </div>
  );
}
