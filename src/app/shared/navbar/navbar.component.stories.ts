import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { NavbarComponent } from './navbar.component';

const meta: Meta<NavbarComponent> = {
  title: 'modules/shared/components/navbar',
  component: NavbarComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NavbarComponent>;

export const Navbar: Story = {
    args: {
        logo: "/logo.png",
        user:{
            id: 1,
            name: "Ricardo Oliveira Silva",
            photo: "https://i.pravatar.cc/150?img=68",
            unreadNotifications: 3
        }
     },
};