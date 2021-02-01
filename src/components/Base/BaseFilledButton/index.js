import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';
import BaseButton from '../BaseButton';

const BaseFilledButton = styled(BaseButton).attrs((props) => ({
  ...ThemeService.getFilledButtonStyle(
    props.color,
    props.active,
    props.theme,
    props.colorVariation,
  ),
  ...props
}))`
  background-color: ${({ mainBg }) => mainBg};
  color: ${({ mainText }) => mainText};
  border-style: none;
  &:focus,
  &:hover {
    box-shadow: 0 8px 25px -8px ${({ main }) => main};
  }
  &:active {
    background-color: ${({ activeBg }) => activeBg};
  }
`;

export default BaseFilledButton;
