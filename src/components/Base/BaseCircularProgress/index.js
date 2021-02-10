import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import getVariant from './variants';
import getSize from './sizes';

const BaseCircularProgress = styled.span.attrs((props) =>
  ThemeService.getBaseColors(props.color, props.theme)
)`
  display: inline-block;
  vertical-align: text-bottom;
  border-radius: 50%;
  ${getSize}
  ${getVariant}
`;

export default BaseCircularProgress;
