import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT
} from '../actions';

// eslint-disable-next-line camelcase
const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, sku, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + sku);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + sku) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        }
        return cartItem;
      });

      return { ...state, cart: tempCart };
    }
    const newItem = {
      id: id + sku,
      amount,
      name: product.data.name,
      sku: product.data.sku,
      image: product.data.mainimage.url,
      price: product.data.price,
      max: product.data.stock
    };
    return { ...state, cart: [...state.cart, newItem] };
  }
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'inc') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === 'dec') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      }
      return item;
    });

    return { ...state, cart: tempCart };
  }
  if (action.type === COUNT_CART_TOTALS) {
    const { totalItems, totalAmount } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        /* eslint-disable no-param-reassign */
        total.totalItems += amount;
        total.totalAmount += price * amount;
        return total;
      },
      {
        totalItems: 0,
        totalAmount: 0
      }
    );
    return { ...state, totalItems, totalAmount };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cartReducer;
