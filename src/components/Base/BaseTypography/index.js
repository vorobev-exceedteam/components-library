import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseTypographyStyle = styled.div.attrs((props) => ({
  ...ThemeService.getTypographyStyle(
    props.variant,
    props.theme,
    props.fontWeightVariant,
    props.color,
    props.colorVariant
  ),
  ...props
}))`
  font-family: inherit;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 1.2;
  color: ${({ textColor }) => textColor};
  font-size: ${({ fontSize }) => fontSize};
`;


export default BaseTypographyStyle;
