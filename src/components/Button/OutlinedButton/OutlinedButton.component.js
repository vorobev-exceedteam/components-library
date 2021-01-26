import React, { memo } from 'react';
import styled from 'styled-components';
import BaseButton from '../BaseButton';

const OutlinedButton = ({ variant, active, ...rest }) => {
  const StyledOutlinedButton = styled(BaseButton)`
    background: initial;
    color: ${({ theme }) => theme.button.outlined[variant].main};
    border-color: ${({ theme }) => theme.button.outlined[variant].main};
    &:hover {
      background-color: ${({ theme }) =>
        theme.button.outlined[variant].hover ||
        theme.button.outlined[variant].main};
      color: ${({ theme }) =>
        theme.button.outlined[variant].hoverContent ||
        theme.button.outlined.defaultContentColor};
      &:active {
        background-color: ${({ theme }) =>
          theme.button.outlined[variant].active ||
          theme.button.outlined[variant].main};
        color: ${({ theme }) =>
          theme.button.outlined[variant].activeContent ||
          theme.button.outlined.defaultContentColor};
      }
    }
  `;

  const StyledOutlinedButtonActive = styled(BaseButton)`
    border: none;
    background-color: ${({ theme }) => theme.button.outlined[variant].main};
    color: ${({ theme }) =>
      theme.button.outlined[variant].activeContent ||
      theme.button.defaultContentColor};
  `;

  return active ? (
    <StyledOutlinedButtonActive {...rest} />
  ) : (
    <StyledOutlinedButton {...rest} />
  );
};

export default memo(OutlinedButton);
