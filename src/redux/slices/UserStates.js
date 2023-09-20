import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UseFetch } from "../../api/fetch/useFetch";
import { ACTIONS } from "../../api/config";
import Helping from "../../api/agent/helping";
import axios from "axios";

export const getUserDetails = createAsyncThunk(
  "test/getUserDetails",
  async () => {
    let url = `/user/${localStorage.getItem("user_id")}`;
    const response = await UseFetch(
      url,
      null,
      localStorage.getItem("token"),
      "GET"
    );
    return response;
  }
);
// Reset App
export const onLogout = () => {
  return (dispatch) => {
    // Your code here...
    dispatch({ type: ACTIONS.RESET_APP });
  };
};

// export const LogoutUser = createAsyncThunk("users/logout", async (_, { dispatch }) => {
//   try {
//     const config = Helping.getConfig(); // Get the config object using .getConfig()
//     const response = await axios.post("http://10.10.9.32:8000/api/v1/logout", {}, {
//       headers: {
//         "Content-Type": "application/json",
//         // Add any additional headers from the config object
//         // Example: Authorization header
//         Authorization: config.authorization,
//       },
//     });
//     if (response.status !== 200) {
//       throw new Error("Logout failed");
//     }

//     // Clear the token from local storage
//     localStorage.removeItem("token");

//     // Clear the token from Redux store
//     dispatch({ type: 'CLEAR_TOKEN' });

//     // Return any necessary data from the response
//     return response.data;
//   } catch (error) {
//     // Handle errors
//     console.error("Error during logout:", error);
//     throw error;
//   }
// });
export const LogoutUser = createAsyncThunk(
  "logoutRedux/logout",
  async (_, { payload }) => {
      try {
          // dispatch(startLoading());
          const config = Helping.getConfig();
          let logoutApiResponse = await axios.post("http://10.10.9.32:8000/api/v1/logout", {},{
            headers: {
                      "Content-Type": "application/json",
                      Authorization: config.authorization,
                    },
          }
          )
          // dispatch(stopLoading());
          if (logoutApiResponse.status == 200) {
              return logoutApiResponse?.data
          }
      } catch (error) {
          // dispatch(stopLoading());
          // toast.error(error.response.data.message);
          console.error("Error during logout:", error);
           throw error;
      }
  }
);

export const userStates = createSlice({
  name: "user",
  initialState: {
    loading: false,
    userDetails: [],
    isLoggedIn:false
  },
  reducers: {
    loading: (state, data) => {
      state.loading = data.payload;
    },
    LoggedInStatus: (state, data) => {
      state.isLoggedIn = data.payload;
    },
    logout: () => {},
  },
  extraReducers: {
    [getUserDetails.pending]: (state, action) => {
      state.loading = false;
    },
    [getUserDetails.fulfilled]: (state, action) => {
      state.loading = true;
      state.userDetails = action.payload.data;
    },
    [getUserDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
// Action creators are generated for each case reducer function
export const { loading,LoggedInStatus } = userStates.actions;

export default userStates.reducer;
