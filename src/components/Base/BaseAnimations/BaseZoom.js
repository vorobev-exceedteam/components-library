import styled, { css } from 'styled-components';
import AnimationContainer from './AnimationContainer';

const zoomedOut = css`
  transform: scale(0);
`

const zoomedIn = css`
  transform: scale(1);
`


const BaseZoom = styled(AnimationContainer)`
  transition: ${({ duration }) => duration}
    ${({ transitionFunc }) => transitionFunc};
  ${({ animationState }) => {
  switch (animationState) {
    case 'entered':
      return zoomedIn
    case 'exited':
    case 'entering':
    case 'exiting':
      return zoomedOut;
    default: return zoomedOut
  }
}};
`;

export default BaseZoom;
