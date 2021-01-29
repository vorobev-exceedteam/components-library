import React from 'react';
import { useRipple } from '../../hooks/useRipple';
import ThemeService from '../../theme/ThemeService';

const IconButton = ({ variant, ...rest }) => {

  const StyledIconButton = ThemeService.getButtonVariant(variant);

  const ref = React.useRef();

  useRipple(ref, { disabled: ['relief', 'gradient'].includes(variant) });

  return <StyledIconButton iconButton ref={ref} {...rest}/>;
};

export default React.memo(IconButton);
