import { MdAccessibility } from 'react-icons/all';
import BaseListGroup from '../Base/BaseListGroup';
import BaseListItem from '../Base/BaseListItem';
import Typography from '../Typography/Typography.component';

const Story = {
  title: 'UI/Components/List',
  argTypes: {
    text: {
      defaultValue: 'Test Test Test',
      control: 'text'
    },
    color: {
      control: 'color'
    },
    button: {
      defaultValue: false,
      control: 'boolean'
    },
    disabled: {
      defaultValue: false,
      control: 'boolean'
    },
    numberOfItems: {
      defaultValue: 5,
      type: 'number'
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
    }
  }
};

export const Delault = ({ numberOfItems, text, color, colorType, ...args }) => {
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
  const items = [];
  for (let k = 0; k < numberOfItems; k++) {
    items.push(k);
  }
  return (
    <BaseListGroup>
      {items.map((item) => (
        <BaseListItem key={item} {...args} color={actualColor}>
          {text}
        </BaseListItem>
      ))}
    </BaseListGroup>
  );
};
export const WithIcon = ({
  numberOfItems,
  text,
  color,
  colorType,
  ...args
}) => {
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
  const items = [];
  for (let k = 0; k < numberOfItems; k++) {
    items.push(k);
  }
  return (
    <BaseListGroup>
      {items.map((item) => (
        <BaseListItem key={item} {...args} color={actualColor}>
          <MdAccessibility />
          {text}
        </BaseListItem>
      ))}
    </BaseListGroup>
  );
};

export default Story;
