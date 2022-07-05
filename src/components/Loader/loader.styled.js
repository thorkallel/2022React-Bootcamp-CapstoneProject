import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-white);
  height: 200px;
  width: 100%;
  .half-circle-spinner,
  .half-circle-spinner * {
    box-sizing: border-box;
  }

  .half-circle-spinner {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
    opacity: 0.5;
    margin: 0 auto;
  }

  .half-circle-spinner .circle {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
  }

  .half-circle-spinner .circle.circle-1 {
    border-top-color: var(--clr-primary-6);
    animation: half-circle-spinner-animation 1s infinite;
  }

  .half-circle-spinner .circle.circle-2 {
    border-bottom-color: var(--clr-primary-6);
    animation: half-circle-spinner-animation 1s infinite alternate;
  }

  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
