import React from 'react';
import { useRipple } from '../../hooks/useRipple';
import BaseButton from '../Base/BaseButton';
import { BaseButtonContentWrapper } from '../Base/BaseContentWrapper';

const IconButton = ({ variant, children, ...rest }) => {
  const ref = React.useRef();

  useRipple(ref, { disabled: ['relief', 'gradient'].includes(variant) });

  return (
    <BaseButton variant={variant} iconButton ref={ref} {...rest}>
      <BaseButtonContentWrapper>{children}</BaseButtonContentWrapper>
    </BaseButton>
  );
};

export default React.memo(IconButton);
