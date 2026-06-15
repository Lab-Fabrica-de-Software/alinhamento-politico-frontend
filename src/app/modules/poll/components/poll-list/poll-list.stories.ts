import type { Meta, StoryObj } from '@storybook/angular';
import { PollListComponent } from './poll-list.component';
import { SharedModule } from '../../../../shared/shared.module';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<PollListComponent> = {
  title: 'modules/poll/components/Poll-List',
  component: PollListComponent,
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
type Story = StoryObj<PollListComponent>;

export const PollList: Story = {
  args: {
    polls: [
      {
        id: 1,
        title: 'Você apoia a Reforma Tributária aprovada pelo Congresso?',
        description: 'A Reforma Tributária simplifica o sistema de impostos brasileiro, unificando diversos tributos em um único imposto sobre valor agregado (IVA).',
        category: { id: 1, name: 'Saúde' },
        expiresAt: new Date(new Date().setDate(new Date().getDate() + 25)),
        totalVotes: 7330,
        votes: [
          {
            answer: 'Apoio totalmente',
            count: 4100,
            users: [
              { id: 1, name: 'Jorge Antunes',  photo: 'https://i.pravatar.cc/80?img=1', partyId: 1, partyName: 'Partido Verde',   partyPosition: 'Vereador' },
              { id: 2, name: 'Gabriela Silva', photo: 'https://i.pravatar.cc/80?img=2', partyId: 2, partyName: 'Partido Liberal', partyPosition: 'Prefeita' },
            ]
          },
          {
            answer: 'Sou contra',
            count: 2100,
            users: [
              { id: 3, name: 'Mariana Costa', photo: 'https://i.pravatar.cc/80?img=4', partyId: 3, partyName: 'Partido Social', partyPosition: 'Vereadora' },
            ]
          },
          {
            answer: 'Não tenho opinião formada',
            count: 1130,
            users: [
              { id: 4, name: 'Carlos Lima', photo: 'https://i.pravatar.cc/80?img=3' },
            ]
          },
        ],
      },
      {
        id: 2,
        title: 'Você apoia o aumento do investimento em educação pública?',
        description: 'O projeto propõe aumentar em 20% o orçamento destinado às escolas públicas municipais, priorizando infraestrutura e capacitação de professores.',
        category: { id: 2, name: 'Educação' },
        expiresAt: new Date(new Date().setDate(new Date().getDate() + 10)),
        totalVotes: 3200,
        votes: [
          {
            answer: 'Apoio totalmente',
            count: 2000,
            users: [
              { id: 5, name: 'Pedro Souza', photo: 'https://i.pravatar.cc/80?img=5', partyId: 4, partyName: 'Partido União', partyPosition: 'Vereador' },
            ]
          },
          {
            answer: 'Sou contra',
            count: 800,
            users: [
              { id: 6, name: 'Ana Paula', photo: 'https://i.pravatar.cc/80?img=6' },
            ]
          },
          {
            answer: 'Não tenho opinião formada',
            count: 400,
            users: [],
          },
        ],
      },
      {
        id: 3,
        title: 'Você é favorável à instalação de câmeras nas vias públicas?',
        description: 'A proposta visa ampliar o monitoramento urbano com câmeras de segurança em pontos estratégicos da cidade para redução da criminalidade.',
        category: { id: 3, name: 'Segurança' },
        expiresAt: new Date(new Date().setDate(new Date().getDate() + 15)),
        totalVotes: 1890,
        votes: [
          {
            answer: 'Apoio totalmente',
            count: 900,
            users: [],
          },
          {
            answer: 'Sou contra',
            count: 600,
            users: [],
          },
          {
            answer: 'Não tenho opinião formada',
            count: 390,
            users: [],
          },
        ],
      },
    ],
  }
};

export const PollListEmpty: Story = {
  args: {
    polls: [],
  }
};
