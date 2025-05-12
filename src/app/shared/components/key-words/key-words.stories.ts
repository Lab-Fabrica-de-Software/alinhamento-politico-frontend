import type { Meta, StoryObj } from '@storybook/angular';
import { KeyWordsComponent } from './key-words.component';
import { FormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<KeyWordsComponent> = {
  title: 'shared/components/key-words',
  component: KeyWordsComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
  moduleMetadata({
    imports: [FormsModule],
  }),
]
};

export default meta;
type Story = StoryObj<KeyWordsComponent>;

export const KeyWords: Story = {
    args: {
      keywords: [
        {
          id: 1,
          name: 'mollis'
        },
        {
          id: 2,
          name: 'consectetur'
        },
        {
          id: 3,
          name: 'lectus'
        },
        {
          id: 4,
          name: 'triciduntel'
        },
        {
          id: 5,
          name: 'phasellus'
        },
        {
          id: 6,
          name: 'hendrerir'
        },
        {
          id: 7,
          name: 'ipsum'
        },
        {
          id: 8,
          name: 'mauris'
        },
        {
          id: 9,
          name: 'faubicus'
        },
        {
          id: 10,
          name: 'consequanont'
        },
      ]
     },
};