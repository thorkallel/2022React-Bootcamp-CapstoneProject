import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useFilterContext } from '../../providers/FilterProvider';
// eslint-disable-next-line import/no-cycle
import { CartButtons } from '..';
import { Wrapper } from './header.styled';

function Header() {
  /*  CONTEXT DESTRUCTURING */
  const { clearFilters } = useFilterContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink
            to="/"
            onClick={() => {
              clearFilters();
            }}
          >
            <img src={logo} alt="Company Brand" />
          </NavLink>
        </div>
        <CartButtons />
      </div>
    </Wrapper>
  );
}

export default Header;
