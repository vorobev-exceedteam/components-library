import styled from 'styled-components';
import { flex, space } from 'styled-system';

const BaseCard = styled.div`
  ${flex}
  ${space}
  flex: 1 1 auto;
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  text-align: ${({ textAlign }) => textAlign};
  border-radius: .428rem;
  transition: height 0.2s ease-in-out;
`;

export default BaseCard;
