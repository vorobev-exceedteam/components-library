import styled from 'styled-components';
import ThemeService from '../../../theme/ThemeService';

const BaseBadge = styled.div.attrs((props) => ({
  ...ThemeService.getBadgeStyle(
    props.theme,
    props.color,
    props.colorVariant,
    props.light
  ),
  ...props
}))`
  background-color: ${({ bg }) => bg};
  color: ${({ text }) => text};
  box-shadow: ${({ glow, boxShadow }) =>
          glow ? `0 0 10px ${boxShadow}` : `none`};
  display: inline-block;
  padding: .3rem .5rem;
  text-align: center;
  border-radius: .358rem;
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
`;

export default BaseBadge;
