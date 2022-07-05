// eslint-disable-next-line import/no-cycle
import { Aside, InsideProducts } from '..';
import { Wrapper } from './allproducts.styled';

function AllProducts() {
  return (
    <Wrapper className="inside">
      <Aside />
      <section className="products">
        <InsideProducts />
      </section>
    </Wrapper>
  );
}

export default AllProducts;
