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
  topics: Topic[] = [];
  keywords: KeyWord[] = [];

  toggleAdvanced() {
    this.isAdvanced = !this.isAdvanced;
  }

  search() {
    console.log(this.searchInput);
  }
}
