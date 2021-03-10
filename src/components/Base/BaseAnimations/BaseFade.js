import AnimationContainer from './AnimationContainer';
import styled from 'styled-components';

const BaseFade = styled(AnimationContainer)`
  transition: opacity ${({ duration }) => duration}
    ${({ transitionFunc }) => transitionFunc};
  opacity: ${({ animationState }) => {
    switch (animationState) {
      case 'entered':
        return 1;
      case 'exited':
      case 'entering':
      case 'exiting':
        return 0;
      default: return 0
    }
  }};
`;

export default BaseFade;
