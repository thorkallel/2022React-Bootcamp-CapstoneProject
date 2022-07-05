import React from 'react';

import { Wrapper } from './checkoutcoulmns.styled';

function CheckoutColumns() {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span />
      </div>
      <hr />
    </Wrapper>
  );
}

export default CheckoutColumns;
