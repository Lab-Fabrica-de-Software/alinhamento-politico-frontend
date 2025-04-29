import type { Meta, StoryObj } from '@storybook/angular';
import { DebateContributionComponent } from './debate-contribution.component';

const meta: Meta<DebateContributionComponent> = {
  title: 'modules/debate/components/debate-contribution',
  component: DebateContributionComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DebateContributionComponent>;

export const DebateContribution: Story = {
};