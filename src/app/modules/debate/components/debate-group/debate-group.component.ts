import { Component, Input } from '@angular/core';
import { DebateGroup } from '../../../../core/models/debate-group';

@Component({
  selector: 'app-debate-group',
  standalone: false,
  templateUrl: './debate-group.component.html',
  styleUrl: './debate-group.component.css'
})
export class DebateGroupComponent {

  @Input()
  debateGroup?:DebateGroup;

}
