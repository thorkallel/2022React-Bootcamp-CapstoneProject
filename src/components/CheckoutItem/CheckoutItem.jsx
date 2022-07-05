import PropTypes from 'prop-types';
import React from 'react';

import { formatPrice } from '../../utils/helpers';
import { Wrapper } from './checkoutitems.styled';

function CheckoutItem({ name, price, amount }) {
  return (
    <Wrapper>
      <h5 className="name">{name}</h5>
      <h5 className="price">{formatPrice(price)}</h5>
      <h5 className="amount-btns">{amount}</h5>
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
    </Wrapper>
  );
}

CheckoutItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default CheckoutItem;
