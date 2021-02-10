import { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';
import { growingSpinner, spinner } from './animations';

const getVariant = switchProp(
  prop('variant', 'spinner'),
  {
    spinner: css`
      border: 0.25em solid
        ${({ color, baseColor, baseTheme, colorInherit }) =>
          colorInherit
            ? ''
            : color
            ? baseColor.hex()
            : baseTheme.text.dark};
      border-right-color: transparent;
      animation: ${spinner} 0.75s linear infinite;
    `,
    growing: css`
      background-color: ${({ color, baseColor, baseTheme, colorInherit }) =>
        colorInherit
          ? ''
          : color
          ? baseColor.hex()
          : baseTheme.text.dark};
      animation: ${growingSpinner} 0.75s linear infinite;
      opacity: 0;
    `
  },
  'spinner'
);

export default getVariant;
