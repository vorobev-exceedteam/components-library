import { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

export const lightVariant = css`
  font-weight: 400;
`;

export const regularVariant = css`
  font-weight: 500;
`;

export const boldVariant = css`
  font-weight: 600;
`;

export const getFontWeightVariant = switchProp(
  prop('fontWeightVariant', 'regular'),
  {
    light: lightVariant,
    regular: regularVariant,
    bold: boldVariant
  },
  'regular'
);
