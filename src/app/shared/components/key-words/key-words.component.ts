import { Component, Input } from '@angular/core';
import { Category } from '../../../core/models/category';

@Component({
  selector: 'app-key-words',
  standalone: false,
  templateUrl: './key-words.component.html',
  styleUrl: './key-words.component.css'
})
export class KeyWordsComponent {
  @Input()
  categories: Category[] = [];

  markedCategories: Category[] = [];

  addMarkedCategory(category: Category) {
    this.markedCategories.push(category);
  }

  removeMarkedCategory(category: Category) {
    this.markedCategories = this.markedCategories.filter((c) => c !== category);
  }

  toggleCategory(category: Category) {
    if (this.isCategoryMarked(category)) {
      this.removeMarkedCategory(category);
    } else if (this.markedCategories.length < 5) {
      this.addMarkedCategory(category);
    }
  }
  
  isCategoryMarked(category: Category): boolean {
    return this.markedCategories.includes(category);
  }
}
