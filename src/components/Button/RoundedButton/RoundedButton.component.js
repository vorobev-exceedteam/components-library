import React, { memo } from 'react';
import styled from 'styled-components';
import BaseButton from '../BaseButton';

const RoundedButton = ({ variant, active, ...rest }) => {
  const StyledRoundedButton = styled(BaseButton)`
    border-style: none;
    background-color: ${({ theme }) => theme.button.round[variant].idle};
    border-color: ${({ theme }) => theme.button.round[variant].idle};
    color: ${({ theme }) =>
      theme.button.round[variant].idleContent ||
      theme.button.round.defaultContentColor};
    &:hover {
      background-color: ${({ theme }) => theme.button.round[variant].hover};
      border-color: ${({ theme }) => theme.button.round[variant].hoverBorder};
      color: ${({ theme }) =>
        theme.button.round[variant].hoverContent ||
        theme.button.round.defaultContentColor};
    &:active {
      background-color: ${({ theme }) => theme.button.round[variant].active};
      border-color: ${({ theme }) => theme.button.round[variant].activeBorder};
      color: ${({ theme }) =>
        theme.button.round[variant].activeContent ||
        theme.button.round.defaultContentColor}
  `;

  const StyledRoundedButtonActive = styled(BaseButton)`
    background-color: ${({ theme }) => theme.button.round[variant].active};
    border-color: ${({ theme }) => theme.button.round[variant].activeBorder};
    color: ${({ theme }) =>
      theme.button.round[variant].activeContent ||
      theme.button.round.defaultContentColor};
  `;

  return active ? (
    <StyledRoundedButtonActive {...rest} />
  ) : (
    <StyledRoundedButton {...rest} />
  );
};

export default memo(RoundedButton);
