import Pagination from './Pagination.component';

const Story = {
  title: 'UI/Components/Pagination',
  component: Pagination,
  argTypes: {
    totalElements: {
      defaultValue: 100,
      type: 'number'
    },
    limit: {
      defaultValue: 10,
      type: 'number'
    },
    firstLastButtons: {
      defaultValue: true,
      type: 'boolean',
    }
  }
};

export const Default = (args) => <Pagination {...args} />;

export default Story;
