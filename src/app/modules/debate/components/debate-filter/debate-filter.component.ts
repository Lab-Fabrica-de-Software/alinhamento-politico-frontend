import { Component, EventEmitter, Output } from '@angular/core';
import { Topic } from '../../../../core/models/topic';
import { KeyWord } from '../../../../core/models/keyword';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { end } from '@popperjs/core';

@Component({
  selector: 'app-debate-filter',
  standalone: false,
  templateUrl: './debate-filter.component.html',
  styleUrl: './debate-filter.component.css'
})
export class DebateFilterComponent {
  @Output() submitStartDate = new EventEmitter<NgbDateStruct | null>();
  @Output() submitEndDate = new EventEmitter<NgbDateStruct | null>();

  searchInput: string = '';
  isAdvanced: boolean = false;
  showSelectBox: boolean = false;
  topics: Topic[] = [];
  startDate: NgbDateStruct | null = null;
  endDate: NgbDateStruct | null = null;
  keywords: KeyWord[] = [];
  markedKeywords: KeyWord[] = [];

  toggleAdvanced() {
    this.isAdvanced = !this.isAdvanced;
  }

  toggleSelectBox() {
    this.showSelectBox = !this.showSelectBox;
  }

  addMarkedKeyword(keyword: KeyWord) {
    this.markedKeywords.push(keyword);
    this.keywords = this.keywords.filter((k) => k !== keyword);
  }

  removeMarkedKeyword(keyword: KeyWord) {
    this.markedKeywords = this.markedKeywords.filter((k) => k !== keyword);
    this.keywords.push(keyword);
  }

  search() {
    console.log(this.searchInput);
  }

  handleStartDateChange(startDate: NgbDateStruct | null) {
    this.startDate = startDate;

  }

  handleEndDateChange(endDate: NgbDateStruct | null) {
    this.endDate = endDate;
  }

  submit() {
    this.submitStartDate.emit(this.startDate);
    this.submitEndDate.emit(this.endDate);
  }
}
