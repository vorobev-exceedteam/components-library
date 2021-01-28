import styled from 'styled-components';
import defaultTheme from '../../../theme/defaultTheme';

const BaseButton = styled.button`
  outline: none;
  display: inline-block;
  width: ${({fullWidth}) => fullWidth? '100%' : 'auto'};
  box-shadow: none;
  text-align-all: center;
  border: 1px solid transparent;
  border-radius: 0.358rem;
  font-weight: 500;
  color: ${({ theme }) =>
    theme.text ? theme.text.dark : defaultTheme.text.dark};
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
`;

export default BaseButton;
