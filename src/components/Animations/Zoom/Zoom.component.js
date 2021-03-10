import { Transition } from 'react-transition-group';
import BaseZoom from '../../Base/BaseAnimations/BaseZoom';

const Zoom = ({
  children,
  unmountOnExit,
  isActive,
  transitionFunc = '',
  duration = 200
}) => {
  return  (
    <Transition
      in={isActive}
      classNames="fade"
      unmountOnExit={unmountOnExit}
      timeout={duration}
    >
      {(state) => (
        <BaseZoom
          duration={duration + 'ms'}
          transitionFunc={transitionFunc}
          animationState={state}
        >
          {children}
        </BaseZoom>
      )}
    </Transition>
  );;
};

export default Zoom;
