import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseInputHelperText = styled.div.attrs((props)=> ({
  ...ThemeService.getBaseColors(props.color, props.theme),
  ...props
}))`
  font-size: 0.857rem;
  font-weight: 400;
  color: ${({ valid, invalid, baseTheme }) =>
  valid ? baseTheme.success : invalid ? baseTheme.danger : '#b9b9c3'};;
`;

export default BaseInputHelperText;
