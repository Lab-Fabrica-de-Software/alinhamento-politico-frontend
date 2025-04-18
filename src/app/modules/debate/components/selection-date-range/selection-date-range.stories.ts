import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SelectionDateRangeComponent } from './selection-date-range.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const meta: Meta<SelectionDateRangeComponent> = {
  title: 'SelectionDateRange',
  component: SelectionDateRangeComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
  },
  decorators: [
    moduleMetadata({
      imports: [NgbDatepickerModule, FormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SelectionDateRangeComponent>;

export const Default: Story = {
};
