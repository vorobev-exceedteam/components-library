import React from 'react';
import { BsStar } from 'react-icons/all';
import Badge from './Badge.component';

const Story = {
  title: 'UI/Components/Badge',
  component: Badge
};

const Badges = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '8px'
    }}
  >
    <Badge color={'primary'} {...args}>
      Primary
    </Badge>
    <Badge color={'secondary'} {...args}>
      Secondary
    </Badge>
    <Badge color={'success'} {...args}>
      Success
    </Badge>
    <Badge color={'danger'} {...args}>
      Danger
    </Badge>
    <Badge color={'warning'} {...args}>
      Warning
    </Badge>
    <Badge color={'info'} {...args}>
      Info
    </Badge>
    <Badge color={'dark'} {...args}>
      Dark
    </Badge>
    <Badge color={'cyan'} {...args}>
      Custom
    </Badge>
  </div>
);

export const Default = Badges.bind({});

export const Glowing = Badges.bind({});
Glowing.args = {
  glow: true
};

export const Light = Badges.bind({});
Light.args = {
  light: true
};

export const LightGlowing = Badges.bind({});
LightGlowing.args = {
  glow: true,
  light: true
};

export const WithIcon = Badges.bind({});
WithIcon.args = {
  icon: <BsStar/>
};

export const DefaultButton = Badges.bind({});
DefaultButton.args = {
  button:true
}

export const GlowingButton = Badges.bind({});
GlowingButton.args = {
  ...DefaultButton.args,
  glow: true
};

export const LightButton = Badges.bind({});
LightButton.args = {
  ...DefaultButton.args,
  light: true
};

export const LightGlowingButton = Badges.bind({});
LightGlowingButton.args = {
  ...DefaultButton.args,
  glow: true,
  light: true
};

export const WithIconButton = Badges.bind({});
WithIconButton.args = {
  ...DefaultButton.args,
  icon: <BsStar/>
};

export default Story;
