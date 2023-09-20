import React, { useEffect } from "react";
import { UseFetch } from "./api/fetch/useFetch";
import { API_END_POINTS } from "./api/config/index";
import { useDispatch } from "react-redux";
import {
  GetCollectionProduct,
  getSalonLocations,
  getSubscriptions,
} from "./redux/slices/Fetch";
import {getCartItem, getUserShippingAddresses} from "./redux/slices/Cart";
function  Security({ children }) {
  /** redux store */
  const dispatch = useDispatch();
  const setGuestAccessToken = async () => {
    const accessToken = await UseFetch(API_END_POINTS.GUEST_USER_AUTH_TOKEN);
    localStorage.setItem("token", accessToken.token);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setGuestAccessToken();
    }
    /** get salons location */
    dispatch(getSalonLocations());
    /** get products & collection */
    dispatch(GetCollectionProduct());
    dispatch(getSubscriptions());
    dispatch(getCartItem());
    /** get user addresses */
    dispatch(getUserShippingAddresses())
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}
export default Security;
