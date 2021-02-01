import React, { useMemo } from 'react';
import { useRipple } from '../../hooks/useRipple';
import ThemeService from '../../theme/ThemeService';
import {
  BaseButtonContentWrapper
} from '../Base/BaseContentWrapper';

const Button = ({ variant, icon, children, ...rest }) => {
  const StyledButton = useMemo(() => ThemeService.getButtonVariant(variant), [
    variant
  ]);

  const ref = React.useRef();

  useRipple(ref, { disabled: ['relief', 'gradient'].includes(variant) });

  return (
    <StyledButton {...rest} ref={ref}>
      <BaseButtonContentWrapper>
        {icon}
        {children}
      </BaseButtonContentWrapper>
    </StyledButton>
  );
};

export default React.memo(Button);
