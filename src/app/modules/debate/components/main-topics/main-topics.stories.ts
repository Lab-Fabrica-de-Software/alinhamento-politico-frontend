import type { Meta, StoryObj } from '@storybook/angular';
import { MainTopicsComponent } from './main-topics.component';

const meta: Meta<MainTopicsComponent> = {
  title: 'modules/debate/components/Main-Topics',
  component: MainTopicsComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<MainTopicsComponent>;

export const MainTopics: Story = {
  args: {
    aiText: {
      id: 1,
      supporters: `Praesent consequat, eros quis varius feugiat,
      libero odio consectetur eros, ac pretium leo nibh in lorem.
      Nam vitae eros ac est placerat pellentesque quis in lacus. 
      Morbi non commodo elit.`,
      nonSupporters: `Praesent consequat, eros quis varius feugiat, 
      libero odio consectetur eros, ac pretium leo nibh in lorem. 
      Nam vitae eros ac est placerat pellentesque quis in lacus. 
      Morbi non commodo elit.`
    }
  }
};