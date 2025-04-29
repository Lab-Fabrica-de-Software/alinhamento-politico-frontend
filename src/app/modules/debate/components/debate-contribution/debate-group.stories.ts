import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { DebateContributionComponent } from './debate-contribution.component';

const meta: Meta<DebateContributionComponent> = {
  title: 'modules/debate/components/Debate-Contribution',
  component: DebateContributionComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DebateContributionComponent>;

export const Contribuição: Story = {
    args: {

     },
};

export const ContribuiçãoPolítico: Story = {
    args: {

     },
};