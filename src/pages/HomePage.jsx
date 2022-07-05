import { NavLink } from 'react-router-dom';

import { Banners, GridProducts, Slider } from '../components';

function Home() {
  return (
    <section>
      <Slider />
      <hr />
      <Banners />
      <hr />
      <GridProducts />
      <hr />
      <NavLink to="/products/all" className="btn btn-page">
        View all products
      </NavLink>
    </section>
  );
}

export default Home;
