import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { useCartContext } from '../../providers/CartProvider';
import { formatPrice } from '../../utils/helpers';
import { Wrapper } from './cartbuttons.styled';

function CartButtons() {
  /*  CONTEXT DESTRUCTURING */
  const { totalItems, totalAmount } = useCartContext();

  return (
    <Wrapper className="cart-btn-wrapper">
      <NavLink to="/cart">
        <div className="cart-btn">
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">{totalItems}</span>
          </span>
        </div>
      </NavLink>
      <NavLink to="/cart" className="text-btn">
        <div className="auth-btn">
          <span>Total: {formatPrice(totalAmount)}</span>
        </div>
      </NavLink>
    </Wrapper>
  );
}

export default CartButtons;
