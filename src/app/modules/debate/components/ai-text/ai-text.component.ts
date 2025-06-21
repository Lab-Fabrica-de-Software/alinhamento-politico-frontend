import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AiText } from '../../../../core/models/ai-text';
import { AiFeedback } from '../../../../core/models/ai-feedback';

@Component({
  selector: 'app-ai-text',
  standalone: false,
  templateUrl: './ai-text.component.html',
  styleUrl: './ai-text.component.css'
})
export class AiTextComponent implements OnInit {
  @Input() aiText: AiText | null = null;
  @Input() aiFeedback: AiFeedback | null = null;

  @Output() aiFeedbackChange = new EventEmitter<AiFeedback | null>();

  showModal: boolean = false;

  ngOnInit(): void {
    if (!this.aiFeedback && this.aiText) {
      this.aiFeedback = {
        id: 0,
        aiTextId: this.aiText.id,
        feedback: null,
        text: ''
      };
    }
  }

  get charCount(): number {
    return this.aiFeedback?.text?.length ?? 0;
  }

  get hasFeedback(): boolean {
    return this.aiFeedback?.feedback !== null;
  }

  setLike(value: boolean) {
    if (!this.aiFeedback || this.hasFeedback) return;

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
    if (!this.aiFeedback) return;
    this.aiFeedback.feedback = false;
    this.aiFeedbackChange.emit({ ...this.aiFeedback });
    this.closeModal();
  }

  resetFeedback() {
    if (!this.aiFeedback) return;
    this.aiFeedback.feedback = null;
    this.aiFeedback.text = '';
    this.aiFeedbackChange.emit({ ...this.aiFeedback });
  }

  closeModal() {
    if (!this.aiFeedback) return;
    this.aiFeedback.text = '';
    this.showModal = false;
  }
}
