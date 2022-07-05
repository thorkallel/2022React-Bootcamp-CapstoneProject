import { useFilterContext } from '../../providers/FilterProvider';
// eslint-disable-next-line import/no-cycle
import { Product } from '..';
import { Wrapper } from './gridproducts.styled';

function GridProducts() {
  /*  CONTEXT DESTRUCTURING */
  const { grid_products: featured } = useFilterContext();

  /* PRODUCTS MAPPING */
  const gridProducts = featured.map((product) => (
    <Product product={product} key={product.id} />
  ));

  return <Wrapper>{gridProducts}</Wrapper>;
}

export default GridProducts;
