import React from 'react';
import styled from 'styled-components';
import ThemeService from '../../theme/ThemeService';
import BaseContentWrapper from '../Base/BaseContentWrapper';

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


  return (
    <StyledButton {...rest}>
      <BaseContentWrapper>
        {icon}
        {children}
      </BaseContentWrapper>
    </StyledButton>
  );
};

export default React.memo(Button);
