
import type { Meta, StoryObj } from '@storybook/angular';

import { SelectionDateRangeComponent } from './selection-date-range.component';

const meta: Meta<SelectionDateRangeComponent> = {
  title: 'SelectionDateRange',
  component: SelectionDateRangeComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
  },
};

export default meta;
type Story = StoryObj<SelectionDateRangeComponent>;

export const Default: Story = {
};
