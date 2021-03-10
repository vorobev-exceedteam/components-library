import { Transition } from 'react-transition-group';
import BaseFade from '../../Base/BaseAnimations/BaseFade';

const Fade = ({
  children,
  unmountOnExit,
  isActive,
  transitionFunc = '',
  duration = 200,
}) => {
  return (
    <Transition
      in={isActive}
      classNames="fade"
      unmountOnExit={unmountOnExit}
      timeout={duration}
    >
      {(state) => (
        <BaseFade
          duration={duration + 'ms'}
          transitionFunc={transitionFunc}
          animationState={state}
        >
          {children}
        </BaseFade>
      )}
    </Transition>
  );
};

export default Fade;
