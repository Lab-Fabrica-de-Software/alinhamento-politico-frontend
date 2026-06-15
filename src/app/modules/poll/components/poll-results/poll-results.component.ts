import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Poll } from '../../../../core/models/poll';
import { PollVote } from '../../../../core/models/poll-votes';

@Component({
  selector: 'app-poll-results',
  standalone: false,
  templateUrl: './poll-results.component.html',
  styleUrl: './poll-results.component.css',
})
export class PollResultsComponent {

  @Input() poll: Poll | null = null;
  @Output() resultClosed = new EventEmitter<void>();

  getPercentage(count?: number): number {
    if (!this.poll || !this.poll.totalVotes) return 0;
    return Math.round(((count ?? 0) / this.poll.totalVotes) * 100);
  }

  getBarColor(vote: PollVote): string {
    if (!this.poll?.votes?.length) return '#495057';
    const maxCount = Math.max(...this.poll.votes.map(v => v.count ?? 0));
    return (vote.count ?? 0) === maxCount ? '#198754' : '#495057';
  }

  // Total de políticos
  getTotalPoliticians(): number {
    if (!this.poll?.votes) return 0;

    const politicians = new Set<number>();
    this.poll.votes.forEach(vote => {
      vote.users
        ?.filter(user => user.partyId)
        .forEach(user => politicians.add(user.id));
    });

    return politicians.size;
  }

  // Total de políticos por resposta
  getPoliticiansPerVote(vote: PollVote): number {
    if (!vote.users) return 0;
    return vote.users.filter(user => user.partyId).length;
  }

  getDaysRemaining(expiresAt: Date): number {
    const today = new Date();
    const expiry = new Date(expiresAt);
    const diff = expiry.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  onBack(): void {
    this.resultClosed.emit();
  }

  trackByAnswer(index: number, vote: PollVote): string {
    return vote.answer;
  }
}
