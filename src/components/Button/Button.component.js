import React from 'react';
import { useRipple } from '../../hooks/useRipple';
import BaseButton from '../Base/BaseButton';
import { BaseButtonContentWrapper } from '../Base/BaseContentWrapper';

const Button = ({ variant, icon, children, ...rest }) => {
  const ref = React.useRef();

  useRipple(ref, { disabled: ['relief', 'gradient'].includes(variant) });

  return (
    <BaseButton variant={variant} {...rest} ref={ref}>
      <BaseButtonContentWrapper>
        {icon}
        {children}
      </BaseButtonContentWrapper>
    </BaseButton>
  );
};

export default React.memo(Button);
