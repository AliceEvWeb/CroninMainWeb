// // 2of3 - קישור סלייסים לרידאקס

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./autSlice";
// // import cardsSlice from "./cardSlice";
// // import cardSlice from "./cardSlice";
// import profileSlice from "./profileSlice";
// // import cartSlice from "./cartSlice";
// import userSlice from "./userSlice";
// import registerSlice from "./registerSlice";
// import templateSlice from "./templateSlice";

const store = configureStore({
  reducer: {
    authSlice,
    //  register: registerSlice,
    //  cards: cardsSlice,
    //  card: cardSlice,
    //  profile: profileSlice,
    //  cart: cartSlice,
    //  user: userSlice,
    //  tamplate: templateSlice,
  },
});

export default store;
