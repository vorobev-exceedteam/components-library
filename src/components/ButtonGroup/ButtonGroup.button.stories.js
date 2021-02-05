import React from 'react';
import Button from '../Button/Button.component';
import { action } from '@storybook/addon-actions';
import ButtonGroup from './ButtonGroup.component';

const Story = {
  title: 'UI/Components/ButtonGroup/Button',
  component: ButtonGroup,
  argTypes: {
    color: {
      defaultValue: 'blue',
      control: { type: 'color' }
    },
    colorType: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'info',
          'success',
          'danger',
          'warning',
          'dark',
          'custom'
        ]
      }
    },
    type: {
      defaultValue: 'default',
      control: {
        type: 'select',
        options: [
          'default',
          'radio',
          'toggle',
        ]
      }
    }
  }
};

const Template = ({ color, colorType, ...args }) => {
  if (colorType === 'custom') {
    return (
      <ButtonGroup onChange={action('onButtonChange')} {...args}>
        <Button color={color}>First</Button>
        <Button color={color}>Second</Button>
        <Button color={color}>Third</Button>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup onChange={action('onButtonChange')} {...args}>
      <Button color={colorType}>First</Button>
      <Button color={colorType}>Second</Button>
      <Button color={colorType}>Third</Button>
    </ButtonGroup>
  );
};

export const Filled = Template.bind({});

export const FilledPill = Template.bind({});
FilledPill.args = {
  round: true
};

export const FilledDisabled = Template.bind({});
FilledDisabled.args = {
  disabled: true
};

export const FilledLarge = Template.bind({});
FilledLarge.args = {
  size: 'large'
};

export const FilledSmall = Template.bind({});
FilledSmall.args = {
  size: 'small'
};

export const FilledFullWidth = Template.bind({});
FilledFullWidth.args = {
  fullWidth: true
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined'
};

export const OutlinedPill = Template.bind({});
OutlinedPill.args = {
  ...Outlined.args,
  round: true
};


export const OutlinedToggle = Template.bind({});
OutlinedToggle.args = {
  ...Outlined.args,
  type: 'toggle'
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  ...Outlined.args,
  disabled: true
};

export const OutlinedLarge = Template.bind({});
OutlinedLarge.args = {
  ...Outlined.args,
  size: 'large'
};

export const OutlinedSmall = Template.bind({});
OutlinedSmall.args = {
  ...Outlined.args,
  size: 'small'
};

export const OutlineFullWidth = Template.bind({});
OutlineFullWidth.args = {
  ...Outlined.args,
  fullWidth: true
};

export const Flat = Template.bind({});
Flat.args = {
  variant: 'flat'
};

export const FlatPill = Template.bind({});
FlatPill.args = {
  ...Flat.args,
  round: true
};

export const FlatDisabled = Template.bind({});
FlatDisabled.args = {
  ...Flat.args,
  disabled: true
};

export const FlatLarge = Template.bind({});
FlatLarge.args = {
  ...Flat.args,
  size: 'large'
};

export const FlatSmall = Template.bind({});
FlatSmall.args = {
  ...Flat.args,
  size: 'small'
};

export const FlatFullWidth = Template.bind({});
FlatFullWidth.args = {
  ...Flat.args,
  fullWidth: true
};

export const Gradient = Template.bind({});
Gradient.args = {
  variant: 'gradient'
};

export const GradientPill = Template.bind({});
GradientPill.args = {
  ...Gradient.args,
  round: true
};


export const GradientDisabled = Template.bind({});
GradientDisabled.args = {
  ...Gradient.args,
  disabled: true
};

export const GradientLarge = Template.bind({});
GradientLarge.args = {
  ...Gradient.args,
  size: 'large'
};

export const GradientSmall = Template.bind({});
GradientSmall.args = {
  ...Gradient.args,
  size: 'small'
};

export const Relief = Template.bind({});
Relief.args = {
  variant: 'relief'
};

export const ReliefPill = Template.bind({});
ReliefPill.args = {
  ...Relief.args,
  pill: true
};


export const ReliefDisabled = Template.bind({});
ReliefDisabled.args = {
  ...Relief.args,
  disabled: true
};

export const ReliefLarge = Template.bind({});
ReliefLarge.args = {
  ...Relief.args,
  size: 'large'
};

export const ReliefSmall = Template.bind({});
ReliefSmall.args = {
  ...Relief.args,
  size: 'small'
};

export default Story;
