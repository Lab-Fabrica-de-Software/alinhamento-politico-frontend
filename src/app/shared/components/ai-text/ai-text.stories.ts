import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AiTextComponent } from './ai-text.component';
import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';

const meta: Meta<AiTextComponent> = {
    title: 'shared/components/Ai-Text',
    component: AiTextComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    })
  ]
    
};

export default meta;
type Story = StoryObj<AiTextComponent>;

export const AiText: Story = {
    args: {
        aiText: {
            id: 1,
            title: "Lorem Ipsum",
            text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat lectus nulla, eget placerat nisl blandit nec. Vivamus lobortis porttitor turpis, eget iaculis arcu laoreet vulputate.</p>\n
                <h3>Apoiadores:</h3>\n
                <p>Praesent consequat, eros quis varius feugiat, libero odio consectetur eros, ac pretium leo nibh in lorem. Nam vitae eros ac est placerat pellentesque quis in lacus. Morbi non commodo elit.</p>\n
                <h3>Não apoiadores:</h3>\n
                <p>Praesent consequat, eros quis varius feugiat, libero odio consectetur eros, ac pretium leo nibh in lorem. Nam vitae eros ac est placerat pellentesque quis in lacus. Morbi non commodo elit.</p>\n
`,
        },
        aiFeedbackChange: action('aiFeedbackChange')
    }
};