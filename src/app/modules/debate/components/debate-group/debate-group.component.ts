import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  onSelectDebateGroup = new EventEmitter<Number>();

  onSelectGroup(){
    this.onSelectDebateGroup.emit(this.debateGroup?.id);
  }

}
