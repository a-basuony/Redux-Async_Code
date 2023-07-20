import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./uiSlice";
import cartSlicerReducer from "./cartSlice";

const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSlicerReducer },
});

export default store;
