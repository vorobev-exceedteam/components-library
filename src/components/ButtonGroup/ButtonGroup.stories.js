import React from 'react';
import Button from '../Button/Button.component';
import { action } from '@storybook/addon-actions';
import { BsHouseDoor } from 'react-icons/all';
import ButtonGroup from './ButtonGroup.component';
import IconButton from '../IconButton/IconButton.component';

const Story = {
  title: 'UI/Components/ButtonGroup',
  component: ButtonGroup,
};

const RegularButtons = (args) => (
  <ButtonGroup onChange={action('onButtonChange')} {...args}>
    <Button color={'primary'}>First</Button>
    <Button color={'primary'}>Second</Button>
    <Button color={'primary'}>Third</Button>
  </ButtonGroup>
);

const IconButtonsButtons = (args) => (
  <ButtonGroup {...args}>
    <IconButton color={'primary'}><BsHouseDoor/></IconButton>
    <IconButton color={'primary'}><BsHouseDoor/></IconButton>
    <IconButton color={'primary'}><BsHouseDoor/></IconButton>
  </ButtonGroup>
);

export const Filled = RegularButtons.bind({});

export const FilledPill = RegularButtons.bind({});
FilledPill.args = {
  pill: true
};

export const FilledRadio = RegularButtons.bind({});
FilledRadio.args = {
  type: 'radio',
};

export const FilledDisabled = RegularButtons.bind({});
FilledDisabled.args = {
  disabled: true
};

export const FilledLarge = RegularButtons.bind({});
FilledLarge.args = {
  size: 'large'
};

export const FilledSmall = RegularButtons.bind({});
FilledSmall.args = {
  size: 'small'
};

export const FilledFullWidth = RegularButtons.bind({});
FilledFullWidth.args = {
  fullWidth: true
};

export const Outlined = RegularButtons.bind({});
Outlined.args = {
  variant: 'outlined'
};

export const OutlinedPill = RegularButtons.bind({});
OutlinedPill.args = {
  ...Outlined.args,
  pill: true
};

export const OutlinedRadio = RegularButtons.bind({});
OutlinedRadio.args = {
  ...Outlined.args,
  type: 'radio',
};

export const OutlinedDisabled = RegularButtons.bind({});
OutlinedDisabled.args = {
  ...Outlined.args,
  disabled: true
};

export const OutlinedLarge = RegularButtons.bind({});
OutlinedLarge.args = {
  ...Outlined.args,
  size: 'large'
};

export const OutlinedSmall = RegularButtons.bind({});
OutlinedSmall.args = {
  ...Outlined.args,
  size: 'small'
};

export const OutlineFullWidth = RegularButtons.bind({});
OutlineFullWidth.args = {
  ...Outlined.args,
  fullWidth: true
};

export const Flat = RegularButtons.bind({});
Flat.args = {
  variant: 'flat'
};

export const FlatPill = RegularButtons.bind({});
FlatPill.args = {
  ...Flat.args,
  pill: true
};

export const FlatRadio = RegularButtons.bind({});
FlatRadio.args = {
  ...Flat.args,
  type: 'radio',
};

export const FlatDisabled = RegularButtons.bind({});
FlatDisabled.args = {
  ...Flat.args,
  disabled: true
};

export const FlatLarge = RegularButtons.bind({});
FlatLarge.args = {
  ...Flat.args,
  size: 'large'
};

export const FlatSmall = RegularButtons.bind({});
FlatSmall.args = {
  ...Flat.args,
  size: 'small'
};

export const FlatFullWidth = RegularButtons.bind({});
FlatFullWidth.args = {
  ...Flat.args,
  fullWidth: true
};

export const Gradient = RegularButtons.bind({});
Gradient.args = {
  variant: 'gradient'
};

export const GradientPill = RegularButtons.bind({});
GradientPill.args = {
  ...Gradient.args,
  pill: true
};

export const GradientRadio = RegularButtons.bind({});
GradientRadio.args = {
  ...Gradient.args,
  type: 'radio',
};

export const GradientDisabled = RegularButtons.bind({});
GradientDisabled.args = {
  ...Gradient.args,
  disabled: true
};

export const GradientLarge = RegularButtons.bind({});
GradientLarge.args = {
  ...Gradient.args,
  size: 'large'
};

export const GradientSmall = RegularButtons.bind({});
GradientSmall.args = {
  ...Gradient.args,
  size: 'small'
};

export const Relief = RegularButtons.bind({});
Relief.args = {
  variant: 'relief'
};

export const ReliefPill = RegularButtons.bind({});
ReliefPill.args = {
  ...Relief.args,
  pill: true
};

export const ReliefRadio = RegularButtons.bind({});
ReliefRadio.args = {
  ...Relief.args,
  type: 'radio',
};

export const ReliefDisabled = RegularButtons.bind({});
ReliefDisabled.args = {
  ...Relief.args,
  disabled: true
};

export const ReliefLarge = RegularButtons.bind({});
ReliefLarge.args = {
  ...Relief.args,
  size: 'large'
};

export const ReliefSmall = RegularButtons.bind({});
ReliefSmall.args = {
  ...Relief.args,
  size: 'small'
};

export default Story;
