import { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

export const getInputSize = switchProp(
  prop('size', 'medium'),
  {
    small: css`
      padding: 0.188rem 0.857rem;
      line-height: 1;
      height: 2.142rem;
      font-size: 0.857rem;
    `,
    medium: css`
      padding: 0.438rem 1rem;
      line-height: 1.45;
      height: 2.714rem;
      font-size: 1rem;
    `,
    large: css`
      padding: 0.75rem 1.143rem;
      line-height: 1.25;
      font-size: 1.143rem;
      height: 3.2857rem;
    `
  },
  'medium'
);
