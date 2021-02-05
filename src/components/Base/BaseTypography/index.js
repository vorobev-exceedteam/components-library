import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import { getFontWeightVariant } from './fontWeightVariants';
import { getTypographyVariant } from './variants';

const BaseTypographyStyle = styled.div.attrs((props) => ({
  ...ThemeService.getTypographyColors(props.color, props.theme)
}))`
  margin: 0;
  font-family: inherit;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 1.2;
  ${getFontWeightVariant}
  ${getTypographyVariant}
`;

export default BaseTypographyStyle;
