import React from 'react';
import {useRipple} from '../../hooks/useRipple';
import ThemeService from '../../theme/ThemeService';
import BaseContentWrapper from '../Base/BaseContentWrapper';

const Button = ({ variant, icon, children, ...rest }) => {

  const StyledButton = ThemeService.getButtonVariant(variant)

  const ref = React.useRef();


  useRipple(ref, { disabled: ['relief', 'gradient'].includes(variant) });

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
