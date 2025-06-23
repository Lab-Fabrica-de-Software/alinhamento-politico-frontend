import type { Meta, StoryObj } from '@storybook/angular';
import { DebateFilterComponent } from './debate-filter.component';
import { SharedModule } from '../../../../shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { PtBrDateParserFormatter } from '../../../../core/shared/formatters/pt-br-date-parser-formatter';

const meta: Meta<DebateFilterComponent> = {
  title: 'modules/debate/components/Debate-Filter',
  component: DebateFilterComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SharedModule, FormsModule],
      providers: [
              {provide: NgbDateParserFormatter, useClass: PtBrDateParserFormatter}
            ]
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
    submitSearchInput: action('submitSearchInput'),
    submitSelectedTopic: action('submitSelectedTopic'),
    submitStartDate: action('submitStartDate'),
    submitEndDate: action('submitEndDate'),
    submitmarkedKeywords: action('submitmarkedKeywords'),
    submitMinContributions: action('submitMinContributions')
  }
};