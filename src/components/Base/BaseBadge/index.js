import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseBadge = styled.div.attrs((props) => ({
  ...ThemeService.getBadgeStyle(props.theme, props.color),
  ...props
}))`
  background-color: ${({ main, light, bgLight }) => (light ? bgLight : main)};
  color: ${({ text, light, main }) => (light ? main : text)};
  box-shadow: ${({ glow, main }) => (glow ? `0 0 10px $main}` : `none`)};
  width: ${({fullWidth}) => fullWidth? '100%' : 'initial'};
  display: inline-block;
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 0.358rem;
  font-size: 85%;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  vertical-align: baseline;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    background 0s, border 0s, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background 0s,
    border 0s, -webkit-box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: ${({
      button,
      main,
      hoverBg,
      bgLight,
      light,
      hoverBgLight
    }) => (button ? (light ? hoverBgLight : hoverBg) : light ? bgLight : main)};
    cursor: ${({ button }) => (button ? 'pointer' : 'auto')};
    pointer-events: ${({ button }) => (button ? '' : 'auto')};
  }
`;

export default BaseBadge;
