import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DebateContributionComponent } from './debate-contribution.component';
import { FormsModule } from '@angular/forms';

const meta: Meta<DebateContributionComponent> = {
  title: 'modules/debate/components/debate-contribution',
  component: DebateContributionComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    })
  ]
};

export default meta;
type Story = StoryObj<DebateContributionComponent>;

export const DebateContribution: Story = {
};