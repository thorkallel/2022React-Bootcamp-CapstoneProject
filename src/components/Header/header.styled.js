import styled from 'styled-components';

import { device } from '../../styles/mediaquery';

export const Wrapper = styled.header`
  height: auto;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);

  .nav-center {
    display: flex;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 120px;
    }
  }
  .nav-links {
    display: none;
  }
  @media only screen and ${device.laptop} {
    .nav-header {
      a {
        cursor: pointer;
      }
      img {
        width: 175px;
      }
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`;

export default Wrapper;
