import { testRender } from "./../../data/renderdata.";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: testRender,
    cart: {
      itemsInCart: 0,
      itemList: [],
    },
  },
  reducers: {
    addToTheCart: (state: { cart: any }, action: PayloadAction<object>) => {
      state.cart.itemsInCart = state.cart.itemsInCart + 1;
      state.cart.itemList.push(action.payload);
    },
    buyItemsFromTheCart: (state: { cart: any }) => {
      state.cart.itemList = [];
      state.cart.itemsInCart = 0;
    },
  },
});

export const { addToTheCart, buyItemsFromTheCart } = itemSlice.actions;
export default itemSlice.reducer;
