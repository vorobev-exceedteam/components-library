import { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

export const h1Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 2rem;
`;

export const h2Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 1.714rem;
`;

export const h3Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 1.5rem;
`;

export const h4Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 1.286rem;
`;

export const h5Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 1.07rem;
`;

export const h6Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 1rem;
`;

export const display1Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 6rem;
`;

export const display2Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 5.5rem;
`;

export const display3Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 4.5rem;
`;

export const display4Variant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 3.5rem;
`;

export const secondaryVariant = css`
  color: ${({ baseColor }) => baseColor.alpha(0.35).hex()};
  font-size: .857rem;
`;

export const primaryVariant = css`
  color: ${({ baseColor }) => baseColor.hex()};
  font-size: 1.25rem;
`;


export const getTypographyVariant = switchProp(
  prop('variant', 'primary'),
  {
    h1: h1Variant,
    h2: h2Variant,
    h3: h3Variant,
    h4: h4Variant,
    h5: h5Variant,
    h6: h6Variant,
    display1: display1Variant,
    display2: display2Variant,
    display3: display3Variant,
    display4: display4Variant,
    secondary: secondaryVariant,
    primary: primaryVariant
  },
  'primary'
);
