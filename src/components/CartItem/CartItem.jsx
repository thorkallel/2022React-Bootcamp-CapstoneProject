import PropTypes from 'prop-types';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { useCartContext } from '../../providers/CartProvider';
import { formatPrice } from '../../utils/helpers';
// eslint-disable-next-line import/no-cycle
import { AmountButtons } from '..';
import { Wrapper } from './cartitem.styled';

function CartItem({ id, image, name, price, amount }) {
  /*  CONTEXT DESTRUCTURING */
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default CartItem;
