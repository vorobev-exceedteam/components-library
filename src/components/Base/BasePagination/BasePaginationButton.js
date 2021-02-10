import styled, { css } from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const getStyle = (active) => {
  if (active) {
    return css`
      color: ${({ baseTextColor }) => baseTextColor.hex()};
      border-radius: 5rem;
      background-color: ${({ baseColor }) => baseColor};
      pointer-events: none;
    `;
  }
  return css`
    color: ${({ baseTheme }) => baseTheme.text.dark};
    &:hover {
      color: ${({ baseColor }) => baseColor.hex()};
    }
  `;
};

const BasePaginationButton = styled.button.attrs((props) =>
  ThemeService.getBaseColors(props.color, props.theme)
)`
  align-items: center;
  justify-content: center;
  line-height: 1.3;
  font-size: 1rem;
  min-width: 2.286rem;
  background: none;
  border: none;
  outline: none;
  padding: 0.5rem 0.85rem;
  cursor: pointer;
  ${({ active }) => getStyle(active)}
  &~& {
    border-top-left-radius: 5rem;
    border-bottom-left-radius: 5rem;
  }
  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`;

export default BasePaginationButton;
