import React from 'react';
import BaseTypographyStyle from '../Base/BaseTypography';

const Typography = ({ variant, ...rest }) => {
  let component;

  switch (true) {
    case !!variant.match(/h[1-9]/):
      component = variant;
      break;
    case !!variant.match(/display[1-4]/):
      component = variant.replace('display', 'h');
      break;
    default:
      component = 'p';
      break;
  }

  console.log(component)

  return <BaseTypographyStyle variant={variant} {...rest} as={component} />;
};

export default Typography;
