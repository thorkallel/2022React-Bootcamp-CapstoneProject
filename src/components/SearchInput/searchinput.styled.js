import styled from 'styled-components';

import { device } from '../../styles/mediaquery';

export const Wrapper = styled.div`
  height: 100%;
  padding: 5px;
  background-color: var(--clr-grey-9);
  .section-center {
    width: auto;
    margin: 0 auto;
    max-width: var(--max-width);
    height: 100%;
  }
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .search-form {
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 0;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media only screen and ${device.laptop} {
    .content {
      display: flex;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      height: 100%;
    }
    p {
      margin-bottom: 0;
    }
    .contact-form {
      width: 50vw;
      height: 80%;
    }
  }
`;

export default Wrapper;
