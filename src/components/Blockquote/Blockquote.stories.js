import Typography from '../Typography/Typography.component';
import Blockquote from './Blockquote.component';

const Story = {
  title: 'UI/Typography/Blockquote',
  component: Blockquote,
  argTypes: {
    align: {
      defaultValue: 'left',
      control: {
        type: 'select',
        options: ['center', 'left', 'right']
      }
    },
    footerAlign: {
      defaultValue: 'left',
      control: {
        type: 'select',
        options: ['center', 'left', 'right']
      }
    }
  }
};

const Template = (args) => (
  <Blockquote {...args}>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad
      eligendi exercitationem in itaque laboriosam nihil, officia omnis placeat
      quam reprehenderit repudiandae, sapiente tempore, tenetur totam vel velit
      voluptate voluptatem.
    </Typography>
  </Blockquote>
);

export const Default = Template.bind({});
export const DefaultBorderRight = Template.bind({});
DefaultBorderRight.args = {
  borderRight: true
};
export const DefaultBorderLeft = Template.bind({});
DefaultBorderLeft.args = {
  borderLeft: true
};

export const DefaultWithFooter = Template.bind({});
DefaultWithFooter.args = {
  footer: 'Test'
};


export default Story;
