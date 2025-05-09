import { Component } from '@angular/core';
import { AIText } from '../../../../core/models/ai-text';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  aiText: AIText | null = null;
}
