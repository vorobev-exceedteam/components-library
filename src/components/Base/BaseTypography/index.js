import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseTypographyStyle = styled.css.attrs((props) => ({
  ...ThemeService.getTyporgaphyStyle(
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
  color: ${({ text }) => text};
  font-size: ${({ fontSize }) => fontSize};
`;

export default BaseTypographyStyle;
