import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection-date-range',
  standalone: false,
  templateUrl: './selection-date-range.component.html',
  styleUrls: ['./selection-date-range.component.css']
})
export class SelectionDateRangeComponent {
  today: NgbDateStruct;
  startDate: NgbDateStruct | null = null;
  endDate: NgbDateStruct | null = null;
  minEndDate: NgbDateStruct | null = null;
  maxEndDate: NgbDateStruct | null = null;

  constructor(private calendar: NgbCalendar) {
    this.today = this.calendar.getToday();
  }

  onStartDateChange() {
    if (!this.startDate) {
      this.minEndDate = null;
      this.maxEndDate = null;
      return;
    }

    const { year, month, day } = this.startDate;

    const toDate = (d: Date): NgbDateStruct => ({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
    });

    const baseDate = new Date(year, month - 1, day);
    const minEnd = new Date(baseDate);
    minEnd.setDate(minEnd.getDate() + 15);

    const maxEnd = new Date(baseDate);
    maxEnd.setDate(maxEnd.getDate() + 90);

    this.minEndDate = toDate(minEnd);
    this.maxEndDate = toDate(maxEnd);

    if (this.endDate &&
        (this.compareDates(this.endDate, this.minEndDate) < 0 ||
         this.compareDates(this.endDate, this.maxEndDate) > 0)) {
      this.endDate = null;
    }
  }

  compareDates(a: NgbDateStruct, b: NgbDateStruct): number {
    const dateA = new Date(a.year, a.month - 1, a.day);
    const dateB = new Date(b.year, b.month - 1, b.day);
    return dateA.getTime() - dateB.getTime();
  }
}
