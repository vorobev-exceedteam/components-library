import React from 'react';
import BaseInputField from '../Base/BaseInput/InputField';
import BaseInputHelperText from '../Base/BaseInput/InputHelperText';
import BaseInputLabel from '../Base/BaseInput/InputLabel';
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
      {label ? <BaseInputLabel {...labelProps}>{label}</BaseInputLabel> : null}
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
