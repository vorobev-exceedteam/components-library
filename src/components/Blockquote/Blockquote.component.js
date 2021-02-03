import React from 'react';
import { BaseBlockquote, BaseBlockquoteFooter } from '../Base/BaseBlockquote';

const Blockquote = ({ avatar, children, footerAlign, footer, ...rest }) => {
  return (
    <BaseBlockquote {...rest}>
      {children}
      {footer ? (
        <BaseBlockquoteFooter footerAlign={footerAlign}>
          {footer}
        </BaseBlockquoteFooter>
      ) : null}
    </BaseBlockquote>
  );
};

export default Blockquote;
