import Typography from './Typography.component';

const Story = {
  title: 'UI/Typography/Basic',
  component: Typography
};

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const displays = ['display1', 'display2', 'display3', 'display4'];
const colors = ['primary', 'secondary', 'info', 'danger', 'success', 'warn'];

const Headings = (args) => headings.map((heading) => {
  return (
    <Typography variant={heading} {...args}>
      {heading}
    </Typography>)
});



export const HeadingsDefault = Headings.bind({});


export default Story;
