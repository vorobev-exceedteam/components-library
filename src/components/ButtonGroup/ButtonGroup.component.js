import React from 'react';
import styled from 'styled-components';

const ButtonGroupWrapper = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  background-image: none;
`;

const ButtonGroup = ({
  children,
  disabled,
  variant,
  round,
  pill,
  type,
  size,
  onChange,
  buttonProps,
  fullWidth,
  ...rest
}) => {
  const [activationStates, setActivationStates] = React.useState(
    type === 'radio' ? [true] : []
  );

  const changeActivationState = React.useCallback(
    (index) => (event) => {
      if (['radio', 'toggle'].includes(type)) {
        const newState = type === 'radio' ? [] : [...activationStates];
        newState[index] = !newState[index];
        onChange(event, index, newState[index]);
        setActivationStates(newState);
      } else {
        onChange(event, index);
      }
    },
    [setActivationStates, activationStates, type, onChange]
  );

  const elements = children.map((item, index) => {
    if (children.length > 1) {
      const baseElement = React.cloneElement(item, {
        ...buttonProps,
        fullWidth,
        variant,
        disabled,
        key: index,
        pill,
        round,
        size,
        active: activationStates[index],
        onClick: changeActivationState(index)
      });
      switch (index) {
        case 0:
          return React.cloneElement(baseElement, {
            style: {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRight: 'none'
            }
          });
        case children.length - 1:
          return React.cloneElement(baseElement, {
            style: {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderLeft: 'none'
            }
          });
        default:
          return React.cloneElement(baseElement, {
            style: {
              borderRadius: 0
            }
          });
      }
    }
    return item;
  });

  return (
    <ButtonGroupWrapper fullWidth={fullWidth} {...rest}>
      {elements}
    </ButtonGroupWrapper>
  );
};

export default React.memo(ButtonGroup);
