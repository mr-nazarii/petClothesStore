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
  },
});

export const { addToTheCart } = itemSlice.actions;
export default itemSlice.reducer;
