import { MdCheck, MdSearch } from 'react-icons/all';
import Alert from './Alert.component';

const Story = {
  title: 'UI/Components/Alert',
  component: Alert,
  argTypes: {
    text: {
      defaultValue: 'Test',
      control: 'text'
    },
    customColor: {
      control: 'color'
    }
  }
};

const AlertGroup = ({ customColor, text, colors, ...rest }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
    {colors.map((color) => {
      if (color === 'custom') {
        return (
          <Alert key={color} color={customColor} {...rest}>
            {text}
          </Alert>
        );
      }
      return (
        <Alert key={color} color={color} {...rest}>
          {text}
        </Alert>
      );
    })}
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
    'custom'
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
  icon: <MdCheck />
};

export const WithTitleAndIcon = AlertGroup.bind({});
WithTitleAndIcon.args = {
  ...Default.args,
  ...WithIcon.args,
  ...WithTitle.args,
  titleIcon: <MdSearch />
};

export default Story;
