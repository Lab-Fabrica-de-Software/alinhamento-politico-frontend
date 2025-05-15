import { Component } from '@angular/core';

@Component({
  selector: 'app-debate-filter',
  standalone: false,
  templateUrl: './debate-filter.component.html',
  styleUrl: './debate-filter.component.css'
})
export class DebateFilterComponent {
  searchInput: string = '';
  isAdvanced: boolean = false;

  toggleAdvanced() {
    this.isAdvanced = !this.isAdvanced;
  }

  search() {
    console.log(this.searchInput);
  }
}
