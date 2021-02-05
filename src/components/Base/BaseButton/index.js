import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import { getButtonSize, getIconButtonSize } from './sizes';
import { getButtonVariant } from './variants';

const BaseButton = styled.button.attrs((props) => ({
  ...ThemeService.getBaseColors(props.color, props.theme)
}))`
  outline: none;
  display: inline-block;
  box-shadow: none;
  text-align: center;
  border: 1px solid transparent;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  border-radius: ${({ round, iconButton }) =>
    round ? (iconButton ? '100%' : '50rem') : '.358rem'};
  font-weight: 500;
  vertical-align: middle;
  user-select: none;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    background 0s, border 0s, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0s,
    border 0s, -webkit-box-shadow 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
  ${({ iconButton }) => (iconButton ? getIconButtonSize : getButtonSize)}
  ${getButtonVariant}
`;

export default BaseButton;
