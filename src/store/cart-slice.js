import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingCartItem = state.items.find(
        (item) => item.id === newItem.id
      );

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

      state.items = state.items.filter((item) => item.id !== id);
      state.totalPrice =
        state.totalPrice - existingCartItem.price * existingCartItem.quantity;
      state.totalQuantity -= existingCartItem.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
