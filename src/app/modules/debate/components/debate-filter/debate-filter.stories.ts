import type { Meta, StoryObj } from '@storybook/angular';
import { DebateFilterComponent } from './debate-filter.component';

const meta: Meta<DebateFilterComponent> = {
  title: 'modules/debate/components/debate-filter',
  component: DebateFilterComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<DebateFilterComponent>;

export const DebateFilter: Story = {
  args: {
  }
};