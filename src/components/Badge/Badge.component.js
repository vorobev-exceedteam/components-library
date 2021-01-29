import React from 'react';
import BaseBadge from '../Base/BaseBadge';
import BaseContentWrapper from '../Base/BaseContentWrapper';

const Badge = ({ icon, children, ...rest }) => {

  return (
    <BaseBadge {...rest}>
      <BaseContentWrapper>
        {icon}
        {children}
      </BaseContentWrapper>
    </BaseBadge>
  );
};

export default React.memo(Badge);
