import styled from 'styled-components';

export const BaseBlockquote = styled.blockquote`
  border-left: ${({ main, borderLeft }) =>
    borderLeft ? `0 1px ${main}` : 'none'};
  padding-left: ${({ borderLeft }) => (borderLeft ? '1rem' : '0')};
  border-right: ${({ main, borderRight }) =>
    borderRight ? `0 1px ${main}` : 'none'};
  padding-right: ${({ borderRight }) => (borderRight ? '1rem' : '0')};
  text-align: ${({ align }) => align};
`;
