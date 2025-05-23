import { Component } from '@angular/core';
import { Topic } from '../../../../core/models/topic';
import { KeyWord } from '../../../../core/models/keyword';

@Component({
  selector: 'app-debate-filter',
  standalone: false,
  templateUrl: './debate-filter.component.html',
  styleUrl: './debate-filter.component.css'
})
export class DebateFilterComponent {
  searchInput: string = '';
  isAdvanced: boolean = false;
  showSelectBox: boolean = false;
  topics: Topic[] = [];
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
}
