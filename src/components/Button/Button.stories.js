import React from 'react';
import Button from './Button.component';
import { BsHouseDoor } from 'react-icons/all';

const Story = {
  title: 'UI/Components/Button',
  component: Button
};

const testIcon = <BsHouseDoor />;

const ButtonColorGroup = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '8px'
    }}
  >
    <Button color={'primary'} {...args}>
      Primary
    </Button>
    <Button color={'secondary'} {...args}>
      Secondary
    </Button>
    <Button color={'success'} {...args}>
      Success
    </Button>
    <Button color={'danger'} {...args}>
      Danger
    </Button>
    <Button color={'warning'} {...args}>
      Warning
    </Button>
    <Button color={'info'} {...args}>
      Info
    </Button>
    <Button color={'dark'} {...args}>
      Dark
    </Button>
    <Button color={'cyan'} {...args}>
      Custom
    </Button>
  </div>
);

const ButtonVariantsGroup = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '8px'
    }}
  >
    <Button color={'primary'} {...args}>
      Filled
    </Button>
    <Button color={'primary'} variant={'outlined'} {...args}>
      Outlined
    </Button>
    <Button color={'primary'} variant={'flat'} {...args}>
      Flat
    </Button>
    <Button color={'primary'} variant={'gradient'} {...args}>
      Gradient
    </Button>
    <Button color={'primary'} variant={'relief'} {...args}>
      Relief
    </Button>
  </div>
);

export const Filled = ButtonColorGroup.bind({});

export const FilledPill = ButtonColorGroup.bind({});
FilledPill.args = {
  pill: true
};

export const FilledActive = ButtonColorGroup.bind({});
FilledActive.args = {
  active: true
};

export const FilledDisabled = ButtonColorGroup.bind({});
FilledDisabled.args = {
  disabled: true
};

export const FilledLarge = ButtonColorGroup.bind({});
FilledLarge.args = {
  size: 'large'
};

export const FilledSmall = ButtonColorGroup.bind({});
FilledSmall.args = {
  size: 'small'
};

export const FilledFullWidth = ButtonColorGroup.bind({});
FilledFullWidth.args = {
  fullWidth: true
};

export const Outlined = ButtonColorGroup.bind({});
Outlined.args = {
  variant: 'outlined'
};

export const OutlinedPill = ButtonColorGroup.bind({});
OutlinedPill.args = {
  ...Outlined.args,
  pill: true
};

export const OutlinedActive = ButtonColorGroup.bind({});
OutlinedActive.args = {
  ...Outlined.args,
  active: true
};

export const OutlinedDisabled = ButtonColorGroup.bind({});
OutlinedDisabled.args = {
  ...Outlined.args,
  disabled: true
};

export const OutlinedLarge = ButtonColorGroup.bind({});
OutlinedLarge.args = {
  ...Outlined.args,
  size: 'large'
};

export const OutlinedSmall = ButtonColorGroup.bind({});
OutlinedSmall.args = {
  ...Outlined.args,
  size: 'small'
};

export const OutlineFullWidth = ButtonColorGroup.bind({});
OutlineFullWidth.args = {
  ...Outlined.args,
  fullWidth: true
};

export const Flat = ButtonColorGroup.bind({});
Flat.args = {
  variant: 'flat'
};

export const FlatPill = ButtonColorGroup.bind({});
FlatPill.args = {
  ...Flat.args,
  pill: true
};

export const FlatActive = ButtonColorGroup.bind({});
FlatActive.args = {
  ...Flat.args,
  active: true
};

export const FlatDisabled = ButtonColorGroup.bind({});
FlatDisabled.args = {
  ...Flat.args,
  disabled: true
};

export const FlatLarge = ButtonColorGroup.bind({});
FlatLarge.args = {
  ...Flat.args,
  size: 'large'
};

export const FlatSmall = ButtonColorGroup.bind({});
FlatSmall.args = {
  ...Flat.args,
  size: 'small'
};

export const FlatFullWidth = ButtonColorGroup.bind({});
FlatFullWidth.args = {
  ...Flat.args,
  fullWidth: true
};

export const Gradient = ButtonColorGroup.bind({});
Gradient.args = {
  variant: 'gradient'
};

export const GradientPill = ButtonColorGroup.bind({});
GradientPill.args = {
  ...Gradient.args,
  pill: true
};

export const GradientActive = ButtonColorGroup.bind({});
GradientActive.args = {
  ...Gradient.args,
  active: true
};

export const GradientDisabled = ButtonColorGroup.bind({});
GradientDisabled.args = {
  ...Gradient.args,
  disabled: true
};

export const GradientLarge = ButtonColorGroup.bind({});
GradientLarge.args = {
  ...Gradient.args,
  size: 'large'
};

export const GradientSmall = ButtonColorGroup.bind({});
GradientSmall.args = {
  ...Gradient.args,
  size: 'small'
};

export const Relief = ButtonColorGroup.bind({});
Relief.args = {
  variant: 'relief'
};

export const ReliefPill = ButtonColorGroup.bind({});
ReliefPill.args = {
  ...Relief.args,
  pill: true
};

export const ReliefActive = ButtonColorGroup.bind({});
ReliefActive.args = {
  ...Relief.args,
  active: true
};

export const ReliefDisabled = ButtonColorGroup.bind({});
ReliefDisabled.args = {
  ...Relief.args,
  disabled: true
};

export const ReliefLarge = ButtonColorGroup.bind({});
ReliefLarge.args = {
  ...Relief.args,
  size: 'large'
};

export const ReliefSmall = ButtonColorGroup.bind({});
ReliefSmall.args = {
  ...Relief.args,
  size: 'small'
};

export const WithIcon = ButtonVariantsGroup.bind({});
WithIcon.args = {
  icon: testIcon
};

export const WithIconDisabled = ButtonVariantsGroup.bind({});
WithIconDisabled.args = {
  ...WithIcon.args,
  disabled: true
};

export const WithIconActive = ButtonVariantsGroup.bind({});
WithIconActive.args = {
  ...WithIcon.args,
  active: true
};

export const WithIconPill = ButtonVariantsGroup.bind({});
WithIconPill.args = {
  ...WithIcon.args,
  pill: true
};

export const WithIconLarge = ButtonVariantsGroup.bind({});
WithIconLarge.args = {
  ...WithIcon.args,
  size: 'large'
};

export const WithIconSmall = ButtonVariantsGroup.bind({});
WithIconSmall.args = {
  ...WithIcon.args,
  size: 'small'
};

export default Story;
