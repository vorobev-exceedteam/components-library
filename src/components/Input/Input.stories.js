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

export default Story;
