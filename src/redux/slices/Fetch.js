import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UseFetch } from "../../api/fetch/useFetch";
import { API_END_POINTS } from "../../api/config";
import { END_POINTS } from "../../config";
import {
  salonDetails,
  salonLocationDataSet,
} from "../../utils/salonLocationDataSet";
import Helping from "../../api/agent/helping";
import axios from "axios";

/** Fetch Item that user subscribed */
export const getSubscriptionItem = createAsyncThunk(
  "get/subscribed/list/",
  async (uuid) => {
    const response = await UseFetch(API_END_POINTS.GET_USER_ITEM, null, {
      uuid,
      group: "subscriptions",
    });
    return response;
  }
);
/** Fetch subscription package list */
export const getSubscriptions = createAsyncThunk(
  "get/subscription/list/",
  async () => {
    const response = await UseFetch(
      API_END_POINTS.GET_SUBSCRIPTION,
      null,
      null
    );
    return response;
  }
);

export const ForgotPassword = createAsyncThunk(
  "users/forgotPassword",
  async (payload) => {
    try {
      const config = Helping.getConfig(); // Get the config object using .getConfig()
      const response = await axios.post(
        `${END_POINTS.FORGOT_PASSWORD}`,
        payload
      );
      if (response.status !== 200) {
        throw new Error("Forgot password failed");
      }
      return response.data;
    } catch (error) {
      // console.error("Error during forgot password:", error);
      throw error;
    }
  }
);

export const VerifyOTP = createAsyncThunk(
  "users/verifyOTP",
  async (payload) => {
    try {
      const config = Helping.getConfig(); // Get the config object using .getConfig()
      const response = await axios.post(`${END_POINTS.VERIFY_OTP}`, payload);
      if (response.status !== 200) {
        throw new Error("OTP verification failed");
      }
      return response.data;
    } catch (error) {
      // console.error("Error during OTP verification:", error);
      throw error;
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({ otpCode, email, medium, password }) => {
    try {
      const config = Helping.getConfig();
      const response = await axios.post(
        `${END_POINTS.RESET_PASSWORD}`,
        { otpCode, email, medium, password },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: config.authorization,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Reset password failed");
      }
      return response.data;
    } catch (error) {
      // console.error("Error during reset password:", error);
      throw error;
    }
  }
);

export const fetchEmployeeDetails = createAsyncThunk(
  "employee/fetchEmployeeDetails",
  async (_, { getState }) => {
    try {
      const { token, uuid } = getState().login;
      const response = await axios.get(
        `${END_POINTS.FETCH_EMPLOYEES_DETAILS}${uuid}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to fetch employee details");
      }
    } catch (error) {
      // console.error("Error fetching employee details:", error);
      throw error;
    }
  }
);

export const fetchSalonsList = createAsyncThunk(
  "salons/fetchSalonsList",
  async (_, { getState }) => {
    try {
      const { token } = getState().login;
      const response = await axios.get(`${END_POINTS.FETCH_SALONS_LIST}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Failed to fetch employee details");
      }
    } catch (error) {
      // console.error("Error fetching employee details:", error);
      throw error;
    }
  }
);

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  try {
    const response = await axios.get(`${END_POINTS.FETCH_COUNTRIES}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch countries");
    }
    return response.data.data; // Return the "data" array from the response
  } catch (error) {
    // console.error("Error while fetching countries:", error);
    throw error;
  }
});
/** Fetch subscription package by id */
export const getSubscriptionById = createAsyncThunk(
  "get/subscription/uuid/",
  async (uuid) => {
    const response = await UseFetch(
      API_END_POINTS.GET_SUBSCRIPTION_ITEM,
      null,
      { uuid }
    );
    return response;
  }
);
/** Fetch subscription package by id */
export const GetCollectionProduct = createAsyncThunk(
  "get/collection/product/",
  async () => {
    const response = await UseFetch(
      API_END_POINTS.GET_PRODUCT_COLLECTION,
      null,
      null
    );
    return response;
  }
);

/** Fetch salons location */
export const getSalonLocations = createAsyncThunk(
  "get/salon/locations/",
  async () => {
    const response = await UseFetch(
      API_END_POINTS.GET_SALON_LOCATION,
      null,
      null
    );
    return response;
  }
);
export const RegisterUser = createAsyncThunk(
  "users/register",
  async (payload) => {
    try {
      const config = Helping.getConfig();
      const response = await axios.post(
        `${END_POINTS.REGISTER_USER}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: config.authorization,
          },
        }
      );
      if (response.status !== 201) {
        throw new Error("Registration failed");
      }
      return response.data;
    } catch (error) {
      // Handle errors
      throw error;
    }
  }
);

export const updateProfile = createAsyncThunk(
  "users/updateProfile",
  async (data, { getState }) => {
    try {
      const { token, uuid } = getState().login;
      const config = Helping.getConfig();

      delete data.formData.email;
      delete data.formData.postCode;

      const response = await axios.patch(`${END_POINTS.PROFILE_UPDATE}${uuid}`, data.formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: config.headers.Authorization,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Update profile failed");
      }
      return response.data;
    } catch (error) {
      // Handle errors
      // console.error("Error updating profile:", error);
      return error;
    }
  }
);

/** initiale state */
const initialState = {
  subscribedItems: [],
  subscriptionsList: [],
  subscription: {},
  collectionProducts: [],
  subscriptionDuration: [],
  salonLocation: [],
  salonLocationAgregatedData: [],
  salonLocationDetails: [],
};
const fetchData = createSlice({
  name: "fetch",
  initialState,
  employeeDetails: null,
  loading: false,
  error: null,
  reducers: {
    removeSubscription: (state, data) => {
      state.subscription = {};
    },
  },
  /** extra reducer **/
  extraReducers(builder) {
    builder

      .addCase(getSubscriptionItem.pending, (state, action) => { })
      .addCase(getSubscriptionItem.fulfilled, (state, action) => {
        state.subscribedItems = action?.payload?.user;
      })

      .addCase(getSubscriptions.fulfilled, (state, action) => {
        state.subscriptionsList = action?.payload.subscriptions;
      })

      .addCase(getSubscriptionById.fulfilled, (state, action) => {
        state.subscription = {
          ...action?.payload?.subscription,
          duration: ["Ony Month"],
        };
      })

      .addCase(GetCollectionProduct.fulfilled, (state, action) => {
        state.collectionProducts = action?.payload?.products;
      })

      .addCase(getSalonLocations.fulfilled, (state, action) => {
        state.salonLocationAgregatedData = salonLocationDataSet(
          action?.payload?.salons
        );
        state.salonLocationDetails = salonDetails(action?.payload?.salons);
        state.salonLocation = action?.payload?.salons;
      })
      .addCase(fetchEmployeeDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployeeDetails.fulfilled, (state, action) => {
        state.employeeDetails = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchEmployeeDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { removeSubscription } = fetchData.actions;
export default fetchData.reducer;
