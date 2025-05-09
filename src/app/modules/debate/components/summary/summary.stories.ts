import type { Meta, StoryObj } from '@storybook/angular';
import { SummaryComponent } from './summary.component';

const meta: Meta<SummaryComponent> = {
  title: 'modules/debate/components/summary',
  component: SummaryComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<SummaryComponent>;

export const Summary: Story = {
  args: {
  }
};