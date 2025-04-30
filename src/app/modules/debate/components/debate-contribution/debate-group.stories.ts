import type { Meta, StoryObj } from '@storybook/angular';
import { DebateContributionComponent } from './debate-contribution.component';

const meta: Meta<DebateContributionComponent> = {
  title: 'modules/debate/components/Debate-Contribution',
  component: DebateContributionComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<DebateContributionComponent>;

export const Contribuição: Story = {
  args: {
    debateContribution: {
      id: 1,
      userName: 'Gabriela Silva',
      userPhoto: 'https://i.pravatar.cc/80?img=5',
      userVerified: false,
      openDate: new Date(Date.now()),
      opinion: true,
      likes: 10,
      dislikes: 2,
      text: 'Culpa adipisicing tempor in est ea nulla sunt sint. Nisi nisi irure adipisicing ullamco ullamco. Reprehenderit reprehenderit sunt pariatur esse. Duis occaecat exercitation minim aliqua qui fugiat est ipsum in.Proident in enim aute labore et voluptate adipisicing incididunt magna dolor.Adipisicing exercitation ut consequat nulla minim enim cupidatat velit exercitation sint.Ut dolor commodo non eu aute.Tempor reprehenderit Lorem velit Lorem consequat ipsum voluptate ut do ut.Culpa aliqua cupidatat nisi fugiat reprehenderit occaecat ut aute.Mollit veniam reprehenderit pariatur sunt minim proident. Commodo anim elit reprehenderit sunt est.Culpa et sit exercitation ut voluptate occaecat ex.Adipisicing dolore quis ipsum elit culpa minim culpa ullamco velit nulla qui in aute aliquip.Adipisicing officia dolore sit labore.Labore minim aliquip duis quis minim ad proident sit laborum anim ad.Et quis cupidatat minim ea exercitation culpa consectetur pariatur adipisicing elit.Ullamco nisi laborum do id consequat fugiat sit eiusmod enim ex. Sint sint nisi elit id et in exercitation id nulla ipsum proident.Laboris reprehenderit occaecat do laboris officia irure duis reprehenderit tempor officia.Minim qui deserunt culpa magna elit aute ipsum elit voluptate.Minim consequat velit nulla nostrud ut pariatur.Dolore ea deserunt minim commodo pariatur adipisicing velit magna laborum nulla officia.'
    }
  },
};

export const ContribuiçãoPolítico: Story = {
  args: {
    debateContribution: {
      id: 2,
      userName: 'Jorge Antunes',
      userPhoto: 'https://i.pravatar.cc/80?img=6',
      userParty: 'Partido Verde',
      userPosition: 'Vereador',
      userVerified: true, 
      openDate: new Date('2023-10-01'),
      opinion: false,
      likes: 10,
      dislikes: 2,
      text: 'Reprehenderit irure excepteur anim adipisicing occaecat sit laboris consectetur. Ipsum nulla exercitation laboris ut mollit amet esse mollit cupidatat et dolor ullamco. Esse laboris laboris culpa dolor. Eu qui id occaecat aliqua ut velit. Consequat sint labore duis laboris anim velit exercitation. Velit velit ipsum elit incididunt laborum proident laborum consectetur cupidatat ut ad aute enim non. Deserunt incididunt anim fugiat laborum consequat magna ullamco irure magna anim ea sit pariatur. Veniam voluptate Lorem ipsum esse proident incididunt ut dolore ad veniam. Reprehenderit occaecat laborum adipisicing est aute esse laboris non ullamco. Sunt ipsum id reprehenderit id amet dolor elit anim excepteur non non nulla duis.',
    }
  },
};