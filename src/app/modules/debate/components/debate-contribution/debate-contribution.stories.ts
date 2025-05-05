import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DebateContributionComponent } from './debate-contribution.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

const meta: Meta<DebateContributionComponent> = {
  title: 'modules/debate/components/debate-contribution',
  component: DebateContributionComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule, NgClass]
    })
  ]
};

export default meta;
type Story = StoryObj<DebateContributionComponent>;

export const DebateContribution: Story = {
  args: {
    politicians: [
      {
        id: 1,
        name: "Marta Oliveira",
        photo: "https://i.pravatar.cc/150?img=47",
        politicalPosition: "Deputada Federal"
      },
      {
        id: 2,
        name: "Carlos Augusto",
        photo: "https://i.pravatar.cc/150?img=59",
        politicalPosition: "Vereador"
      },
      { id: 3, 
        name: 'Maria Silva', 
        politicalPosition: 'Vereadora', 
        photo: 'https://i.pravatar.cc/150?img=49' 
      },
      { id: 4, 
        name: 'João Souza', 
        politicalPosition: 'Deputado', 
        photo: 'https://i.pravatar.cc/150?img=57' 
      }
    ]
  }
};