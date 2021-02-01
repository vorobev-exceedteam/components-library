import { MdCheck, MdSearch } from 'react-icons/all';
import Alert from './Alert.component';

const Story = {
  title: 'UI/Components/Alert',
  component: Alert
};

const AlertGroup = ({ colors, ...rest }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {colors.map((color) => (
      <Alert key={color} color={color} {...rest}>
        {color}
      </Alert>
    ))}
  </div>
);

export const Default = AlertGroup.bind({});
Default.args = {
  colors: [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'dark',
    'purple'
  ]
};

export const WithTitle = AlertGroup.bind({});
WithTitle.args = {
  ...Default.args,
  title: 'Test Title'
};

export const WithIcon = AlertGroup.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <MdCheck/>
}

export const WithTitleAndIcon = AlertGroup.bind({});
WithTitleAndIcon.args = {
  ...Default.args,
  ...WithIcon.args,
  ...WithTitle.args,
  titleIcon: <MdSearch/>
}


export default Story;
