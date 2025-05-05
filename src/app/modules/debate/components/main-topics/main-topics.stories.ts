import type { Meta, StoryObj } from '@storybook/angular';
import { MainTopicsComponent } from './main-topics.component';

const meta: Meta<MainTopicsComponent> = {
  title: 'modules/debate/components/main-topics',
  component: MainTopicsComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<MainTopicsComponent>;

export const MainTopics: Story = {
  args: {
  }
};