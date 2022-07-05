import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 0 auto;
  border: solid 1px var(--clr-grey-6);
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  h2 {
    margin-bottom: 0;
    font-size: 1rem;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Wrapper;
