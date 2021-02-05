import { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';

export const getButtonSize = switchProp(prop('size', 'medium'), {
  small: css`
    padding: .486rem 1rem;
    line-height: 1;
    font-size: .9rem;
  `,
  medium: css`
    padding: .786rem 1.5rem;
    line-height: 1;
    font-size: 1rem;
  `,
  large: css`
    padding: .8rem 2rem;
    line-height: 1.25;
    font-size: 1.25rem;
  `
}, 'medium');

export const getIconButtonSize = switchProp(prop('size', 'medium'), {
  small: css`
    padding: .486rem;
    line-height: 1;
    font-size: .9rem;
  `,
  medium: css`
    padding: .786rem;
    line-height: 1;
    font-size: 1rem;
  `,
  large: css`
    padding: .8rem;
    line-height: 1.25;
    font-size: 1.25rem;
  `
}, 'medium')
