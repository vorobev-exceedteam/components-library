import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import BaseButton from '../BaseButton';

const BaseFlatButton = styled(BaseButton).attrs((props) => ({
  ...ThemeService.getFlatButtonStyle(
    props.color,
    props.active,
    props.theme,
    props.colorVariation
  ),
  ...props
}))`
  background-color: ${({ mainBg }) => mainBg};
  color: ${({ main }) => main};
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg};
  }
  &:hover &:active,
  &:focus {
    background-color: ${({ activeBg }) => activeBg};
  }
`;

export default BaseFlatButton;
