import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async function () {
    const res = await fetch("https://fakestoreapi.com/products"); // fetch products from fakeStore API
    const data = await res.json();
    return data;
  }
);
// create a slice for reducer
const productsSlice = createSlice({
  initialState: [], // define initialState is a empty list
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    // if this builder is fulfilled it will return the action
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
console.log(productsSlice);

export const {} = productsSlice.actions;
export default productsSlice.reducer;
