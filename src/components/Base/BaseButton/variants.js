import { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';

const filledVariant = css`
  background-color: ${({ baseColor, active }) =>
    active ? baseColor.darken(0.5).hex() : baseColor.hex()};
  color: ${({ baseTextColor }) => baseTextColor.hex()};
  border-style: none;
  &:focus,
  &:hover {
    box-shadow: 0 8px 25px -8px ${({ baseColor }) => baseColor.hex()};
  }
  &:active {
    background-color: ${({ baseColor }) => baseColor.darken(0.5).hex()};
  }
`;

const flatVariant = css`
  background-color: ${({ baseColor, active }) =>
    active ? baseColor.alpha(0.15).css() : baseColor.alpha(0).css()};
  color: ${({ baseColor }) => baseColor.hex()};
  &:hover,
  &:focus {
    background-color: ${({ baseColor, active }) =>
      active ? baseColor.alpha(0.15).css() : baseColor.alpha(0.05).css()};
  }
  &:hover &:active,
  &:focus &:active,
  &:active {
    background-color: ${({ baseColor }) => baseColor.alpha(0.15).css()};
  }
`;

const outlinedVariant = css`
  border-color: ${({ baseColor }) => baseColor.hex()};
  ${flatVariant}
`;

const gradientVariant = css`
  background-color: transparent;
  transition: all 0.2s ease;
  background-image: linear-gradient(
    45deg,
    ${({ baseColor, active }) =>
      active ? baseColor.darken().hex() : baseColor.hex()},
    ${({ baseColor, active }) =>
      active ? baseColor.hex() : baseColor.brighten().hex()}
  );
  color: ${({ baseTextColor }) => baseTextColor.hex()};
  border-style: none;
  &:focus,
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    background-image: linear-gradient(
      45deg,
      ${({ baseColor }) => baseColor.darken().hex()},
      ${({ baseColor }) => baseColor.hex()}
    );
  }
`;

const reliefVariant = css`
  transition: all 0.2s ease;
  background-color: ${({ baseColor, active }) =>
    active ? baseColor.darken(0.5).hex() : baseColor.hex()};
  color: ${({ baseTextColor }) => baseTextColor.hex()};
  box-shadow: ${({ active }) =>
    active ? 'none' : 'inset 0 -3px 0 0 rgba(34, 41, 47, 0.2)'};
  &:focus,
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    transform: translateY(3px);
  }
  &:active {
    box-shadow: none;
    background-color: ${({ baseColor }) => baseColor.darken(0.5).hex()};
  }
`;

export const getButtonVariant = switchProp(
  prop('variant', 'filled'),
  {
    filled: filledVariant,
    flat: flatVariant,
    outlined: outlinedVariant,
    gradient: gradientVariant,
    relief: reliefVariant
  },
  'filled'
);
