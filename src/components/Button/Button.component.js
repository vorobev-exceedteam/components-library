import React from 'react';
import styled from 'styled-components';
import ThemeService from '../../theme/ThemeService';
import Ripple from '../Effects/Ripple';

const Button = ({
  variant,
  size,
  pill,
  icon,
  children,
  ...rest
}) => {

  let StyledButton = ThemeService.getButtonVariant(variant);

  StyledButton = styled(StyledButton).attrs((props) => ({
    ...ThemeService.getButtonSize(size),
    ...props
  }))`
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    padding: ${({ padding }) => padding};
  `

  if (pill) {
    StyledButton = styled(StyledButton)`
      border-radius: 50rem;
    `;
  }

  const ButtonContentWrapper = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    gap: .45rem;
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

export default React.memo(Button);
