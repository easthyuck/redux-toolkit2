import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state) {},
    deleteItem(state) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
