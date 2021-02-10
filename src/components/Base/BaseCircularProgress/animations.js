import { keyframes } from 'styled-components';

export const spinner = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const growingSpinner = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none
  }
`
