import { Component, Input } from '@angular/core';
import { DebateContribution } from '../../../../core/models/debate-contribution';

@Component({
  selector: 'app-debate-contribution',
  standalone: false,
  templateUrl: './debate-contribution.component.html',
  styleUrl: './debate-contribution.component.css'
})
export class DebateContributionComponent {
  @Input()
  debateContribution?:DebateContribution;
}
