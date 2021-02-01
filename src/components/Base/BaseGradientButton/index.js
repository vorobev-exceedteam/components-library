
import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import BaseButton from '../BaseButton';

const BaseGradientButton = styled(BaseButton).attrs((props) => ({
  ...ThemeService.getGradientButtonStyle(
    props.color,
    props.theme,
    props.colorVariation
  ),
  ...props
}))`
  background-color: transparent;
  transition: all 0.2s ease;
  background-image: linear-gradient(
    45deg,
    ${({ mainDarkBg, active, activeDarkBg }) =>
      active ? activeDarkBg : mainDarkBg},
    ${({ mainLightBg, active, activeLightBg }) =>
      active ? activeLightBg : mainLightBg}
  );
  color: ${({ mainText }) => mainText};
  border-style: none;
  &:focus,
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    background-image: linear-gradient(
      45deg,
      ${({ activeDarkBg }) => activeDarkBg},
      ${({ activeLightBg }) => activeLightBg}
    );
  }
`;

export default BaseGradientButton;
