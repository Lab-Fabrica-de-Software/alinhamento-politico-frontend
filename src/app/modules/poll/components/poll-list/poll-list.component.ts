import { Component, Input } from '@angular/core';
import { Poll } from '../../../../core/models/poll';
import { PollVote } from '../../../../core/models/poll-votes';

@Component({
  selector: 'app-poll-list',
  standalone: false,
  templateUrl: './poll-list.component.html',
  styleUrl: './poll-list.component.css',
})
export class PollListComponent {

  @Input() polls: Poll[] = [];

  getDaysRemaining(expiresAt: Date): number {
    const today = new Date();
    const expiry = new Date(expiresAt);
    const diff = expiry.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  // Calcula total de políticos
  getTotalPoliticians(poll: Poll): number {
    if (!poll.votes) return 0;

    const politicians = new Set<number>();
    poll.votes.forEach((vote: PollVote) => {
      vote.users
        ?.filter(user => user.partyId)
        .forEach(user => politicians.add(user.id));
    });

    return politicians.size;
  }

  trackById(index: number, poll: Poll): number {
    return poll.id;
  }
}
