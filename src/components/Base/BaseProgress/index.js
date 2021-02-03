import styled, { css, keyframes } from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const animations = (infinite, stripped, animated) => keyframes`
  0% {
    ${stripped && animated ? 'background-position: .857rem 0;' : ''}
    ${infinite ? 'transform: translateX(-130%);' : ''}
  }
  to {
    ${infinite ? 'transform: translateX(430%);' : ''}
    ${stripped && animated ? 'background-position: 0 0;' : ''}
  }
`;

export const BaseProgressBackground = styled.div.attrs((props) => ({
  ...ThemeService.getProgressBackgroundStyle(props.color, props.theme),
  ...props
}))`
  height: 0.857rem;
  border-radius: 5rem;
  overflow: hidden;
  background-color: ${({ main }) => main};
`;

export const BaseProgressBar = styled.div.attrs((props) => ({
  ...ThemeService.getProgressBarStyle(props.color, props.theme),
  ...props
}))`
  height: 100%;
  width: ${({ percentage, infinite }) =>
    infinite ? '30%' : percentage ? percentage + '%' : '0%'};
  background-color: ${({ main }) => main};
  border-radius: 5rem;
  transition: width 0.2s ease;
  animation: ${({ infinite, stripped, animated }) =>
      animations(infinite, stripped, animated)}
    1s linear infinite;
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
