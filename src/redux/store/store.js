import { configureStore } from "@reduxjs/toolkit";
import userStates from "../slices/UserStates";
import cart from "../slices/Cart";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import sliceLogin from "../slices/auth/login";
import CheckoutSlice from "../slices/checkout";
import CardSuccessSlice from "../slices/Success_response";
import quizSlice from "../slices/quizSlice";
/** Redux persist **/
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import fetchData from "../slices/Fetch";

const persistConfig = {
  key: "root",
  storage,
};
export const rootReducers = combineReducers({
  user: userStates,
  cart: cart,
  fetch: fetchData,
  login: sliceLogin,
  checkout: CheckoutSlice,
  CardSuccess: CardSuccessSlice,
  quizSlice: quizSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
