import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

export const BaseAlertStyle = styled.div.attrs((props) => ({
  ...ThemeService.getAlertStyle(props.color, props.colorVariant, props.theme),
  ...props
}))`
  background-color: ${({ bg }) => bg};
  color: ${({ main }) => main};
  padding: .71rem 1rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.45;
`;

export const BaseAlertTitle = styled(BaseAlertStyle)`
  box-shadow: 0 6px 15px -7px ${({shadowColor})=>shadowColor};
`
