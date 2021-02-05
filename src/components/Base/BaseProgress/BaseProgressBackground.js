import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseProgressBackground = styled.div.attrs((props) => ({
  ...ThemeService.getBaseColors(props.color, props.theme)
}))`
  height: 0.857rem;
  border-radius: 5rem;
  overflow: hidden;
  background-color: ${({ baseColor }) => baseColor.alpha(0.2).css()};
`;

export default BaseProgressBackground;
