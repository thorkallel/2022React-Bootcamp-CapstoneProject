import { BrowserRouter, Route, Routes } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { Footer, Header, SearchInput } from '../components';
import {
  CartPage,
  CheckoutPage,
  Home,
  ProductDetail,
  ProductListPage,
  SearchPage
} from '../pages';

function Navigation() {
  return (
    <BrowserRouter>
      <SearchInput />
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products/:id" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search/:searchword" element={<SearchPage />} />
        <Route path="/search/" element={<SearchPage />} />
        <Route path="/cart/" element={<CartPage />} />
        <Route path="/checkout/" element={<CheckoutPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;
