import type { Meta, StoryObj } from '@storybook/angular';
import { PollFormComponent } from './poll-form.component';
import { SharedModule } from '../../../../shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

const meta: Meta<PollFormComponent> = {
  title: 'modules/poll/components/Poll-Form',
  component: PollFormComponent,
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
type Story = StoryObj<PollFormComponent>;

export const PollForm: Story = {
  args: {
    categories: [
      { id: 1, name: 'Saúde' },
      { id: 2, name: 'Educação' },
      { id: 3, name: 'Segurança' },
      { id: 4, name: 'Economia' },
      { id: 5, name: 'Meio Ambiente' },
      { id: 6, name: 'Infraestrutura' },
    ],
    answers: [
      'Apoio totalmente',
      'Sou contra',
      'Não tenho opinião formada',
    ],
    submitted: false,
    formClosed: action('formClosed'),
  }
};

export const PollFormSubmitted: Story = {
  args: {
    categories: [
      { id: 1, name: 'Saúde' },
      { id: 2, name: 'Educação' },
      { id: 3, name: 'Segurança' },
      { id: 4, name: 'Economia' },
      { id: 5, name: 'Meio Ambiente' },
      { id: 6, name: 'Infraestrutura' },
    ],
    answers: [
      'Apoio totalmente',
      'Sou contra',
      'Não tenho opinião formada',
    ],
    submitted: true,
    formClosed: action('formClosed'),
  }
};
