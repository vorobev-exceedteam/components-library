import React from 'react';
import styled from 'styled-components';
import BaseButton from '../Base/BaseButton';
import ThemeService from '../../theme/ThemeService';

const Button = ({
  variant,
  size,
  color,
  colorVariation,
  active,
  pill,
  icon,
  fullWidth,
  children,
  ...rest
}) => {
  let StyledButton;

  switch (variant) {
    case 'flat':
    case 'outlined':
      StyledButton = styled(BaseButton).attrs((props) => ({
        ...ThemeService.getOutlinedButtonStyle(
          color,
          active,
          props.theme,
          colorVariation
        ),
        ...props
      }))`
        background-color: ${({ mainBg }) => mainBg};
        color: ${({ main }) => main};
        border-color: ${({ main }) =>
          variant === 'flat' ? 'transparent' : main};
        &:hover {
          background-color: ${({ hoverBg }) => hoverBg};
        }
        &:hover &:active,
        &:focus {
          background-color: ${({ activeBg }) => activeBg};
        }
      `;
      break;

    case 'gradient':
      StyledButton = styled(BaseButton).attrs((props) => ({
        ...ThemeService.getGradientButtonStyle(
          color,
          active,
          props.theme,
          colorVariation
        ),
        ...props
      }))`
        background-color: transparent;
        transition: all 0.2s ease;
        background-image: linear-gradient(
          45deg,
          ${({ mainDarkBg }) => mainDarkBg},
          ${({ mainLightBg }) => mainLightBg}
        );
        color: ${({ mainText }) => mainText};
        border-style: none;
        &:hover {
          transform: translateY(-2px);
        }
        &:focus,
        &:active {
          background-image: linear-gradient(
            45deg,
            ${({ activeDarkBg }) => activeDarkBg},
            ${({ activeLightBg }) => activeLightBg}
          );
        }
      `;
      break;

    case 'relief':
      StyledButton = styled(BaseButton).attrs((props) => ({
        ...ThemeService.getReliefButtonStyle(
          color,
          active,
          props.theme,
          colorVariation
        ),
        ...props
      }))`
        transition: all 0.2s ease;
        background-color: ${({ mainBg }) => mainBg};
        color: ${({ mainText }) => mainText};
        box-shadow: ${() =>
          active ? 'none' : 'inset 0 -3px 0 0 rgba(34, 41, 47, 0.2)'};
        &:hover {
          background-color: ${({ hoverBg }) => hoverBg} !important;
        }
        &:active {
          transform: translateY(3px);
        }
        &:focus,
        &:active {
          box-shadow: none;
          background-color: ${({ activeBg }) => activeBg};
        }
      `;
      break;

    default:
      StyledButton = styled(BaseButton).attrs((props) => ({
        ...ThemeService.getFilledButtonStyle(
          color,
          active,
          props.theme,
          colorVariation
        ),
        ...props
      }))`
        background-color: ${({ mainBg }) => mainBg};
        color: ${({ mainText }) => mainText};
        border-style: none;
        &:hover {
          box-shadow: 0 8px 25px -8px ${({ mainBg }) => mainBg};
        }
        &:focus,
        &:active {
          background-color: ${({ activeBg }) => activeBg};
        }
      `;
      break;
  }

  StyledButton = styled(StyledButton).attrs((props) => ({
    ...ThemeService.getButtonSize(size),
    ...props
  }))`
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    padding: ${({ padding }) => padding};
  `;

  if (pill) {
    StyledButton = styled(StyledButton)`
      border-radius: 50rem;
    `;
  }

  if (fullWidth) {
    StyledButton = styled(StyledButton)`
      width: 100%;
    `;
  }


  const ButtonContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: .5rem;
    flex-direction: row;
  `;

  return (
    <StyledButton {...rest}>
      <ButtonContentWrapper>
        {icon}
        {children}
      </ButtonContentWrapper>
    </StyledButton>
  );
};

export default Button;
