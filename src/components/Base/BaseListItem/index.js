import styled, { css } from 'styled-components';
import { flex } from 'styled-system';
import ThemeService from '../../../theme/ThemeService';
import chroma from 'chroma-js';

const disabledStyle = (disabled) =>
  disabled
    ? css`
        color: ${({ color, baseColor, baseTheme }) =>
          color
            ? baseColor.alpha(0.5).css()
            : chroma(baseTheme.text.dark).alpha(0.5).css()} !important;
        background-color: ${({ color, baseColor }) =>
          color ? baseColor.alpha(0.3).css() : 'transparent'};
        pointer-events: none;
        &:hover {
          background-color: initial;
        }
      `
    : '';

const buttonStyle = (button) =>
  button
    ? css`
        &:hover {
          cursor: pointer;
        }
      `
    : '';

const BaseListItem = styled.div.attrs((props) =>
  ThemeService.getBaseColors(props.color, props.theme)
)`
  padding: 0.75rem 1.25rem;
  border: 1px solid rgba(34, 41, 47, 0.125);
  color: ${({ color, baseColor, baseTheme }) =>
    color ? baseColor.hex() : baseTheme.text.dark} !important;
  background-color: ${({ color, baseColor }) =>
    color ? baseColor.alpha(0.3).css() : 'transparent'};
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;
  align-content: center;
  & + & {
    border-top-width: 0;
  }
  &:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
  &:last-child {
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  &:hover {
    background-color: ${({ color, baseColor }) =>
      color ? baseColor.brighten(2).alpha(0.3).css() : '#f8f8f8'};
  }
  ${({ disabled }) => disabledStyle(disabled)}
  ${flex}
  ${({ button }) => buttonStyle(button)}
`;

export default BaseListItem;
