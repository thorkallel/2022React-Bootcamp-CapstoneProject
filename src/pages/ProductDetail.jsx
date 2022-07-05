import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PageTitle, SingleProduct } from '../components';
import { useFilterContext } from '../providers/FilterProvider';
import { useApiRequest } from '../utils/hooks/useApiRequest';

function ProductDetail() {
  /*  CONTEXT DESTRUCTURING */
  const { filterSingleProduct } = useFilterContext();

  // GET PARAMS OF THE ROUTER
  const { id } = useParams();

  const { data, isLoading } = useApiRequest({
    typeData: 'single',
    size: 1,
    product: id
  });

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      // update state here...
      if (!isLoading) {
        filterSingleProduct(data);
      }
    }
    return () => {
      unmounted = true;
    };
  }, [isLoading]);

  return (
    <>
      <PageTitle title="Product Detail" />
      <SingleProduct />
    </>
  );
}

export default ProductDetail;
