import styled from 'styled-components';
import BaseFlatButton from '../BaseFlatButton';

const BaseOutlinedButton = styled(BaseFlatButton)`
  border-color: ${({ main }) => main};
`

export default BaseOutlinedButton
