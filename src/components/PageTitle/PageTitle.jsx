import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Wrapper } from './pagetitle.styled';

function PageTitle({ title }) {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <NavLink to="/">Home</NavLink>/ {title}
        </h3>
      </div>
    </Wrapper>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
