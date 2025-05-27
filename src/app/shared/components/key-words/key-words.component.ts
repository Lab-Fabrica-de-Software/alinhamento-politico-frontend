import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KeyWord } from '../../../core/models/keyword';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-key-words',
  standalone: false,
  templateUrl: './key-words.component.html',
  styleUrl: './key-words.component.css'
})
export class KeyWordsComponent {
  @Input()
  keywords: KeyWord[] = [];

  markedKeywords: KeyWord[] = [];

  @Output() 
  markedKeywordsChange = new EventEmitter<KeyWord[]>();


  newKeyword: string = '';

  constructor(private modalService: NgbModal) { }

  private emitMarkedKeywords() {
  this.markedKeywordsChange.emit(this.markedKeywords);
}

  addMarkedKeyword(keyword: KeyWord) {
    this.markedKeywords.push(keyword);
    this.emitMarkedKeywords();
  }

  removeMarkedKeyword(keyword: KeyWord) {
    this.markedKeywords = this.markedKeywords.filter((c) => c !== keyword);
    this.emitMarkedKeywords();
  }

  toggleKeyword(keyword: KeyWord) {
    if (this.isKeywordMarked(keyword)) {
      this.removeMarkedKeyword(keyword);
    } else if (this.markedKeywords.length < 5) {
      this.addMarkedKeyword(keyword);
    }
  }

  isKeywordMarked(keyword: KeyWord): boolean {
    return this.markedKeywords.includes(keyword);
  }

  openAddKeywordModal(content: any) {
    this.newKeyword = '';
    this.modalService.open(content, { centered: true });
  }

  verifySameKeyword(name: string): boolean {
    return this.keywords.some(k => k.name === name.trim());
  }

  addKeyword(modalRef: any) {
    if (this.verifySameKeyword(this.newKeyword)) {
      alert("Essa palavra-chave já existe");
    } else {
      const lastKeyword = this.keywords.at(-1);
      const newId = lastKeyword ? lastKeyword.id + 1 : 1;

      this.keywords.push({
        id: newId,
        name: this.newKeyword.trim()
      });
      
      modalRef.close();
    }
  }
}
