import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from '../../../../core/models/topic';
import { KeyWord } from '../../../../core/models/keyword';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-debate-filter',
  standalone: false,
  templateUrl: './debate-filter.component.html',
  styleUrl: './debate-filter.component.css'
})
export class DebateFilterComponent {
  @Input() topics: Topic[] = [];
  @Input() keywords: KeyWord[] = [];

  @Output() submitSelectedTopic = new EventEmitter<Topic | null>();
  @Output() submitStartDate = new EventEmitter<NgbDateStruct | null>();
  @Output() submitEndDate = new EventEmitter<NgbDateStruct | null>();
  @Output() submitmarkedKeywords = new EventEmitter<KeyWord[] | null>();
  @Output() submitMinContributions = new EventEmitter<number | null>();

  searchInput: string = '';
  isAdvanced: boolean = false;
  showSelectBox: boolean = false;
  selectedTopic: Topic | null = null;
  startDate: NgbDateStruct | null = null;
  endDate: NgbDateStruct | null = null;
  markedKeywords: KeyWord[] = [];
  minContributions: number | null = null;

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
    console.log(this.selectedTopic);
    console.log(this.markedKeywords);
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.minContributions);
    
    this.submitSelectedTopic.emit(this.selectedTopic);
    this.submitStartDate.emit(this.startDate);
    this.submitEndDate.emit(this.endDate);
    this.submitmarkedKeywords.emit(this.markedKeywords);
    this.submitMinContributions.emit(this.minContributions);
  }
}
