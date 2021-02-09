import BaseCard from '../Base/BaseCard';
import BaseCardBody from '../Base/BaseCard/BaseCardBody';
import BaseCardSubtitle from '../Base/BaseCard/BaseCardSubtitle';
import BaseCardText from '../Base/BaseCard/BaseCardText';
import BaseCardTitle from '../Base/BaseCard/BaseCardTitle';
import Button from '../Button/Button.component';
import IconButton from '../IconButton/IconButton.component';
import ImageFluid from '../ImageFluid';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
  'Aliquam consectetur eaque ipsa minima quam quia quidem ' +
  'repudiandae tenetur vel. Aliquam architecto culpa earum ' +
  'eveniet harum maiores molestias, recusandae reiciendis tempore!';

const alignOptions = ['center', 'left', 'right'];

const Story = {
  title: 'UI/Components/Card',
  component: IconButton,
  argTypes: {
    title: {
      defaultValue: 'Card Title',
      control: 'text'
    },
    subtitle: {
      defaultValue: 'Card Subtitle',
      control: 'text'
    },
    content: {
      defaultValue: lorem,
      control: 'text'
    }

  }
};

export const Default = ({ title, subtitle, content, ...args }) => (
  <div
    style={{
      width: '300px',
      height: '500px',
      margin: '20px'
    }}
  >
    <BaseCard>
      <BaseCardBody>
        <BaseCardTitle>{title}</BaseCardTitle>
        <BaseCardSubtitle>{subtitle}</BaseCardSubtitle>
      </BaseCardBody>
      <ImageFluid src={'https://picsum.photos/500'} alt={'pic'} />
      <BaseCardBody>
        <BaseCardText>{content}</BaseCardText>
        <Button>Test</Button>
      </BaseCardBody>
    </BaseCard>
  </div>
);
export const TitleBelowImage = ({ title, subtitle, content, ...args }) => (
  <div
    style={{
      width: '300px',
      height: '500px',
      margin: '20px'
    }}
  >
    <BaseCard>
      <ImageFluid src={'https://picsum.photos/500'} alt={'pic'} />
      <BaseCardBody>
        <BaseCardTitle>{title}</BaseCardTitle>
        <BaseCardSubtitle>{subtitle}</BaseCardSubtitle>
        <BaseCardText>{content}</BaseCardText>
        <Button>Test</Button>
      </BaseCardBody>
    </BaseCard>
  </div>
);

export default Story;
