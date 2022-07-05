/* eslint-disable camelcase */
import {
  GET_CATEGORIES_BEGIN,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS
} from '../actions';

const categoriesReducer = (state, action) => {
  if (action.type === GET_CATEGORIES_BEGIN) {
    return { ...state, categories_loading: true };
  }
  if (action.type === GET_CATEGORIES_SUCCESS) {
    const featured_categories = action.payload;
    return {
      ...state,
      categories_loading: false,
      categories: action.payload,
      featured_categories
    };
  }
  if (action.type === GET_CATEGORIES_ERROR) {
    return { ...state, categories_loading: false, categories_error: true };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default categoriesReducer;
