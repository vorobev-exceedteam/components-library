import {css} from 'styled-components';
import { prop, switchProp } from 'styled-tools';

const getSize = switchProp(prop('size', 'medium'), {
  small: css`
    width: 1rem;
    height: 1rem;
    border-width: .2em;
  `,
  medium: css`
    width: 2rem;
    height: 2rem;
  `,
  large: css`
    width: 3rem;
    height: 3rem;
  `
}, 'medium')

export default getSize;
