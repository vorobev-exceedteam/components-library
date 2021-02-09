import ThemeService from '../../../theme/ThemeService';
import { h4Variant } from '../BaseTypography/variants';
import styled from 'styled-components';

const BaseCardTitle = styled.h4.attrs(props => ({
  ...ThemeService.getTypographyColors(props.color, props.theme)
}))`
  margin-bottom: 1.53rem;
  word-break: break-word;
  text-align: ${({align}) => align};
  ${h4Variant}
`

export default BaseCardTitle;
