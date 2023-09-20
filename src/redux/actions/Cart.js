import { UseFetch } from "../../api/fetch/useFetch";
import { API_END_POINTS } from "../../api/config";
import {
  updateCartItemReducer,
  deleteCartItemReducer,
  getCartItem,
} from "../slices/Cart";

const updateCartItem = (cartItem) => {
  const { uuid, quantity } = cartItem;
  return UseFetch(
    API_END_POINTS.PATCH_CART_ITEM_ITEM,
    {
      quantity,
    },
    {
      uuid,
    }
  );
};
const deleteCartItem = (cartItem) => {
  const { uuid } = cartItem;
  return UseFetch(
    API_END_POINTS.DELETE_CART_ITEM_ITEM,
    {},
    {
      uuid,
    }
  );
};

export const updateCartItemQuantityAction = (uuid, quantity) => {
  return (dispatch) => {
    return updateCartItem({
      uuid,
      quantity,
    }).then((response) => {
      const { cartItem } = response;
      dispatch(updateCartItemReducer(cartItem));
      dispatch(getCartItem());
    });
  };
};

export const deleteCartItemAction = (uuid) => {
  return (dispatch) => {
    return deleteCartItem({
      uuid,
    }).then((response) => {
      dispatch(
        deleteCartItemReducer({
          uuid,
        })
      );
      dispatch(getCartItem());
    });
  };
};
