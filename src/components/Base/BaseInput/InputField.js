import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import { getInputSize } from './sizes';

const BaseInputField = styled.input.attrs((props) => ({
  ...ThemeService.getBaseColors(props.color, props.theme),
  ...props
}))`
  outline: none;
  display: block;
  width: 100%;
  font-weight: 400;
  color: #6e6b7b;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid
    ${({ valid, invalid, baseTheme }) =>
      valid ? baseTheme.success : invalid ? baseTheme.danger : '#d8d6de'};
  border-radius: 0.357rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${getInputSize}
  &::placeholder {
    color: #b9b9c3;
  }
  &:focus {
    border-color: ${({ valid, invalid, baseTheme, baseColor }) =>
      valid ? baseTheme.success : invalid ? baseTheme.danger : baseColor.hex()};
    &::placeholder {
      transform: translateX(0.3rem);
      transition: transform 0.15s ease-in-out;
    }
  }
  &:not(:focus) {
    &::placeholder {
      transition: transform 0.15s ease-in-out;
    }
  }
`;

export default BaseInputField;
