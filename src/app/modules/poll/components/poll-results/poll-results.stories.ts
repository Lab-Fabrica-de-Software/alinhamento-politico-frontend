import type { Meta, StoryObj } from '@storybook/angular';
import { PollResultsComponent } from './poll-results.component';
import { SharedModule } from '../../../../shared/shared.module';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

const meta: Meta<PollResultsComponent> = {
  title: 'modules/poll/components/Poll-Results',
  component: PollResultsComponent,
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
type Story = StoryObj<PollResultsComponent>;

export const PollResults: Story = {
  args: {
    poll: {
      id: 1,
      title: 'Você apoia a Reforma Tributária aprovada pelo Congresso?',
      description: 'A Reforma Tributária simplifica o sistema de impostos brasileiro, unificando diversos tributos em um único imposto sobre valor agregado (IVA). Defensores apontam redução da burocracia; críticos temem aumento da carga sobre consumidores de baixa renda.',
      category: { id: 1, name: 'Saúde' },
      expiresAt: new Date(new Date().setDate(new Date().getDate() + 25)),
      totalVotes: 7,
      votes: [
        {
          answer: 'Apoio totalmente',
          count: 3,
          users: [
            { id: 1, name: 'Jorge Antunes',  photo: 'https://i.pravatar.cc/80?img=1', partyId: 1, partyName: 'Partido Verde',   partyPosition: 'Vereador'  },
            { id: 2, name: 'Gabriela Silva', photo: 'https://i.pravatar.cc/80?img=2', partyId: 2, partyName: 'Partido Liberal', partyPosition: 'Prefeita'  },
            { id: 3, name: 'Carlos Lima',    photo: 'https://i.pravatar.cc/80?img=3' },
          ]
        },
        {
          answer: 'Sou contra',
          count: 2,
          users: [
            { id: 4, name: 'Mariana Costa', photo: 'https://i.pravatar.cc/80?img=4', partyId: 3, partyName: 'Partido Social', partyPosition: 'Vereadora' },
            { id: 6, name: 'Ana Paula',     photo: 'https://i.pravatar.cc/80?img=6' },
          ]
        },
        {
          answer: 'Não tenho opinião formada',
          count: 2,
          users: [
            { id: 7, name: 'Roberto Nunes', photo: 'https://i.pravatar.cc/80?img=7', partyId: 5, partyName: 'Partido Novo', partyPosition: 'Vereador' },
            { id: 8, name: 'Lucia Ferreira', photo: 'https://i.pravatar.cc/80?img=8' },
          ]
        },
      ],
    },
    resultClosed: action('resultClosed'),
  }
};

export const PollResultsEmpty: Story = {
  args: {
    poll: {
      id: 2,
      title: 'Você apoia a Reforma Tributária aprovada pelo Congresso?',
      description: 'A Reforma Tributária simplifica o sistema de impostos brasileiro, unificando diversos tributos em um único imposto sobre valor agregado (IVA).',
      category: { id: 1, name: 'Saúde' },
      expiresAt: new Date(new Date().setDate(new Date().getDate() + 25)),
      totalVotes: 0,
      votes: [
        { answer: 'Apoio totalmente',          count: 0, users: [] },
        { answer: 'Sou contra',                count: 0, users: [] },
        { answer: 'Não tenho opinião formada', count: 0, users: [] },
      ],
    },
    resultClosed: action('resultClosed'),
  }
};
