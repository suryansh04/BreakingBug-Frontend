import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

const store = configureStore({
  // ** Fixed the error here change =  to :
  reducer: {
    user: userReducer,
  },
});

export default store;
