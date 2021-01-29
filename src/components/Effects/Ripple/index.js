import React from 'react';
import styled from 'styled-components';

const Ripple = ({ duration = 850, color = '#ffffff' }) => {
  const RippleContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;;
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




};

export default Ripple;
