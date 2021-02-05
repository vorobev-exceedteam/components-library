import styled, { css } from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import { infiniteLoopAnimation, strippedAnimation } from './animations';

const BaseProgressBar = styled.div.attrs((props) => ({
  ...ThemeService.getBaseColors(props.color, props.theme)
}))`
  height: 100%;
  ${({ infinite }) =>
    infinite
      ? css`
          width: 30% !important;
        `
      : ''}
  background-color: ${({ baseColor }) => baseColor.hex()};
  border-radius: 5rem;
  transition: width 0.2s ease;
  animation: ${({ infinite, stripped, animated }) =>
    infinite || (stripped && animated)
      ? infinite
        ? css`
            ${infiniteLoopAnimation} 1.2s ease-in-out infinite
          `
        : css`
            ${strippedAnimation} 1s linear infinite
          `
      : 'none'};
  ${({ stripped }) =>
    stripped
      ? css`
          background-image: linear-gradient(
            45deg,
            hsla(0, 0%, 100%, 0.15) 25%,
            transparent 0,
            transparent 50%,
            hsla(0, 0%, 100%, 0.15) 0,
            hsla(0, 0%, 100%, 0.15) 75%,
            transparent 0,
            transparent
          );
          background-size: 0.857rem 0.857rem;
        `
      : ''}
`;

export default BaseProgressBar;
