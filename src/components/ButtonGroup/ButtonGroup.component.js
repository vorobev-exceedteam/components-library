import React from 'react';
import styled from 'styled-components';

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
  const ButtonGroupWrapper = styled.div`
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
    background-image: 
  `;

  const [activationStates, setActivationStates] = React.useState([]);

  const changeActivationState = React.useCallback(
    (index) => (event) => {
      const newState = type==='radio'? [] : [...activationStates];
      newState[index] = !newState[index];
      onChange(index, event, newState[index]);
      setActivationStates(newState);
    },
    [setActivationStates, activationStates, type, onChange]
  );
  // todo fix gradient button
  // todo unique key of buttons
  const elements = React.useMemo(
    () =>
      children.map((item, index) => {
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
            onClick: changeActivationState(index),
          });
          switch (index) {
            case 0:
              return React.cloneElement(baseElement, {
                style: {
                  'border-bottom-right-radius': 0,
                  'border-top-right-radius': 0,
                  'border-right': 'none',
                }
              });
            case children.length - 1:
              return React.cloneElement(baseElement, {
                style: {
                  'border-bottom-left-radius': 0,
                  'border-top-left-radius': 0,
                  'border-left': 'none',
                }
              });
            default:
              return React.cloneElement(baseElement, {
                style: {
                  'border-radius': 0
                }
              });
          }
        }
        return item;
      }),
    [
      fullWidth,
      children,
      variant,
      round,
      pill,
      size,
      activationStates,
      changeActivationState
    ]
  );

  return <ButtonGroupWrapper fullWidth={fullWidth} {...rest}>{elements}</ButtonGroupWrapper>;
};

export default React.memo(ButtonGroup);
