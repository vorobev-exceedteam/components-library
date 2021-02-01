import React from 'react';
import { BaseAlert, BaseAlertTitle } from '../Base/BaseAlert';
import { BaseContentWrapper } from '../Base/BaseContentWrapper';

const Alert = ({ title, children, titleIcon, icon, ...rest }) => {

  const alertStyle = React.useMemo(() => {
    if (title) {
      return {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
      };
    }
  }, [title]);

  return (
    <div>
      {title ? (
        <BaseAlertTitle {...rest}>
          <BaseContentWrapper>
            {titleIcon}
            {title}
          </BaseContentWrapper>
        </BaseAlertTitle>
      ) : null}
      <BaseAlert {...rest} style={alertStyle}>
        <BaseContentWrapper>
          {icon}
          {children}
        </BaseContentWrapper>
      </BaseAlert>
    </div>
  );
};

export default React.memo(Alert);
