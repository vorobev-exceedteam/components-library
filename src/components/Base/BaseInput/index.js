import styled from 'styled-components';

const BaseInput = styled.input`
  outline: none;
  display: block;
  width: 100%;
  height: 2.714rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.45;
  color: #6e6b7b;
  padding: 0.438rem 1rem;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    &::placeholder {
      transform: translateX(0.3rem);
      transition: all 0.3s;
    }
  }
  &:not(:focus) {
    &::placeholder {
      transition: all 0.3s;
    }
  }
`;
export default BaseInput;
