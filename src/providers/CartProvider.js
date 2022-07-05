import React, { useContext, useEffect, useReducer } from 'react';

import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT
} from '../actions';
import reducer from '../reducers/CartReducer';

// eslint-disable-next-line no-unused-vars
const getLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  }
  return [];
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0
};

const CartContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart
  const addToCart = (id, sku, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, sku, amount, product } });
  };
  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  // toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };
  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
// make sure use
export const useCartContext = () => useContext(CartContext);