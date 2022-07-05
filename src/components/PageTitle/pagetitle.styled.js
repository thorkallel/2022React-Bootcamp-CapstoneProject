import styled from 'styled-components';

export const Wrapper = styled.section`
  background: var(--clr-grey-2);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-grey-10);
  a {
    color: var(--clr-grey-10);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-grey-10);
  }
`;

export default Wrapper;
