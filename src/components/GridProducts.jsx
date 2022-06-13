import featuredProducts from '../utils/mocks/featured-products.json';
import { Wrapper } from './grid.styled';
import { Product } from './';

const GridProducts = () => {

	/* RESULTS DESTRUCTURING */
	const { results } = featuredProducts;

	/* PRODUCTS MAPPING */
	const gridProducts = results.map((product, index) => (
		<Product product={ product } key={ product.id } />
	));

	return (
		<>
			<Wrapper>
				{ gridProducts }
			</Wrapper>
		</>
	 );
}

export default GridProducts;