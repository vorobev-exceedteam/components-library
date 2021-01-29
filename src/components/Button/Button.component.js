import React from 'react';
import {useRipple} from '../../hooks/useRipple';
import styled from 'styled-components';
import ThemeService from '../../theme/ThemeService';
import BaseContentWrapper from '../Base/BaseContentWrapper';
import Ripple from '../Effects/Ripple';

const Button = ({ variant, size, pill, icon, children, ...rest }) => {
  let StyledButton = ThemeService.getButtonVariant(variant);

  const ref = React.useRef();


  useRipple(ref, { disabled: ['relief, gradient'].includes(variant) });

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

  return (
    <StyledButton {...rest} ref={ref}>
      <BaseContentWrapper>
        {icon}
        {children}
      </BaseContentWrapper>
    </StyledButton>
  );
};

export default React.memo(Button);
