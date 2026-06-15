import type { Meta, StoryObj } from '@storybook/angular';
import { PollFilterComponent } from './poll-filter.component';
import { SharedModule } from '../../../../shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

const meta: Meta<PollFilterComponent> = {
  title: 'modules/poll/components/Poll-Filter',
  component: PollFilterComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SharedModule, FormsModule],
      providers: []
    })
  ]
};

export default meta;
type Story = StoryObj<PollFilterComponent>;

export const PollFilter: Story = {
  args: {
    categories: [
      { id: 1, name: 'Saúde' },
      { id: 2, name: 'Educação' },
      { id: 3, name: 'Segurança' },
      { id: 4, name: 'Economia' },
      { id: 5, name: 'Meio Ambiente' },
      { id: 6, name: 'Infraestrutura' },
    ],
    categoryChange: action('categoryChange'),
    openForm: action('openForm'),
  }
};
