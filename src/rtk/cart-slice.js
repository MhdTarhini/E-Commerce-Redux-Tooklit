import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("item")),
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("item", JSON.stringify(state));
    },
    deleteFromCart: (state, action) => {
      localStorage.setItem(
        "item",
        JSON.stringify(
          state.filter((product) => product.id !== action.payload.id)
        )
      );
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      state = [];
      localStorage.setItem("item", JSON.stringify(state));
      return [];
    },
  },
});
export const { addToCart, deleteFromCart, clearCart, getProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
