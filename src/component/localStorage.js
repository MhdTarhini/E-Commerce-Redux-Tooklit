import { createSlice } from "@reduxjs/toolkit";

export const storageSlice = createSlice({
  name: "storageSlice",
  initialState: JSON.parse(localStorage.getItem("item")),
  reducers: {
    addLocalProduct: (state, action) => {
      if (JSON.parse(localStorage.getItem("item"))) {
        state.push(action.payload);
        localStorage.setItem("item", JSON.stringify(state));
      } else {
        state = [];
        state.push(action.payload);
        localStorage.setItem("item", JSON.stringify(state));
      }
    },
  },
});

export const { addLocalProduct, getLocalProduct } = storageSlice.actions;
export default storageSlice.reducer;
