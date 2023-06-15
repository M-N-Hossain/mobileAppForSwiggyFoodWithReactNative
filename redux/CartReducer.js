import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
  removeFromCart: (state, action) => {
    const removedItemCart = state.cart.filter(
      (item) => item.id !== action.payload.id
    );
    state.cart = removedItemCart;
  },
  increamentQuatity: (state, action) => {
    const itemPresent = state.cart.find(
      (item) => item.id === action.payload.id
    );
    itemPresent.quantity++;
  },
  decreaseQuantity: (state, action) => {
    const itemPresent = state.cart.find(
      (item) => item.id === action.payload.id
    );

    if (itemPresent === 1) {
      const removedItemCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removedItemCart;
    } else {
      itemPresent.quantity--;
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  increamentQuatity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
