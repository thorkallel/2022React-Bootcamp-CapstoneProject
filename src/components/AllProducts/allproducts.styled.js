import styled from 'styled-components';

import { device } from '../../styles/mediaquery';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);

  .products {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px 10px;
  }

  @media only screen and ${device.laptop} {
    flex-direction: row;
    .products {
      width: calc(80% - 20px);
      margin: 20px 0 0 20px;
      padding: 0 0 10px;
    }
  }
`;

export default Wrapper;
