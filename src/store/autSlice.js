// // // 1of3 - יצירת סליס

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loggedIn: false,
//   userData: undefined,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     //collection of functions to setState
//     login(state, action) {
//       state.loggedIn = true;
//       // console.log("action", action);
//       state.userData = action.payload;
//       console.log("payload", action.payload);
//     },
//     logout(state) {
//       state.loggedIn = false;
//     },
//   },
// });

// //export the set functions for the components to make use of the actions
// export const authActions = authSlice.actions;

// //in reducer we have all the necessary data to connect with the big pie
// export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userData: null,
  //   userData: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //collection of functions to setState
    login(state, action) {
      state.loggedIn = true;
      // console.log("action", action);
      state.userData = action.payload;
      console.log("payload", action.payload);
    },
    logout(state) {
      state.loggedIn = false;
      state.userData = null;
      // state.userData = undefined;
    },
  },
});

//export the set functions for the components to make use of the actions
export const authActions = authSlice.actions;
export const { login, logout } = authSlice.actions;
//in reducer we have all the necessary data to connect with the big pie
export default authSlice.reducer;
