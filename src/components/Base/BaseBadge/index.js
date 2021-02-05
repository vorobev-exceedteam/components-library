import styled, { css } from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseBadge = styled.div.attrs((props) => ({
  ...ThemeService.getBaseColors(props.color, props.theme),
  ...props
}))`
  background-color: ${({ light, baseColor }) =>
    light ? baseColor.alpha(0.13).css() : baseColor.hex()};
  color: ${({ baseTextColor, baseColor, light }) =>
    light ? baseColor.hex() : baseTextColor.hex()};
  box-shadow: ${({ glow, baseColor }) =>
    glow ? `0 0 10px ${baseColor.hex()}` : `none`};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  display: inline-block;
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 0.358rem;
  font-size: 85%;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  vertical-align: baseline;
  -webkit-transition: color 0.15s ease-in-out,
  background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
  background 0s, border 0s, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0s,
  border 0s, -webkit-box-shadow 0.15s ease-in-out;

  &:hover {
    ${({ button }) =>
      button
        ? css`
            box-shadow: none;
          `
        : ''}
    background-color: ${({ button, baseColor, light }) =>
      button
        ? light
          ? baseColor.alpha(0.2).css()
          : baseColor.darken(0.5).hex()
        : light
        ? baseColor.alpha(0.13).css()
        : baseColor.hex()};
    cursor: ${({ button }) => (button ? 'pointer' : 'auto')};
    pointer-events: ${({ button }) => (button ? '' : 'auto')};
`;

export default BaseBadge;
