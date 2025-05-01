import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ShareComponent } from './share.component';

const meta: Meta<ShareComponent> = {
  title: 'shared/components/Share-Component',
  component: ShareComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ShareComponent>;

export const Share: Story = {
    args: {
        
     },
};