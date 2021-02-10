import Button from '../Button/Button.component';
import CircularProgress from './CircularProgress.component';

const Story = {
  title: 'UI/Components/CircularProgress',
  component: CircularProgress,
  argTypes: {
    color: {
      control: 'color'
    },
    colorType: {
      defaultValue: 'default',
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
          'default',
          'custom'
        ]
      }
    },
    variant: {
      defaultValue: 'spinner',
      control: {
        type: 'select',
        options: ['spinner', 'growing']
      }
    },
    size: {
      defaultValue: 'medium',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    }
  }
};

export const Default = ({ color, colorType, ...args }) => {
  let actualColor;
  switch (colorType) {
    case 'custom':
      actualColor = color;
      break;
    case 'default':
      break;
    default:
      actualColor = colorType;
      break;
  }
  return <CircularProgress {...args} color={actualColor} />;
};

export const InsideButton = (args) => (
  <Button>
    {Default(args)}
    Test
  </Button>
);
InsideButton.args = {
  size: 'small',
  colorInherit: true,
};

export default Story;
