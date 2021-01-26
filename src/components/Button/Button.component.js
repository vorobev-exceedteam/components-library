import React, { memo } from 'react';
import styled from 'styled-components';

const Button = ({ outlined, ...rest }) => {

  return outlined ? (
    <OutlinedButton {...rest}/>
  ) : (
    <RoundedButton {...rest} />
  );
};

export default memo(Button);
