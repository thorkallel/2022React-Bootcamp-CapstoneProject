import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useFilterContext } from '../../providers/FilterProvider';
import { formatPrice } from '../../utils/helpers';
// eslint-disable-next-line import/no-cycle
import { AddToCart, Loader, ProductImages } from '..';
import { Wrapper } from './singleproduct.styled';

function SingleProduct() {
  /*  CONTEXT DESTRUCTURING */
  const { single_product: featured } = useFilterContext();

  /* STATE OF LOADER */
  const [loader, setLoader] = useState(true);

  const {
    name,
    price,
    description,
    stock,
    sku,
    images,
    category,
    specs,
    product
  } = featured;

  /* USE EFFECT HOOK TO LOAD */
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      // update state here..
      if (featured) {
        setLoader(false);
      }
    }

    return () => {
      unmounted = true;
    };
  }, [featured]);

  return (
    <Wrapper>
      {loader ? (
        <Loader />
      ) : (
        <div className="section section-center page">
          <div className=" product-center">
            <ProductImages images={images} />
            <section className="content">
              <h2>{name}</h2>
              <h5 className="price"> {formatPrice(price)}</h5>
              <p className="desc"> {description}</p>
              <p className="info">
                <span>Available : </span>
                {stock} / {stock > 0 ? 'In stock' : 'out of stock'}
              </p>
              <p className="info">
                <span>SKU : </span>
                {sku}
              </p>
              <p className="info">
                <span>Category : </span>
                {category}
              </p>

              <div className="tableSpec">
                <p className="info">
                  <h4>Specs : </h4>
                </p>
                {specs.map((spec) => (
                  <div className="specs">
                    <p>
                      <strong>{spec.spec_name}</strong>
                    </p>
                    <p>{spec.spec_value}</p>
                    <hr />
                  </div>
                ))}
              </div>

              {/* If product is avaibale */}

              {stock > 0 && <AddToCart product={product} />}
            </section>
          </div>
          <NavLink to="/" className="btn">
            back to products
          </NavLink>
        </div>
      )}
    </Wrapper>
  );
}

export default SingleProduct;
