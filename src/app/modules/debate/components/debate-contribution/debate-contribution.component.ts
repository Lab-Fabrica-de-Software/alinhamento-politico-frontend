import { Component, Input } from '@angular/core';
import { DebateContribution } from '../../../../core/models/debate-contribution';

@Component({
  selector: 'app-debate-contribution',
  standalone: false,
  templateUrl: './debate-contribution.component.html',
  styleUrl: './debate-contribution.component.css'
})
export class DebateContributionComponent {
  tie = ""

  @Input()
  debateContribution!: DebateContribution;
  @Input()
  small?: boolean = false;

  showFullText: boolean = false;

  get displayText(): string {
    const text = this.debateContribution.text;
    return this.showFullText || text.length <= 500 ? text : text.slice(0, 500) + '...';
  }

  toggleText(): void {
    this.showFullText = !this.showFullText;
  }

  like() {
    console.log('Like clicked');
  }
}
