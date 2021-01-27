import React from 'react';
import styled from 'styled-components';

const Ripple = ({ duration = 850, color = '#ffffff' }) => {
  const RippleContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;

    span {
      position: absolute;
      transform: scale(0);
      border-radius: 100%;
      opacity: 0.25;
      background-color: ${(props) => props.color};
      animation-name: ripple;
      animation-duration: ${(props) => props.duration}ms;
    }

    @keyframes ripple {
      to {
        opacity: 0;
        transform: scale(2);
      }
    }
  `;

  const [rippleArray, setRippleArray] = React.useState([]);

  const addRipple = (event) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();

    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    const x = event.pageX - rippleContainer.left - size / 2;
    const y = event.pageY - rippleContainer.top - size / 2;

    const newRipple = {
      x,
      y,
      size
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  React.useEffect(() => {
    let bounce;

    if (rippleArray.length > 0) {
      window.clearTimeout(bounce);

      bounce = window.setTimeout(() => {
        setRippleArray([]);
        window.clearTimeout(bounce);
      }, duration * 4);
    }

    return () => window.clearTimeout(bounce);
  }, [rippleArray.length, duration]);

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size
              }}
            />
          );
        })}
    </RippleContainer>
  );
};

export default Ripple;
