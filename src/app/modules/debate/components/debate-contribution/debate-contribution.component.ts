import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DebateContribution } from '../../../../core/models/debate-contribution';

@Component({
  selector: 'app-debate-contribution',
  standalone: false,
  templateUrl: './debate-contribution.component.html',
  styleUrl: './debate-contribution.component.css'
})
export class DebateContributionComponent {
  @Input()
  debateContribution!: DebateContribution;
  @Input()
  small?: boolean = false;

  @Output()
  reaction = new EventEmitter<string>();

  tie = ""
  showFullText: boolean = false;

  onClickReact(reaction: "up" | "down" | undefined) {
    const currentReaction = this.debateContribution.userReaction;

    if (currentReaction === reaction) {
      this.reaction.emit(undefined);
      if (reaction === "up") this.debateContribution.ups--;
      if (reaction === "down") this.debateContribution.downs--;
      this.debateContribution.userReaction = undefined;
    } else {
      if (currentReaction === "up") this.debateContribution.ups--;
      if (currentReaction === "down") this.debateContribution.downs--;
      if (reaction === "up") this.debateContribution.ups++;
      if (reaction === "down") this.debateContribution.downs++;
      this.reaction.emit(reaction);
      this.debateContribution.userReaction = reaction;
    }
  }

  get displayText(): string {
    const text = this.debateContribution.text;
    return this.showFullText || text.length <= 500 ? text : text.slice(0, 500) + '...';
  }

  toggleText(): void {
    this.showFullText = !this.showFullText;
  }
}
