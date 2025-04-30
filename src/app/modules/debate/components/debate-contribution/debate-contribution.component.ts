import { Component } from '@angular/core';

@Component({
  selector: 'app-debate-contribution',
  standalone: false,
  templateUrl: './debate-contribution.component.html',
  styleUrl: './debate-contribution.component.css'
})
export class DebateContributionComponent {
  isSupported: boolean | null = null;
  isPulsing = {
    support: false,
    oppose: false,
  };

  setSupport(value: boolean) {
    this.isSupported = value;

    const key = value ? 'support' : 'oppose';
    this.isPulsing[key] = true;

    setTimeout(() => {
      this.isPulsing[key] = false;
    }, 300);
  }
}
