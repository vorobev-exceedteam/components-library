import BaseCard from '../Base/BaseCard';
import BaseCardBody from '../Base/BaseCard/BaseCardBody';
import Overlay from './Overlay.component';

const Story = {
  title: 'UI/Components/Overlay',
  argTypes: {
    color: {
      control: 'color'
    },
    isShown: {
      control: 'boolean'
    },
    opacity: {
      type: 'number',
      defaultValue: 0.5,
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.05
      }
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
    }
  }
};

export const Default = ({ colorType, color, ...rest }) => {
  let actualColor;
  switch (colorType) {
    case 'custom':
      actualColor = color;
      break;
    default:
      actualColor = colorType;
      break;
  }
  return (
    <Overlay color={actualColor} {...rest}>
      <BaseCard>
        <BaseCardBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          consequatur dolore illum iste, quae quisquam repellat repellendus
          voluptatem! Ab consectetur consequatur est ex odio perferendis
          possimus recusandae, reiciendis tenetur veritatis.
        </BaseCardBody>
      </BaseCard>
    </Overlay>
  );
};

export default Story;
