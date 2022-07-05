import React, { useContext, useEffect, useReducer } from 'react';

import {
  CLEAR_FILTERS,
  FILTER_PARAMS,
  FILTER_PRODUCTS,
  GET_SINGLE_PRODUCT_SUCCESS,
  LOAD_PRODUCTS,
  PASS_ACTIVE_CATEGORY,
  SEARCH_FILTERS
} from '../actions';
import reducer from '../reducers/FilterReducer';
import { useProductsContext } from './ProductsProvider';

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_products: [],
  param_active: null,
  search_products: [],
  single_product: {
    name: null,
    images: [],
    price: null,
    sku: null,
    description: null,
    category: null,
    tags: [],
    specs: [],
    stock: null,
    mainimage: null,
    product: []
  },
  filters: {
    activecategory: []
  }
};

const FilterContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function FilterProvider({ children }) {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const categoryActive = (category) => {
    const value = category;
    dispatch({ type: PASS_ACTIVE_CATEGORY, payload: value });
  };

  const filterProducts = () => {
    dispatch({ type: FILTER_PRODUCTS });
  };

  const filterParams = (title) => {
    const value = title;
    dispatch({ type: FILTER_PARAMS, payload: value });
  };

  const filterSingleProduct = (data) => {
    const value = data;
    dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: value });
  };

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS, payload: products });
  };

  const filterSearch = (data, word) => {
    const value = data;
    const wordkey = word;
    dispatch({ type: SEARCH_FILTERS, payload: { value, wordkey } });
  };

  return (
    <FilterContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...state,
        categoryActive,
        clearFilters,
        filterProducts,
        filterParams,
        filterSingleProduct,
        filterSearch
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
// make sure use
export const useFilterContext = () => useContext(FilterContext);