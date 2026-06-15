import type { Meta, StoryObj } from '@storybook/angular';
import { PollResponseComponent } from './poll-response.component';
import { SharedModule } from '../../../../shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

const meta: Meta<PollResponseComponent> = {
  title: 'modules/poll/components/Poll-Response',
  component: PollResponseComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
      providers: []
    })
  ]
};

export default meta;
type Story = StoryObj<PollResponseComponent>;

export const PollResponse: Story = {
  args: {
    poll: {
      id: 1,
      title: 'Você apoia a Reforma Tributária aprovada pelo Congresso?',
      description: 'A Reforma Tributária simplifica o sistema de impostos brasileiro, unificando diversos tributos em um único imposto sobre valor agregado (IVA).',
      category: { id: 1, name: 'Saúde' },
      expiresAt: new Date(new Date().setDate(new Date().getDate() + 25)),
      totalVotes: 5540,
      votes: [
        {
          answer: 'Apoio totalmente',
          count: 2770,
          users: [
            { id: 1, name: 'Jorge Antunes',  photo: 'https://i.pravatar.cc/80?img=1', partyId: 1, partyName: 'Partido Verde',   partyPosition: 'Vereador' },
            { id: 2, name: 'Gabriela Silva', photo: 'https://i.pravatar.cc/80?img=2', partyId: 2, partyName: 'Partido Liberal', partyPosition: 'Prefeita' },
          ]
        },
        {
          answer: 'Sou contra',
          count: 1385,
          users: [
            { id: 3, name: 'Mariana Costa', photo: 'https://i.pravatar.cc/80?img=4', partyId: 3, partyName: 'Partido Social', partyPosition: 'Vereadora' },
          ]
        },
        {
          answer: 'Não tenho opinião formada',
          count: 1385,
          users: [
            { id: 4, name: 'Carlos Lima', photo: 'https://i.pravatar.cc/80?img=3' },
          ]
        },
      ],
    },
    answers: [
      'Apoio totalmente',
      'Sou contra',
      'Não tenho opinião formada',
    ],
    voted: false,
    hasVoted: false,
    responseClosed: action('responseClosed'),
  }
};

export const PollResponseVoted: Story = {
  args: {
    poll: {
      id: 1,
      title: 'Você apoia a Reforma Tributária aprovada pelo Congresso?',
      description: 'A Reforma Tributária simplifica o sistema de impostos brasileiro, unificando diversos tributos em um único imposto sobre valor agregado (IVA).',
      category: { id: 1, name: 'Saúde' },
      expiresAt: new Date(new Date().setDate(new Date().getDate() + 25)),
      totalVotes: 5540,
      votes: [
        {
          answer: 'Apoio totalmente',
          count: 2770,
          users: [
            { id: 1, name: 'Jorge Antunes',  photo: 'https://i.pravatar.cc/80?img=1', partyId: 1, partyName: 'Partido Verde',   partyPosition: 'Vereador' },
            { id: 2, name: 'Gabriela Silva', photo: 'https://i.pravatar.cc/80?img=2', partyId: 2, partyName: 'Partido Liberal', partyPosition: 'Prefeita' },
          ]
        },
        {
          answer: 'Sou contra',
          count: 1385,
          users: [
            { id: 3, name: 'Mariana Costa', photo: 'https://i.pravatar.cc/80?img=4', partyId: 3, partyName: 'Partido Social', partyPosition: 'Vereadora' },
          ]
        },
        {
          answer: 'Não tenho opinião formada',
          count: 1385,
          users: [
            { id: 4, name: 'Carlos Lima', photo: 'https://i.pravatar.cc/80?img=3' },
          ]
        },
      ],
    },
    answers: [
      'Apoio totalmente',
      'Sou contra',
      'Não tenho opinião formada',
    ],
    voted: true,
    hasVoted: true,
    responseClosed: action('responseClosed'),
  }
};
