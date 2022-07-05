import PropTypes from 'prop-types';
import React from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs';

import { Wrapper } from './pagination.styled';

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  // eslint no-plusplus: "error"
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const numberPages = pageNumbers.map((number) => (
    <li key={number}>
      <a
        href="#/"
        className={number === currentPage ? 'active' : null}
        onClick={() => paginate(number)}
      >
        <span>{number}</span>
      </a>
    </li>
  ));

  return (
    <Wrapper>
      {currentPage !== 1 ? (
        <a href="#/" className="prev" onClick={() => paginate(currentPage - 1)}>
          <BsFillArrowLeftCircleFill />
        </a>
      ) : null}
      <ul>{numberPages}</ul>
      {currentPage !== pageNumbers.length ? (
        <a href="#/" className="next" onClick={() => paginate(currentPage + 1)}>
          <BsFillArrowRightCircleFill />
        </a>
      ) : null}
    </Wrapper>
  );
}

Pagination.propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
