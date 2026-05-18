import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-text-editor',
  standalone: false,
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.css'
})
export class TextEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  dropdownPosition: { top?: string; left?: string } = {};

  editorText = '';

  @Input() allPoliticians: User[] = [];
  @Input() followedPoliticians: User[] = [];

  @Output() markedPoliticiansChange = new EventEmitter<User[]>();
  @Output() contributionTextChange = new EventEmitter<string>();

  markedPoliticians: User[] = [];
  originalFollowedIds: number[] = [];

  showSelectBox = false;
  searchTerm: string = '';

  resizeListener = this.onWindowResize.bind(this);

  constructor(private elem: ElementRef, private cdr: ChangeDetectorRef) { }


  ngOnInit() {
    window.addEventListener('resize', this.resizeListener);
    this.originalFollowedIds = this.followedPoliticians.map(p => p.id);
  }

  ngAfterViewInit() {
    // Polling até o botão ser carregado pelo Quill
    const interval = setInterval(() => {
      const markBtn = this.elem.nativeElement.querySelector('.ql-politicianTag') as HTMLElement;

      if (markBtn) {
        markBtn.innerText = '@';

        markBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleSelectBox();
        });

        clearInterval(interval);
      }
    }, 50);

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }

  toggleSelectBox() {
    this.showSelectBox = !this.showSelectBox;

    this.cdr.detectChanges();

    if (this.showSelectBox) {
      setTimeout(() => {
        this.updateDropdownPosition();
      }, 0);
    }
  }

  private updateDropdownPosition() {
    const button = document.querySelector('.ql-politicianTag') as HTMLElement;

    if (button) {
      const rect = button.getBoundingClientRect();
      this.dropdownPosition = {
        top: `${rect.bottom + 5}px`,
        left: `${rect.left}px`
      };
      this.cdr.detectChanges();
    }
  }

  onWindowResize() {
    if (this.showSelectBox) {
      this.updateDropdownPosition();
    }
  }

  emitTextChange(value: string) {
    this.editorText = value;
    this.contributionTextChange.emit(value);
  }

  get filteredPoliticians(): User[] {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      return this.followedPoliticians;
    }

    return this.allPoliticians.filter(p =>
      p.name.toLowerCase().includes(term)
    );
  }

  addMarkedPolitician(politician: User) {
    this.markedPoliticians.push(politician);
    this.markedPoliticiansChange.emit(this.markedPoliticians);

    this.allPoliticians = this.allPoliticians.filter(p => p.id !== politician.id);
    this.followedPoliticians = this.followedPoliticians.filter(p => p.id !== politician.id);
    this.showSelectBox = false;
  }

  removeMarkedPolitician(politician: User) {
    this.markedPoliticians = this.markedPoliticians.filter(p => p.id !== politician.id);
    this.markedPoliticiansChange.emit(this.markedPoliticians);

    if (!this.allPoliticians.find(p => p.id === politician.id)) {
      this.allPoliticians.push(politician);
    }

    if (this.originalFollowedIds.includes(politician.id) &&
      !this.followedPoliticians.find(p => p.id === politician.id)) {
      this.followedPoliticians.push(politician);
    }
  }

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'politicianTag']
      ]
    }
  };
}