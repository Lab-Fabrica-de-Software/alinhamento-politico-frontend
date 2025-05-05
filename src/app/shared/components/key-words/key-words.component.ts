import { Component } from '@angular/core';
import { Category } from '../../../core/models/category';

@Component({
  selector: 'app-key-words',
  standalone: false,
  templateUrl: './key-words.component.html',
  styleUrl: './key-words.component.css'
})
export class KeyWordsComponent {
  categories: Category[] = [];
}
