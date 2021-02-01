import Input from './Input.component';


const Story = {
  title: 'UI/Components/Input',
  component: Input
}

const Template = (args) => <Input {...args}/>

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Test',
}

export const DefaultLarge = Template.bind({})
DefaultLarge.args = {
  ...Default.args,
  size:'large'
}

export const DefaultSmall = Template.bind({})
DefaultSmall.args = {
  ...Default.args,
  size:'small'
}

export const DefaultValid = Template.bind({})
DefaultValid.args = {
  valid: true,
  placeholder: 'Valid',
}

export const DefaultInvalid = Template.bind({})
DefaultInvalid.args = {
  invalid: true,
  placeholder: 'Invalid',
}

export default Story;
