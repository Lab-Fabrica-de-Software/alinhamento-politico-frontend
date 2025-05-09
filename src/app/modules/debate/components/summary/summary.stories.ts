import type { Meta, StoryObj } from '@storybook/angular';
import { SummaryComponent } from './summary.component';
import { AIText } from '../../../../core/models/ai-text';

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
    aiText: {
        id: 1,
        summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque volutpat lectus nulla, eget placerat nisl blandit nec. 
        Vivamus lobortis porttitor turpis, eget iaculis arcu laoreet vulputate.`
    }
  }
};