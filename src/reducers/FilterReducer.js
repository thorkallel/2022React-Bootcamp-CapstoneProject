/* eslint-disable camelcase */
import {
  CLEAR_FILTERS,
  FILTER_PARAMS,
  FILTER_PRODUCTS,
  GET_SINGLE_PRODUCT_SUCCESS,
  LOAD_PRODUCTS,
  PASS_ACTIVE_CATEGORY,
  SEARCH_FILTERS
} from '../actions';

const filterReducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const gridProducts = action.payload;
    /* Grid by 16 products */
    const filterGridProducts = gridProducts.slice(0, 16);
    const { param_active } = state;

    if (param_active === null) {
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        grid_products: filterGridProducts
      };
    }

    if (param_active != null) {
      // filtering
      const tempProducts = gridProducts.filter((product) =>
        param_active.includes(product.data.category.slug)
      );

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: tempProducts,
        grid_products: filterGridProducts
      };
    }
  }
  if (action.type === PASS_ACTIVE_CATEGORY) {
    const activecategoryIn = action.payload;
    const { activecategory } = state.filters;

    if (activecategory.indexOf(activecategoryIn) === -1) {
      return {
        ...state,
        filters: {
          ...state.filters,
          activecategory: [...activecategory, activecategoryIn]
        }
      };
    }
    if (activecategory.indexOf(activecategoryIn) > -1) {
      const newActivecat = activecategory.filter(
        (item) => item !== activecategoryIn
      );
      return {
        ...state,
        filters: { ...state.filters, activecategory: newActivecat }
      };
    }
  }
  if (action.type === FILTER_PRODUCTS) {
    const { activecategory } = state.filters;
    const { all_products } = state;
    // filtering
    const tempProducts = all_products.filter((product) =>
      activecategory.includes(product.data.category.id)
    );
    if (activecategory.length > 0) {
      return {
        ...state,
        /* Grid by 12 products */
        filtered_products: tempProducts
      };
    }
    if (activecategory.length === 0) {
      return {
        ...state,
        /* Grid by 12 products */
        filtered_products: all_products
      };
    }
  }
  if (action.type === FILTER_PARAMS) {
    const titleCategory = action.payload;
    return {
      ...state,
      param_active: titleCategory.toLowerCase()
    };
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    const singleProduct = action.payload;
    return {
      ...state,
      single_product: {
        name: singleProduct.results[0].data.name,
        images: singleProduct.results[0].data.images,
        price: singleProduct.results[0].data.price,
        sku: singleProduct.results[0].data.sku,
        description: singleProduct.results[0].data.description[0].text,
        category: singleProduct.results[0].data.category.slug,
        tags: singleProduct.results[0].data.category.tags,
        specs: singleProduct.results[0].data.specs,
        stock: singleProduct.results[0].data.stock,
        mainimage: singleProduct.results[0].data.mainimage.url,
        product: singleProduct.results[0]
      }
    };
  }
  if (action.type === SEARCH_FILTERS) {
    const { value } = action.payload;
    const { results } = value;

    return {
      ...state,
      /* Grid by 20 products */
      search_products: results.slice(0, 20)
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filtered_products: [...action.payload],
      filters: {
        activecategory: []
      }
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filterReducer;
