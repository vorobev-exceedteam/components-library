import styled, { css } from 'styled-components';

const BasePaginationBg = styled.div`
  border-radius: 5rem;
  background-color: #f3f3f7;
  display: inline-flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  align-content: center;
  ${({ fullWidth }) =>
          fullWidth
                  ? css`
                    width: 100%;
                  `
                  : ''}
`;

export default BasePaginationBg;
