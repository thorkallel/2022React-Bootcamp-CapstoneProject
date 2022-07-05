import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    column-gap: 1rem;
    h5 {
      color: var(--clr-grey-5);
      font-weight: 400;
    }
  }

  span {
    width: 2rem;
    height: 2rem;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  h5 {
    font-size: 1rem;
  }
`;

export default Wrapper;
