import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );
      state.changed = true;

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          cpu: newItem.cpu,
          gpu: newItem.gpu,
          price: newItem.price,
          quantity: newItem.quantity,
        });
      }
      state.totalPrice = state.totalPrice + newItem.price;
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingCartItem = state.items.find((item) => item.id === id);
      state.changed = true;

      if (existingCartItem === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingCartItem.quantity--;
      }
      state.totalPrice = state.totalPrice - existingCartItem.price;
      state.totalQuantity--;
    },
    removeAllItemFromCart(state, action) {
      const id = action.payload;
      const existingCartItem = state.items.find((item) => item.id === id);
      state.changed = true;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalPrice =
        state.totalPrice - existingCartItem.price * existingCartItem.quantity;
      state.totalQuantity -= existingCartItem.quantity;
    },
    clearItemFromCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
