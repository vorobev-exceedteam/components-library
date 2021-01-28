import React from 'react';
import IconButton from './IconButton.component';
import {BsHouseDoor} from 'react-icons/all'

const Story = {
  title: 'UI/Components/IconButton',
  component: IconButton
};

const testIcon = <BsHouseDoor/>

const IconButtonColorGroup = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '8px'
    }}
  >
    <IconButton color={'primary'} {...args}>
      {testIcon}
    </IconButton>
    <IconButton color={'secondary'} {...args}>
      {testIcon}
    </IconButton>
    <IconButton color={'success'} {...args}>
      {testIcon}
    </IconButton>
    <IconButton color={'danger'} {...args}>
      {testIcon}
    </IconButton>
    <IconButton color={'warning'} {...args}>
      {testIcon}
    </IconButton>
    <IconButton color={'info'} {...args}>
      {testIcon}
    </IconButton>
    <IconButton color={'dark'} {...args}>
      {testIcon}
    </IconButton>
    <IconButton color={'cyan'} {...args}>
      {testIcon}
    </IconButton>
  </div>
);

export const Filled = IconButtonColorGroup.bind({});

export const FilledRound = IconButtonColorGroup.bind({});
FilledRound.args = {
  round: true
};

export const FilledActive = IconButtonColorGroup.bind({});
FilledActive.args = {
  active: true
};

export const FilledDisabled = IconButtonColorGroup.bind({});
FilledDisabled.args = {
  disabled: true
};

export const FilledLarge = IconButtonColorGroup.bind({});
FilledLarge.args = {
  size: 'large'
};

export const FilledSmall = IconButtonColorGroup.bind({});
FilledSmall.args = {
  size: 'small'
};

export const FilledFullWidth = IconButtonColorGroup.bind({});
FilledFullWidth.args = {
  fullWidth: true
};

export const Outlined = IconButtonColorGroup.bind({});
Outlined.args = {
  variant: 'outlined'
};

export const OutlinedRound = IconButtonColorGroup.bind({});
OutlinedRound.args = {
  ...Outlined.args,
  round: true
};

export const OutlinedActive = IconButtonColorGroup.bind({});
OutlinedActive.args = {
  ...Outlined.args,
  active: true
};

export const OutlinedDisabled = IconButtonColorGroup.bind({});
OutlinedDisabled.args = {
  ...Outlined.args,
  disabled: true
};

export const OutlinedLarge = IconButtonColorGroup.bind({});
OutlinedLarge.args = {
  ...Outlined.args,
  size: 'large'
};

export const OutlinedSmall = IconButtonColorGroup.bind({});
OutlinedSmall.args = {
  ...Outlined.args,
  size: 'small'
};

export const OutlineFullWidth = IconButtonColorGroup.bind({});
OutlineFullWidth.args = {
  ...Outlined.args,
  fullWidth: true
};

export const Flat = IconButtonColorGroup.bind({});
Flat.args = {
  variant: 'flat'
};

export const FlatRound = IconButtonColorGroup.bind({});
FlatRound.args = {
  ...Flat.args,
  round: true
};

export const FlatActive = IconButtonColorGroup.bind({});
FlatActive.args = {
  ...Flat.args,
  active: true
};

export const FlatDisabled = IconButtonColorGroup.bind({});
FlatDisabled.args = {
  ...Flat.args,
  disabled: true
};

export const FlatLarge = IconButtonColorGroup.bind({});
FlatLarge.args = {
  ...Flat.args,
  size: 'large'
};

export const FlatSmall = IconButtonColorGroup.bind({});
FlatSmall.args = {
  ...Flat.args,
  size: 'small'
};

export const FlatFullWidth = IconButtonColorGroup.bind({});
FlatFullWidth.args = {
  ...Flat.args,
  fullWidth: true
};

export const Gradient = IconButtonColorGroup.bind({});
Gradient.args = {
  variant: 'gradient'
};

export const GradientRound = IconButtonColorGroup.bind({});
GradientRound.args = {
  ...Gradient.args,
  round: true
};

export const GradientActive = IconButtonColorGroup.bind({});
GradientActive.args = {
  ...Gradient.args,
  active: true
};

export const GradientDisabled = IconButtonColorGroup.bind({});
GradientDisabled.args = {
  ...Gradient.args,
  disabled: true
};

export const GradientLarge = IconButtonColorGroup.bind({});
GradientLarge.args = {
  ...Gradient.args,
  size: 'large'
};

export const GradientSmall = IconButtonColorGroup.bind({});
GradientSmall.args = {
  ...Gradient.args,
  size: 'small'
};

export const Relief = IconButtonColorGroup.bind({});
Relief.args = {
  variant: 'relief'
};

export const ReliefRound = IconButtonColorGroup.bind({});
ReliefRound.args = {
  ...Relief.args,
  round: true
};

export const ReliefActive = IconButtonColorGroup.bind({});
ReliefActive.args = {
  ...Relief.args,
  active: true
};

export const ReliefDisabled = IconButtonColorGroup.bind({});
ReliefDisabled.args = {
  ...Relief.args,
  disabled: true
};

export const ReliefLarge = IconButtonColorGroup.bind({});
ReliefLarge.args = {
  ...Relief.args,
  size: 'large'
};

export const ReliefSmall = IconButtonColorGroup.bind({});
ReliefSmall.args = {
  ...Relief.args,
  size: 'small'
};


export default Story;
