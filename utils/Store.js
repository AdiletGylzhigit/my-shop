import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: { cartItems: [], showCart: false },
};

function reducer(state, action) {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartitems.map(
            (item) => (item.name = existItem.name ? newItem : item)
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartITems } };
    }

    case "SHOW CART": {
      return {
        ...state,
        cart: { ...state.cart, showCart: !state.cart.showCart },
      };
    }
    default:
      return state;
  }
}
