import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../../../core/models/category';
import { Poll } from '../../../../core/models/poll';

@Component({
  selector: 'app-poll-form',
  standalone: false,
  templateUrl: './poll-form.component.html',
  styleUrl: './poll-form.component.css',
})
export class PollFormComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Input() answers: string[] = [];
  @Input() submitted: boolean = false;

  @Output() formClosed = new EventEmitter<void>();

  form: Omit<Poll, 'id'> = {
    title:       '',
    description: '',
    category:    null as any,
    expiresAt:   new Date(),
    totalVotes:  0,
  };

  ngOnInit(): void {
    this.form.category = null as any;
  }

  onSubmit(): void {
    console.log('Enquete criada:', {
      ...this.form,
      answers: this.answers,
    });
    this.submitted = true;
  }

  onCancel(): void {
    this.onBack();
  }

  onBack(): void {
    this.submitted = false;
    this.ngOnInit();
    this.formClosed.emit();
  }
}
