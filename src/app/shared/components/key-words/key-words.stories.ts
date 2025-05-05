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
     },
};