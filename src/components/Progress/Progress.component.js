import React, { useEffect } from 'react';
import BaseProgressBar from '../Base/BaseProgress/BaseProgressBar';
import BaseProgressBackground from '../Base/BaseProgress/BaseProgressBackground';

const Progress = ({ percentage, infinite, ...props }) => {
  const progressBar = React.useRef();

  useEffect(() => {
    if (percentage <= 100 && percentage >= 0 && !infinite) {
      progressBar.current.style.width = percentage + '%' || '0%';
    }
  }, [infinite, percentage, progressBar]);

  return (
    <BaseProgressBackground {...props}>
      <BaseProgressBar ref={progressBar} infinite={infinite} {...props} />
    </BaseProgressBackground>
  );
};

export default Progress;
