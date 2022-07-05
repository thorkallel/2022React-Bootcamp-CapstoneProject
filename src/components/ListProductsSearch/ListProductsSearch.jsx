import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useFilterContext } from '../../providers/FilterProvider';
import { formatPrice } from '../../utils/helpers';
// eslint-disable-next-line import/no-cycle
import { Pagination } from '..';
import { Wrapper } from './listproductssearch.styled';

function ListProductsSearch() {
  /*  CONTEXT DESTRUCTURING */
  const { search_products: featured } = useFilterContext();

  /* PAGINATION */
  const [posts, setPosts] = useState(featured);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  // get current post
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setPosts(featured);
  }, [featured]);

  if (featured.length < 1) {
    return (
      <Wrapper>
        <div className="empty page-100">
          <h2>Sorry, no products matched your search...</h2>
          <NavLink to="/" className="btn">
            continue shopping
          </NavLink>
        </div>
      </Wrapper>
    );
  }

  const gridProducts = currentPosts.map((product) => (
    <article key={product.id}>
      <img src={product.data.mainimage.url} alt={product.data.name} />
      <div>
        <h4>{product.data.name}</h4>
        <h5 className="price">{formatPrice(product.data.price)}</h5>
        <p>{product.data.short_description}...</p>
        <NavLink to={`/product/${product.id}`} className="btn">
          Details
        </NavLink>
      </div>
    </article>
  ));

  return (
    <>
      <Wrapper>
        <div className="section section-center page">
          <div className="product-center">{gridProducts}</div>
        </div>
      </Wrapper>
      {posts.length > postsPerPage ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}
    </>
  );
}

export default ListProductsSearch;
