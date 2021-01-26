import React from 'react';
import { ThemeProvider } from 'styled-components';
import RoundedButton from './RoundedButton.component';
import theme from '../../../theme/defaultTheme';

const Story = {
  title: 'UI/Button/Rounded',
  component: RoundedButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

const Template = (args) => <RoundedButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'primary'
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  ...Primary.args,
  children: 'primary disabled',
  disabled: true
};

export const PrimaryActive = Template.bind({});
PrimaryActive.args = {
  ...Primary.args,
  children: 'primary active',
  active: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'success'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'danger'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'warning'
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'info'
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  children: 'light'
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  children: 'dark'
};

export default Story;
