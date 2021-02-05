import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

export const BaseAlert = styled.div.attrs((props) => ({
  ...ThemeService.getBaseColors(props.color, props.theme),
  ...props
}))`
  background-color: ${({ baseColor }) => baseColor.alpha(0.13).css()};
  color: ${({ baseColor }) => baseColor.hex()};
  border-radius: 0.358rem;
  padding: 0.71rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.45;
`;

export const BaseAlertTitle = styled(BaseAlert)`
  box-shadow: 0 6px 15px -7px ${({ baseColor}) => baseColor.alpha(0.4).css()};
  font-weight: 600;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;
