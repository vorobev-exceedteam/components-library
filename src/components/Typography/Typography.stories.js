import Typography from './Typography.component';

const Story = {
  title: 'UI/Typography/Basic',
  component: Typography
};

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const displays = ['display1', 'display2', 'display3', 'display4'];
const others = ['secondary', 'default', 'card-text']
const colors = ['primary', 'secondary', 'success', 'info', 'danger', 'warning'];

const Headings = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}
  >
    {headings.map((heading) => (
      <Typography variant={heading} {...args}>
        {heading}
      </Typography>
    ))}
  </div>
);

const HeadingsColors = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}
  >
    {colors.map((color, index) => (
      <Typography color={color} variant={headings[index]} {...args}>
        {color}
      </Typography>
    ))}
  </div>
);

const Others = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}
  >
    {others.map((heading) => (
      <Typography variant={heading} {...args}>
        {heading}
      </Typography>
    ))}
  </div>
);

const Displays = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}
  >
    {displays.map((heading) => (
      <Typography variant={heading} {...args}>
        {heading}
      </Typography>
    ))}
  </div>
);

export const HeadingsDefault = Headings.bind({});
export const HeadingColors = HeadingsColors.bind({})
export const HeadingsLight = Headings.bind({})
HeadingsLight.args = {
  fontWeightVariant: 'light'
}
export const HeadingsBold = Headings.bind({})
HeadingsBold.args = {
  fontWeightVariant: 'bold'
}
export const DisplaysDefault = Displays.bind({})
export const DisplaysLight = Displays.bind({})
DisplaysLight.args = {
  fontWeightVariant: 'light'
}
export const DisplaysBold = Displays.bind({})
DisplaysBold.args = {
  fontWeightVariant: 'bold'
}

export const OthersDefault = Others.bind({})

export default Story;
