import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';


export const BaseInputField = styled.input.attrs((props)=> ({
  ...ThemeService.getInputFieldStyle(props.color, props.theme),
  ...ThemeService.getInputFieldSize(props.size),
  ...props
}))`
  outline: none;
  display: block;
  width: 100%;
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 400;
  line-height: ${({ lineHeight }) => lineHeight};
  color: #6e6b7b;
  padding: ${({ padding }) => padding};
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid
    ${({ valid, invalid, success, danger }) =>
      valid ? success : invalid ? danger : '#d8d6de'};
  border-radius: 0.357rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &::placeholder {
    color: #b9b9c3;
  }
  &:focus {
    border-color: ${({ valid, invalid, success, danger, bg }) =>
      valid ? success : invalid ? danger : bg};
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

export const BaseInputLabel = styled.label`
  color: #5e5873;
  font-size: 0.857rem;
  display: inline-block;
  margin-bottom: 0.2857rem;
`;

export const BaseInputHelperText = styled.div.attrs((props)=> ({
  ...ThemeService.getInputFieldStyle(props.color, props.theme),
  ...props
}))`
  font-size: 0.857rem;
  font-weight: 400;
  color: ${({ valid, invalid, success, danger }) =>
          valid ? success : invalid ? danger : '#b9b9c3'};;
`;
