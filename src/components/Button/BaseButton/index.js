import styled from 'styled-components';

const BaseButton = styled.button`
    border-radius: 50px;
    border: 1px solid transparent;
    font-size: 0.8rem;
    box-sizing: border-box;
    color: #eee;
    font-weight: 400;
    text-transform: capitalize;
    padding: 0.5rem 1.25rem;
    outline: initial !important;
    text-align: center;
    vertical-align: middle;
    line-height: 1.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      opacity: 0.65;
      pointer-events: none;
    }
  `;

export default BaseButton;
