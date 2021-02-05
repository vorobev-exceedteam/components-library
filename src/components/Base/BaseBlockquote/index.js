import styled, { css } from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

export const BaseBlockquote = styled.blockquote.attrs((props) => ({
  ...ThemeService.getBaseColors(props.color, props.theme),
  ...props
}))`
  ${({ borderLeft }) =>
    borderLeft
      ? css`
    border-left: 3px solid ${({ baseColor }) => baseColor.hex()};
    padding-left: 1rem};
  `
      : ''}
  ${({ borderRight }) =>
    borderRight
      ? css`
    border-right: 3px solid ${({ baseColor }) => baseColor.hex()};
    padding-right: 1rem};
  `
      : ''}
  text-align: ${({ align }) => align};
`;

export const BaseBlockquoteFooter = styled.footer`
  font-size: .857rem;
  color: #b9b9c3;
  text-align: ${({footerAlign}) => footerAlign};
  &::before {
    content: "— ";
  }
`
