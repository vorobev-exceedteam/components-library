import { keyframes } from 'styled-components';

export const infiniteLoopAnimation = keyframes`
  from {
    transform: translateX(-130%);
  }
  to {
    transform: translateX(430%);
  }
`;

export const strippedAnimation = keyframes`
  0% {
    background-position: .857rem 0;
  }
  to {
    background-position: 0 0;
  }
`;
