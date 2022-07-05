import React, { useContext, useEffect, useReducer } from 'react';

import {
  GET_BANNERS_BEGIN,
  GET_BANNERS_ERROR,
  GET_BANNERS_SUCCESS
} from '../actions';
import reducer from '../reducers/BannersReducer';
import { useApiRequest } from '../utils/hooks/useApiRequest';

const initialState = {
  banners_loading: false,
  banners_error: false,
  banners: [],
  featured_banners: []
};

const BannersContext = React.createContext();

// eslint-disable-next-line react/prop-types
export function BannersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading } = useApiRequest({
    typeData: 'banner',
    size: 5
  });

  const fetchBanners = async () => {
    dispatch({ type: GET_BANNERS_BEGIN });
    try {
      const response = data;
      const banners = response.results;
      dispatch({ type: GET_BANNERS_SUCCESS, payload: banners });
    } catch (error) {
      dispatch({ type: GET_BANNERS_ERROR });
    }
  };

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      // update state here...
      if (!isLoading) {
        fetchBanners();
      }
    }

    return () => {
      unmounted = true;
    };
  }, [isLoading]);

  return (
    <BannersContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...state
      }}
    >
      {children}
    </BannersContext.Provider>
  );
}
// make sure use
export const useBannersContext = () => useContext(BannersContext);
