import React from 'react';
import {
  BaseInputField,
  BaseInputLabel,
  BaseInputHelperText
} from '../Base/BaseInput';

const Input = ({
  valid,
  invalid,
  label,
  helperText,
  labelProps,
  helperProps,
  ...rest
}) => {
  return (
    <div>
      {label ? (
        <BaseInputLabel {...labelProps}>
          {label}
        </BaseInputLabel>
      ) : null}
      <BaseInputField valid={valid} invalid={invalid} {...rest} />
      {helperText ? (
        <BaseInputHelperText valid={valid} invalid={invalid}>
          {helperText}
        </BaseInputHelperText>
      ) : null}
    </div>
  );
};

export default Input;
