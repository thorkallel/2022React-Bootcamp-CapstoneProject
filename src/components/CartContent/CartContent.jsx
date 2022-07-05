import React from 'react';
import { NavLink } from 'react-router-dom';

import { useCartContext } from '../../providers/CartProvider';
// eslint-disable-next-line import/no-cycle
import { CartColumns, CartItem, CartTotals } from '..';
import { Wrapper } from './cartcontent.styled';

function CartContent() {
  /*  CONTEXT DESTRUCTURING */
  const { cart, clearCart } = useCartContext();

  /* eslint-disable react/jsx-props-no-spreading */
  const CartItems = cart.map((item) => <CartItem key={item.id} {...item} />);

  return (
    <Wrapper className="section section-center">
      {cart.length < 1 ? (
        <div className="empty page-100">
          <h2>your cart is empty</h2>
          <NavLink to="/" className="btn">
            continue shopping
          </NavLink>
        </div>
      ) : (
        <>
          <CartColumns />
          {CartItems}
          <hr />
          <div className="link-container">
            <NavLink to="/" className="link-btn clear-btn">
              continue shopping
            </NavLink>
            <button
              type="button"
              className="link-btn clear-btn"
              onClick={clearCart}
            >
              clear shopping cart
            </button>
          </div>
          <CartTotals />
        </>
      )}
    </Wrapper>
  );
}

export default CartContent;
