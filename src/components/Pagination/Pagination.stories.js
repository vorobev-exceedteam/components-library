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
      type: 'boolean'
    },
    nextPreviousButtons: {
      defaultValue: true,
      type: 'boolean'
    },
    pagesBeforeCollapse: {
      defaultValue: 5,
      type: 'number'
    },
    pagesWithinCollapse: {
      defaultValue: 1,
      type: 'number'
    },
    color: {
      control: 'color'
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

export const Default = ({ color, colorType, ...args }) => {

  let actualColor = colorType;
  if (colorType === 'custom') {
    actualColor = color
  }

  return <Pagination color={actualColor} {...args} />
};

export default Story;
