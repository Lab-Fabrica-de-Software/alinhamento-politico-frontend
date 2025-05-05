import type { Meta, StoryObj } from '@storybook/angular';
import { KeyWordsComponent } from './key-words.component';

const meta: Meta<KeyWordsComponent> = {
  title: 'shared/components/key-words',
  component: KeyWordsComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<KeyWordsComponent>;

export const KeyWords: Story = {
    args: {
      categories: [
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
          id: 8,
          name: 'faubicus'
        },
        {
          id: 10,
          name: 'consequanont'
        },
      ]
     },
};