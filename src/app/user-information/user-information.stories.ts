import type { Meta, StoryObj } from '@storybook/angular';
import { UserInformationComponent } from './user-information.component'; 

const meta: Meta<UserInformationComponent> = {
  title: 'shared/components/User-Information',
  component: UserInformationComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UserInformationComponent>;

export const UserInformation: Story = {
    args: {
        user: {
            id: 1,
            name: 'Jorge Antunes',
            photo: 'https://i.pravatar.cc/80?img=6',
            verified: true,
            partyId: 2,
            partyName: 'Partido Verde',
            partyPosition: 'Vereador',
        },
        actionDate: new Date('2025-03-01T12:00:00Z'),
     },
};

export const UserInformationHorizontal: Story = {
    args: {
        user: {
            id: 1,
            name: 'Jorge Antunes',
            photo: 'https://i.pravatar.cc/80?img=6',
            verified: true,
            partyId: 2,
        },
        actionDate: new Date('2023-03-01T12:00:00Z'),
        isHorizontal: true,
    },
};