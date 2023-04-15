import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      //find products then if the quantity is add to the product object it only add 1 , or if is not it will define quantity then push
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("item", JSON.stringify(state)); // update local storage
    },
    deleteFromCart: (state, action) => {
      localStorage.setItem(
        "item",
        JSON.stringify(
          state.filter((product) => product.id !== action.payload.id)
        ) // delete specific item from the cart
      );
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      // clear cart
      state = [];
      localStorage.setItem("item", JSON.stringify(state));
      return [];
    },
  },
});
export const { addToCart, deleteFromCart, clearCart, getProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
