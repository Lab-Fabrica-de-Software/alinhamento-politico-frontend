import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ShareButtonComponent } from './share-button.component';

const meta: Meta<ShareButtonComponent> = {
  title: 'shared/components/Share-Button',
  component: ShareButtonComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ShareButtonComponent>;

export const ShareButton: Story = {
    args: {
        
     },
};