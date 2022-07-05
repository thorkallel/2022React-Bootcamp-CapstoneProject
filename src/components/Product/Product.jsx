import PropTypes, { string } from 'prop-types';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useFilterContext } from '../../providers/FilterProvider';
import { formatPrice } from '../../utils/helpers';
// eslint-disable-next-line import/no-cycle
import { AddToCart, Loader } from '..';
import { Wrapper } from './products.styled';

function Product({ product }) {
  /*  CONTEXT DESTRUCTURING */
  const {
    filters: { activecategory }
  } = useFilterContext();

  /* STATE OF LOADER */
  const [loader, setLoader] = useState(true);

  /* STATE OF CURRENT CLASS */
  const [currentClass] = useState(null);

  /* PRODUCT DESTRUCTURING */
  const {
    data: {
      category: { slug },
      mainimage: {
        url,
        alt,
        dimensions: { width, height }
      },
      name,
      price,
      stock
    }
  } = product;

  /* USE EFFECT HOOK TO LOAD */
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }

    return () => {
      unmounted = true;
    };
  }, [activecategory]);

  /* PRODUCT COMPONENT */
  return (
    <Wrapper className={currentClass}>
      {loader ? (
        <div className="container">
          <Loader />
        </div>
      ) : (
        <>
          <div className="container">
            <img src={url} alt={alt} width={width} height={height} />
          </div>
          <div className="details">
            <h5>{name}</h5>
          </div>
          <div className="details">
            <p>{slug}</p>
          </div>
          <div className="counter">{formatPrice(price)}</div>
          {stock > 0 && <AddToCart product={product} />}
          <NavLink to={`/product/${product.id}`} className="btn">
            details
          </NavLink>
        </>
      )}
    </Wrapper>
  );
}

Product.propTypes = {
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

export default Product;
