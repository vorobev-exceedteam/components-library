import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import BaseButton from '../BaseButton';

const BaseReliefButton = styled(BaseButton).attrs((props) => ({
  ...ThemeService.getReliefButtonStyle(
    props.color,
    props.active,
    props.theme,
    props.colorVariation
  ),
  ...props,
}))`
  transition: all 0.2s ease;
  background-color: ${({ mainBg }) => mainBg};
  color: ${({ mainText }) => mainText};
  box-shadow: ${({ active }) =>
    active ? 'none' : 'inset 0 -3px 0 0 rgba(34, 41, 47, 0.2)'};
  &:focus,
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg} !important;
  }
  &:active {
    transform: translateY(3px);
  }
  
  &:active {
    box-shadow: none;
    background-color: ${({ activeBg }) => activeBg};
  }
`;

export default BaseReliefButton;
