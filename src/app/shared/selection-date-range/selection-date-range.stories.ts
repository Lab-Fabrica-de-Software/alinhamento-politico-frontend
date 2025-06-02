import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SelectionDateRangeComponent } from './selection-date-range.component';
import { NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PtBrDateParserFormatter } from '../../core/shared/formatters/pt-br-date-parser-formatter';

const meta: Meta<SelectionDateRangeComponent> = {
  title: 'modules/shared/components/selection-date-range',
  component: SelectionDateRangeComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
  },
  decorators: [
    moduleMetadata({
      imports: [NgbDatepickerModule, FormsModule],
      providers: [
        {provide: NgbDateParserFormatter, useClass: PtBrDateParserFormatter}
      ]
    }),
  ],
};

export default meta;
type Story = StoryObj<SelectionDateRangeComponent>;

export const SelectionDateRange: Story = {
  args: {
    isFilter: false
  }
};
