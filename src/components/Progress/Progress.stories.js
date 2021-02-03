import Progress from './Progress.component';

const Story = {
  title: 'UI/Components/Progress',
  component: Progress,
  argTypes: {
    color: {
      defaultValue: 'blue',
      control: { type: 'color' }
    },
    colorType: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'info',
          'success',
          'danger',
          'warning',
          'dark',
          'custom'
        ]
      }
    },
    percentage: {
      defaultValue: 10,
      control: { type: 'range', min: 0, max: 100, step: 5 }
    },
    infinite: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    stripped: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    animated: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = ({ colorType, color, ...rest }) => {
  let actualColor = colorType;
  if (colorType === 'custom') {
    actualColor = color;
  }
  return <Progress color={actualColor} {...rest} />;
};

export const Default = Template.bind({});

export default Story;
