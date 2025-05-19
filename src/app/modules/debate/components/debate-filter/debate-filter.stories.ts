import type { Meta, StoryObj } from '@storybook/angular';
import { DebateFilterComponent } from './debate-filter.component';

const meta: Meta<DebateFilterComponent> = {
  title: 'modules/debate/components/debate-filter',
  component: DebateFilterComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<DebateFilterComponent>;

export const DebateFilter: Story = {
  args: {
    topics: [
      {
        id: 1,
        name: 'Lorem'
      },
      {
        id: 2,
        name: 'Ipsum'
      },
      {
        id: 3,
        name: 'Dolor'
      },
      {
        id: 4,
        name: 'Sit'
      },
      {
        id: 5,
        name: 'Amet'
      },
    ],

    keywords: [
      {
        id: 1,
        name: 'Lorem'
      },
      {
        id: 2,
        name: 'Ipsum'
      },
      {
        id: 3,
        name: 'Dolor'
      },
      {
        id: 4,
        name: 'Sit'
      },
      {
        id: 5,
        name: 'Amet'
      },
    ]
  }
};