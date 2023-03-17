import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: { cartItems: [], shippingAddress: {}, showCart: false, drop: false },
};

export const ReducerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    },
    cartRemoveItem: (state, action) => {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    },
    cartToggle: (state, action) => {
      state.cart.showCart = !state.cart.showCart;
    },
    dropToggle: (state, action) => {
      state.cart.drop = !state.cart.drop;
    },
    saveShippingAddress: (state, action) => {
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };
    },
    cartClearItems: (state, action) => {
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    },
  },
});

export const { cartAddItem, cartRemoveItem, cartToggle, dropToggle, saveShippingAddress, cartClearItems } =
  ReducerSlice.actions;

export default ReducerSlice.reducer;
