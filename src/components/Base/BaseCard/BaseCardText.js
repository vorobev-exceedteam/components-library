import styled from 'styled-components';
import { typography } from 'styled-system';
import ThemeService from '../../../theme/ThemeService';

const BaseCardText = styled.p.attrs((props) => ({
  ...ThemeService.getTypographyColors(props.color, props.theme)
}))`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 1rem;
  font-weight: 400;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-bottom: 1rem;
  line-height: 1.5rem;
  ${typography}
`;

export default BaseCardText;
