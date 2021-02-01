import React from 'react';
import BaseBadge from '../Base/BaseBadge';
import { BaseButtonContentWrapper } from '../Base/BaseContentWrapper';

const Badge = ({ icon, children, ...rest }) => {

  return (
    <BaseBadge {...rest}>
      <BaseButtonContentWrapper>
        {icon}
        {children}
      </BaseButtonContentWrapper>
    </BaseBadge>
  );
};

export default React.memo(Badge);
