import styled from 'styled-components';

import { device } from '../../styles/mediaquery';

export const Wrapper = styled.aside`
  width: 100%;
  padding: 0 10px 10px;

  ul {
    border-radius: var(--radius);

    li {
      padding: 1.5rem 0 1rem 0.5rem;
      border-bottom: solid var(--clr-grey-8);
      transition: var(--transition);

      &.active {
        border-bottom: solid var(--clr-grey-2);
      }
    }
    li a {
      font-weight: bold;
      color: var(--clr-grey-2);
      cursor: pointer;
      transition: var(--transition);
      opacity: 1;

      &.active {
        opacity: 1;
      }

      &:hover {
        color: var(--clr-primary-4);
      }
    }
  }

  @media only screen and ${device.laptop} {
    width: 20%;
    padding: 0;
  }
`;

export default Wrapper;
