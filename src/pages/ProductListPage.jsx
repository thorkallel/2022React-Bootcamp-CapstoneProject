import React from 'react';

import { AllProducts, PageTitle } from '../components';

function ProductListPage() {
  return (
    <>
      <PageTitle title="This Is The Product List Page" />
      <AllProducts />
    </>
  );
}

export default ProductListPage;
