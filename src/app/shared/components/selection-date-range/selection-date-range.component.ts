import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection-date-range',
  standalone: false,
  templateUrl: './selection-date-range.component.html',
  styleUrls: ['./selection-date-range.component.css']
})
export class SelectionDateRangeComponent {
  today: NgbDateStruct;
  minStartDate: NgbDateStruct;
  startDate: NgbDateStruct | null = null;
  endDate: NgbDateStruct | null = null;
  minEndDate: NgbDateStruct | null = null;
  maxEndDate: NgbDateStruct | null = null;

  @Input() isHorizontal: boolean = false;

  @Output() startDateChange = new EventEmitter<NgbDateStruct | null>();
  @Output() endDateChange = new EventEmitter<NgbDateStruct | null>();

  constructor(private calendar: NgbCalendar) {
    this.today = this.calendar.getToday();

    const minDate = new Date(this.today.year, this.today.month - 1, this.today.day);
    minDate.setDate(minDate.getDate() - 90);

    this.minStartDate = {
      year: minDate.getFullYear(),
      month: minDate.getMonth() + 1,
      day: minDate.getDate()
    };
  }

  get maxStartDate(): NgbDateStruct | null {
    return this.isHorizontal ? this.today : null;
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
      this.endDateChange.emit(null);
    }

    this.startDateChange.emit(this.startDate);
  }

  onEndDateChange() {
    this.endDateChange.emit(this.endDate);
  }

  compareDates(a: NgbDateStruct, b: NgbDateStruct): number {
    const dateA = new Date(a.year, a.month - 1, a.day);
    const dateB = new Date(b.year, b.month - 1, b.day);
    return dateA.getTime() - dateB.getTime();
  }
}
