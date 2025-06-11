import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AiText } from '../../../../core/models/ai-text';
import { AiFeedback } from '../../../../core/models/ai-feedback';

@Component({
  selector: 'app-ai-text',
  standalone: false,
  templateUrl: './ai-text.component.html',
  styleUrl: './ai-text.component.css'
})
export class AiTextComponent {
  @Input() aiText: AiText | null = null;

  @Output() aiFeedbackChange = new EventEmitter<AiFeedback | null>();

  showModal: boolean = false;
  aiFeedback: AiFeedback = {
    id: 1,
    aiTextId: 1,
    feedback: null,
    text: ''
  };

  get charCount(): number {
    return this.aiFeedback.text?.length ?? 0;
  }

  setLike(value: boolean) {
    if (value) {
      this.aiFeedback.feedback = true;
      this.aiFeedback.text = '';
      this.aiFeedbackChange.emit({ ...this.aiFeedback });
    } else {
      this.showModal = true;
    }
  }

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  sendFeedback() {
    this.aiFeedback.feedback = false;
    this.aiFeedbackChange.emit({ ...this.aiFeedback });
    this.closeModal();
  }

  closeModal() {
    this.aiFeedback.text = '';
    this.showModal = false;
  }
}
