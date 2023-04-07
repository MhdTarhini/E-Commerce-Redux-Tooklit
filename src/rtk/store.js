import { configureStore } from "@reduxjs/toolkit";
import storageSlice from "../component/localStorage";
import cartSlice from "./cart-slice";
import productsSlice from "./slices/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    local: storageSlice,
  },
});
