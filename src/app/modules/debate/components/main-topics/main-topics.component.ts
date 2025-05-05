import { Component, Input } from '@angular/core';
import { AIText } from '../../../../core/models/AIText';

@Component({
  selector: 'app-main-topics',
  standalone: false,
  templateUrl: './main-topics.component.html',
  styleUrl: './main-topics.component.css'
})
export class MainTopicsComponent {
  @Input()
  aiText: AIText | null = null;
}
