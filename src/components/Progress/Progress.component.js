import React from 'react';
import { BaseProgressBackground, BaseProgressBar } from '../Base/BaseProgress';

const Progress = ({ percentage, ...props }) => {
  return (
    <BaseProgressBackground {...props}>
      <BaseProgressBar {...props} percentage={percentage} />
    </BaseProgressBackground>
  );
};

export default Progress;
