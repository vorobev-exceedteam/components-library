import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseOverlay = styled.div.attrs((props) =>
  ThemeService.getBaseColors(props.color, props.theme)
)`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  background: ${({ baseColor, opacity }) => baseColor.alpha(opacity|| 0).css()};
`;
export default BaseOverlay;
