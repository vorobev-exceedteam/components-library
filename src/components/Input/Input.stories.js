import Input from './Input.component';


const Story = {
  title: 'UI/Components/Input',
  component: Input
}

const Template = (args) => <Input {...args}/>

export const Default = Template.bind({})
Default.args = {
  label: 'Test Label',
  placeholder: 'Test',
  helperText: 'Test Helper Text'
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

export const Valid = Template.bind({})
Valid.args = {
  ...Default.args,
  valid: true,
  placeholder: 'Valid',
}

export const Invalid = Template.bind({})
Invalid.args = {
  ...Default.args,
  invalid: true,
  placeholder: 'Invalid',
}

export default Story;
