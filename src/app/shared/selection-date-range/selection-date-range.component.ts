import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection-date-range',
  standalone: false,
  templateUrl: './selection-date-range.component.html',
  styleUrl: './selection-date-range.component.css'
})
export class SelectionDateRangeComponent {
  startDate: NgbDateStruct | null = null;
  endDate: NgbDateStruct | null = null;
}
