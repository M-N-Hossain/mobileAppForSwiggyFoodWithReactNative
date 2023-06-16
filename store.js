import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartReducer";

export default configureStore({
  reducer: {
    cartInfo: cartReducer,
  },
});
