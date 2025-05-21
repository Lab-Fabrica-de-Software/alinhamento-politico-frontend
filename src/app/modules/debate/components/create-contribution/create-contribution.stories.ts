import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CreateContributionComponent } from './create-contribution.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

const meta: Meta<CreateContributionComponent> = {
  title: 'modules/debate/components/create-contribution',
  component: CreateContributionComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule, NgClass]
    })
  ]
};

export default meta;
type Story = StoryObj<CreateContributionComponent>;

export const CreateContribution: Story = {
  args: {
    allPoliticians: [
      {
        id: 1,
        name: "Jailson Mendes",
        photo: "https://i.pravatar.cc/150?img=18",
        partyPosition: "Senador"
      },
      {
        id: 2,
        name: "Juliana Rocha",
        photo: "https://i.pravatar.cc/150?img=16",
        partyPosition: "Deputada Estadual"
      },
      {
        id: 3,
        name: "Bruno Tavares",
        photo: "https://i.pravatar.cc/150?img=33",
        partyPosition: "Prefeito"
      },
      {
        id: 4,
        name: "Larissa Monteiro",
        photo: "https://i.pravatar.cc/150?img=35",
        partyPosition: "Senadora"
      },
      {
        id: 5,
        name: "Eduardo Lima",
        photo: "https://i.pravatar.cc/150?img=64",
        partyPosition: "Deputado Federal"
      },
      {
        id: 6,
        name: "Camila Farias",
        photo: "https://i.pravatar.cc/150?img=26",
        partyPosition: "Vereadora"
      },
      {
        id: 7,
        name: "Felipe Barros",
        photo: "https://i.pravatar.cc/150?img=63",
        partyPosition: "Governador"
      },
      {
        id: 8,
        name: "Patrícia Nogueira",
        photo: "https://i.pravatar.cc/150?img=21",
        partyPosition: "Deputada Estadual"
      },
      {
        id: 9,
        name: "André Gomes",
        photo: "https://i.pravatar.cc/150?img=51",
        partyPosition: "Vereador"
      },
      {
        id: 10,
        name: "Vanessa Martins",
        photo: "https://i.pravatar.cc/150?img=32",
        partyPosition: "Prefeita"
      }
    ], 
    followedPoliticians: [
      {
        id: 1,
        name: "Marta Oliveira",
        photo: "https://i.pravatar.cc/150?img=47",
        partyPosition: "Deputada Federal"
      },
      {
        id: 2,
        name: "Carlos Augusto",
        photo: "https://i.pravatar.cc/150?img=59",
        partyPosition: "Vereador"
      },
      { id: 3, 
        name: 'Maria Silva', 
        partyPosition: 'Vereadora', 
        photo: 'https://i.pravatar.cc/150?img=49' 
      },
      { id: 4, 
        name: 'João Souza', 
        partyPosition: 'Deputado', 
        photo: 'https://i.pravatar.cc/150?img=57' 
      }
    ]
  }
};