import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--clr-grey-10);
  max-width: var(--max-width);
  grid-template-columns: repeat(4, minmax(25vw, auto));
  gap: 0;
  border-radius: var(--radius);
  transition: var(--transition);
  box-shadow: var(--dark-shadow);

  .container {
    position: relative;
    border-radius: var(--radius);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    height: 200px;
    display: block;
    object-fit: none;
    transition: var(--transition);
  }

  .container:hover img {
    opacity: 0.5;
    object-fit: cover;
  }

  .details {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    text-transform: capitalize;
  }

  .counter {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem auto;
    padding: 0.5rem;
  }

  .details h5,
  .details p {
    margin-bottom: 0;
    font-weight: 400;
  }
  .details p,
  .counter p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    font-weight: bold;
  }
  .counter p {
    color: var(--clr-black);
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;

export default Wrapper;
