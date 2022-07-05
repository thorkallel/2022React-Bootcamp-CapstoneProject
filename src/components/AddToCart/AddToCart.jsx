import PropTypes, { string } from 'prop-types';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useCartContext } from '../../providers/CartProvider';
import AmountButtons from '../AmountButtons/AmountButtons';
import { Wrapper } from './addtocart.styled';

function AddToCart({ product }) {
  const { addToCart } = useCartContext();

  const [amount, setAmount] = useState(1);

  /* PRODUCT DESTRUCTURING */
  const {
    data: { stock, sku },
    id
  } = product;

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <NavLink
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, sku, amount, product)}
        >
          add to cart
        </NavLink>
      </div>
    </Wrapper>
  );
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    alternate_languages: PropTypes.oneOfType([PropTypes.array]).isRequired,
    data: PropTypes.oneOfType([PropTypes.object]).isRequired,
    first_publication_date: PropTypes.string,
    href: PropTypes.string,
    id: PropTypes.string,
    lang: PropTypes.string,
    last_publication_date: PropTypes.string,
    linked_documents: PropTypes.arrayOf(string),
    slugs: PropTypes.arrayOf(string),
    tags: PropTypes.arrayOf(string),
    type: PropTypes.string,
    uid: PropTypes.string,
    URL: PropTypes.string
  }).isRequired
};

export default AddToCart;
