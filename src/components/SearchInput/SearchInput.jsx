import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useFilterContext } from '../../providers/FilterProvider';
import { Wrapper } from './searchinput.styled';

function SearchInput() {
  /*  CONTEXT DESTRUCTURING */
  const { clearFilters } = useFilterContext();

  const [wordSearch, setWordSearch] = useState('Search');

  const updateState = (e) => {
    const textSearch = e.target.value;

    setWordSearch(textSearch);
  };

  // GET PARAMS OF THE ROUTER
  const history = useNavigate();

  // Search dispatch
  const onSubmitSearch = (e) => {
    e.preventDefault();
    clearFilters();
    history(`/search/${wordSearch}`);
  };

  return (
    <Wrapper>
      <div className="section-center">
        <div className="content">
          <form className="search-form" value="id" onSubmit={onSubmitSearch}>
            <input
              type="text"
              className="form-input"
              placeholder="Search"
              name="search"
              onChange={updateState}
            />
            <button type="submit" className="submit-btn">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchInput;
