import React, { useEffect, useState } from 'react';

import { useFilterContext } from '../../providers/FilterProvider';
// eslint-disable-next-line import/no-cycle
import { Pagination, Product } from '..';
import { Wrapper } from './insideproducts.styled';

function InsideProducts() {
  /*  CONTEXT DESTRUCTURING */
  const { filtered_products: featured } = useFilterContext();

  /* PAGINATION */
  const [posts, setPosts] = useState(featured);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  // get current post
  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setPosts(featured);
  }, [featured]);

  /* PRODUCTS MAPPING */
  const gridProducts = currentPosts.map((product) => (
    <Product
      product={product}
      idproduct={product.id}
      key={product.id}
      currentPage={currentPage}
    />
  ));
  return (
    <>
      <Wrapper>{gridProducts}</Wrapper>
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

export default InsideProducts;
