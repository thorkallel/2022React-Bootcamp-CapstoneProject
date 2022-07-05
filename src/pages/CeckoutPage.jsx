import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { PageTitle, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../providers/CartProvider';

function CheckoutPage() {
  const { cart } = useCartContext();
  return (
    <main>
      <PageTitle title="Checkout Page" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty page-100">
            <h2>your cart is empty</h2>
            <NavLink to="/" className="btn">
              continue shopping
            </NavLink>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
