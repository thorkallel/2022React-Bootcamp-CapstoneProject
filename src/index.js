import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BannersProvider } from './providers/BannersProvider';
import { CartProvider } from './providers/CartProvider';
import { CategoriesProvider } from './providers/CategoriesProvider';
import { FilterProvider } from './providers/FilterProvider';
import { ProductsProvider } from './providers/ProductsProvider';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BannersProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </BannersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
