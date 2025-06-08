import type { Meta, StoryObj } from '@storybook/angular';
import { DebateFilterComponent } from './debate-filter.component';
import { SharedModule } from '../../../../shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

const meta: Meta<DebateFilterComponent> = {
  title: 'modules/debate/components/Debate-Filter',
  component: DebateFilterComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SharedModule, FormsModule]
    })
  ]
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
    ],
    handleStartDateChange: action('handleStartDateChange'),
    handleEndDateChange: action('handleEndDateChange')
  }
};