import React from 'react';
import { useRipple } from '../../hooks/useRipple';
import ThemeService from '../../theme/ThemeService';
import { BaseButtonContentWrapper } from '../Base/BaseContentWrapper';

const IconButton = ({ variant, children, ...rest }) => {
  const StyledIconButton = ThemeService.getButtonVariant(variant);

  const ref = React.useRef();

  useRipple(ref, { disabled: ['relief', 'gradient'].includes(variant) });

  return (
    <StyledIconButton iconButton ref={ref} {...rest}>
      <BaseButtonContentWrapper>{children}</BaseButtonContentWrapper>
    </StyledIconButton>
  );
};

export default React.memo(IconButton);
