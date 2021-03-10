import BaseCardBody from '../../Base/BaseCard/BaseCardBody';
import BaseCard from '../../Base/BaseCard';
import Zoom from './Zoom.component';

const Story = {
  title: 'UI/Animations/Zoom',
  component: Zoom,
  argTypes: {
    unmountOnExit: { type: 'boolean', defaultValue: true },
    isActive: { type: 'boolean', defaultValue: false },
    transitionFunc: {
      defaultValue: '',
      control: {
        type: 'select',
        options: ['', 'ease', 'ease-in', 'ease-in-out', 'ease-out']
      }
    },
    duration: {
      type: 'number'
    },
  }
};

export const Default = (args) => (
  <Zoom {...args}>
    <BaseCard>
      <BaseCardBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        beatae dignissimos dolorem ducimus expedita facilis fugiat inventore
        ipsum laboriosam maxime modi nemo nobis possimus quis rem repellendus,
        tempora voluptas voluptatem!
      </BaseCardBody>
    </BaseCard>
  </Zoom>
);

export default Story;
