import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../../core/models/category';

@Component({
  selector: 'app-poll-filter',
  standalone: false,
  templateUrl: './poll-filter.component.html',
  styleUrl: './poll-filter.component.css',
})

export class PollFilterComponent {
  // Recebe a lista de categorias
  @Input() categories: Category[] = [];

  // Emite o id da categoria selecionada — null representa "Todos" evitando erros de tipo
  @Output() categoryChange = new EventEmitter<number | null>();

  @Output() openForm = new EventEmitter<void>();

  activeCategoryId: number | null = null;

  selectCategory(id: number | null): void {
    this.activeCategoryId = id;
    this.categoryChange.emit(id);
  }

  trackById(index: number, category: Category): number {
    return category.id;
  }

}
