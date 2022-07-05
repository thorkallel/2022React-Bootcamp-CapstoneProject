import React from 'react';
import { NavLink } from 'react-router-dom';

import { useCartContext } from '../../providers/CartProvider';
import { formatPrice } from '../../utils/helpers';
import { Wrapper } from './carttotals.styled';

function CartTotals() {
  /*  CONTEXT DESTRUCTURING */
  const { totalAmount } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(totalAmount)}</span>
          </h5>
          <hr />
          <h4>
            order total : <span>{formatPrice(totalAmount)}</span>
          </h4>
        </article>
        <NavLink to="/checkout" className="btn">
          proceed to checkout
        </NavLink>
      </div>
    </Wrapper>
  );
}

export default CartTotals;
