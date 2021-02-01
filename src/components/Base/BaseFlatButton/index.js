import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import BaseButton from '../BaseButton';

const BaseFlatButton = styled(BaseButton).attrs((props) => ({
  ...ThemeService.getFlatButtonStyle(
    props.color,
    props.theme,
    props.colorVariation
  ),
  ...props
}))`
  background-color: ${({ mainBg, activeBg, active }) =>
    active ? activeBg : mainBg};
  color: ${({ main }) => main};
  &:hover,
  &:focus {
    background-color: ${({ hoverBg, activeBg, active }) =>
      active ? activeBg : hoverBg};
  }
  &:hover &:active,
  &:focus &:active,
  &:active {
    background-color: ${({ activeBg }) => activeBg};
  }
`;

export default BaseFlatButton;
