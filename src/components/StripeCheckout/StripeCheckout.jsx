import { NavLink } from 'react-router-dom';

import { useCartContext } from '../../providers/CartProvider';
import { formatPrice } from '../../utils/helpers';
// eslint-disable-next-line import/no-cycle
import { CheckoutColumns, CheckoutItem } from '..';
import { Wrapper } from './stripecheckout.styled';

function CheckoutForm() {
  const { cart, totalAmount } = useCartContext();

  const handleSubmit = () => {};

  const itemsCheckout = cart.map((item) => (
    /* eslint-disable react/jsx-props-no-spreading */
    <CheckoutItem key={item.id} {...item} />
  ));

  return (
    <>
      <article>
        <CheckoutColumns />
        {itemsCheckout}
        <p>Your total is {formatPrice(totalAmount)}</p>
      </article>
      <hr />
      <div className="link-container">
        <NavLink to="/cart" className="link-btn clear-btn">
          Return to Cart
        </NavLink>
      </div>
      <form id="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="enter your name"
          name="_name"
        />
        <input
          type="number"
          className="form-input"
          placeholder="enter your post/zip"
          name="_postzip"
        />
        <input
          type="email"
          className="form-input"
          placeholder="enter email"
          name="_email"
        />
        <textarea
          className="form-input"
          placeholder="enter a message"
          name="_message"
        />
        <button id="submit" type="button">
          <span id="button-text">Pay</span>
        </button>
      </form>
    </>
  );
}

function StripeCheckout() {
  return (
    <Wrapper className="section section-center">
      <CheckoutForm />
    </Wrapper>
  );
}

export default StripeCheckout;
