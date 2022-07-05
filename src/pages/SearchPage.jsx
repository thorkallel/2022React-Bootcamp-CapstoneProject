import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ListProductsSearch, PageTitle } from '../components';
import { useFilterContext } from '../providers/FilterProvider';
import { useApiRequest } from '../utils/hooks/useApiRequest';

function SearchPage() {
  /*  CONTEXT DESTRUCTURING */
  const { filterSearch } = useFilterContext();

  // GET PARAMS OF THE ROUTER
  const { searchword } = useParams();

  const { data, isLoading } = useApiRequest({
    typeData: 'search',
    size: 20,
    search: searchword
  });

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      // update state here...
      if (!isLoading) {
        console.log(data);
        filterSearch(data, searchword);
      }
    }
    return () => {
      unmounted = true;
    };
  }, [isLoading]);

  return (
    <>
      <PageTitle title="Page Search" />
      <ListProductsSearch />
    </>
  );
}

export default SearchPage;
