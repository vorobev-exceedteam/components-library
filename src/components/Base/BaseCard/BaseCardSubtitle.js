import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import { space } from 'styled-system'

const BaseCardSubtitle = styled.h6.attrs(props => ({
  ...ThemeService.getTypographyColors(props.color, props.theme)
}))`
  color: ${({baseColor}) => baseColor.alpha(0.4).css()};
  margin-top: -0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  word-break: break-word;
  ${space}
`

export default BaseCardSubtitle;
