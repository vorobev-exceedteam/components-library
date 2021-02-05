import { useEffect } from 'react';
import Color from 'color';

const ANIMATION_LENGTH = 700;
const RIPPLE_SIZE = 100;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');

  const keyframes = `
    @keyframes use-ripple-animation {
      from {
        opacity: 0.5;
        transform: scale(0);
      }
      to {
        opacity: 0;
        transform: scale(10);
      }
    }
    `;

  style.innerHTML = keyframes;

  document.querySelector('head')?.appendChild(style);
}

const defaultEvent = {
  clientX: 0,
  clientY: 0,
  target: null
};

const createRipple = (element, options) => (e) => {
  const isExcluded = (options?.excludedRefs || []).some(
    (ref) =>
      (!!ref.current && ref.current.contains(e?.target)) ||
      ref.current?.isSameNode(e?.target)
  );

  if (isExcluded) {
    return;
  }

  const clientX = e?.clientX || defaultEvent.clientX;
  const clientY = e?.clientY || defaultEvent.clientY;

  const { height, width, top, left } = element.getBoundingClientRect();
  const x = clientX - left;
  const y = clientY - top;

  const rippleSize = Math.min(
    height,
    width,
    options?.rippleSize || RIPPLE_SIZE
  );

  const positionTop = clientX
    ? y - rippleSize / 2
    : rippleSize / 2 - height / 2;
  const positionLeft = clientY
    ? x - rippleSize / 2
    : width / 2 - rippleSize / 2;

  const span = document.createElement('span');
  console.log(element);

  const rippleColor = new Color(
    window.getComputedStyle(element).getPropertyValue('color')
  );

  span.style.cssText = `
    top: ${positionTop}px;
    left: ${positionLeft}px;
    position: absolute;
    border-radius: 50%;
    background-color: ${
      options?.rippleColor || rippleColor.alpha(0.15).rgb().hex()
    };
    pointer-events: none;
    width: ${rippleSize}px;
    height: ${rippleSize}px;
    animation: use-ripple-animation ${
      options?.animationLength || ANIMATION_LENGTH
    }ms ease-in;
  `;

  element.appendChild(span);

  span.addEventListener('animationend', () => {
    element.removeChild(span);
  });
};

export const useRipple = (ref, options) => {
  useEffect(() => {
    if (options?.disabled || !ref?.current) {
      return;
    }

    const element = ref.current;
    const elementPosition = getComputedStyle(element).getPropertyValue(
      'position'
    );

    element.style.position =
      elementPosition === 'static' || !elementPosition
        ? 'relative'
        : elementPosition;
    element.style.overflow = 'hidden';

    const ripple = createRipple(element, options);

    const keyboardRipple = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        ripple();
      }
    };

    element.addEventListener('mousedown', ripple);
    element.addEventListener('keydown', keyboardRipple);

    return () => {
      element.removeEventListener('mousedown', ripple);
      element.removeEventListener('keydown', keyboardRipple);
    };
  });
};
