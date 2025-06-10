import { Component, Input, Output } from '@angular/core';
import { AiText } from '../../../../core/models/ai-text';

@Component({
  selector: 'app-ai-text',
  standalone: false,
  templateUrl: './ai-text.component.html',
  styleUrl: './ai-text.component.css'
})
export class AiTextComponent {
  @Input() aiText: AiText | null = null;
  
  @Output() isLiked: boolean | null = null;

  setLike(value: boolean) {
    this.isLiked = value;
  }
}
