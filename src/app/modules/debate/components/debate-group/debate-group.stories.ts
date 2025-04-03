import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import {DebateGroupComponent} from './debate-group.component';

export const ActionsData = {

};

const meta: Meta<DebateGroupComponent> = {
  title: 'modules/debate/components/Debate-Component',
  component: DebateGroupComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<DebateGroupComponent>;

export const GrupoSaúde: Story = {
    args: {
        debateGroup:{
            id: 1,
            color: '#0f0',
            name: 'Saúde',
            description: 'Grupo voltado para discutir sobre saúde',
            lastContributionName: 'Gabriela Silva',
            lastContributionPhoto: 'https://i.pravatar.cc/80?img=5',
            lastContributionDebateName: 'O Sistema Único de Saúde (SUS) deve ser gratuíto?',
            openDebates: 207
        }
     },
};

export const GrupoEducação: Story = {
    args: {
        debateGroup:{
            id: 2,
            color: '#ff0',
            name: 'Educação',
            description: 'Grupo voltado para discutir sobre educação pública',
            lastContributionName: 'Jorge Antunes',
            lastContributionPhoto: 'https://i.pravatar.cc/80?img=6',
            lastContributionDebateName: 'Proposta para a distribuição de bolsas e cotas no ensino superior',
            openDebates: 123
        }
     },
};