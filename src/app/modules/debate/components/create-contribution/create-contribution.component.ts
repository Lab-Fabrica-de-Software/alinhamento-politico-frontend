import { Component, ElementRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { User } from '../../../../core/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-contribution',
  standalone: false,
  templateUrl: './create-contribution.component.html',
  styleUrl: './create-contribution.component.css'
})
export class CreateContributionComponent {

  @ViewChild('editor') editorRef!: ElementRef<HTMLTextAreaElement>;

  @Input() allPoliticians: User[] = [];
  @Input() followedPoliticians: User[] = [];

  @Output() markedPoliticiansChange = new EventEmitter<User[]>();
  @Output() contributionTextChange = new EventEmitter<string>();
  @Output() supportChange = new EventEmitter<boolean | null>();

  markedPoliticians: User[] = [];
  originalFollowedIds: number[] = this.followedPoliticians.map(p => p.id);
  contributionText: string = '';
  isBold = false;
  isItalic = false;
  isSupported: boolean | null = null;
  isPulsing = {
    support: false,
    oppose: false,
  };
  showSelectBox = false;
  searchTerm: string = '';

  ngOnInit() {
    this.originalFollowedIds = this.followedPoliticians.map(p => p.id);
  }
  
  ngAfterViewInit() {
    this.editorRef.nativeElement.addEventListener('mouseup', () => this.updateActiveStates());
    this.editorRef.nativeElement.addEventListener('keyup', () => this.updateActiveStates());
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

  updateActiveStates() {
    this.isBold = document.queryCommandState('bold');
    this.isItalic = document.queryCommandState('italic');
  }

  formatText(command: 'bold' | 'italic') {
    document.execCommand(command, false);
    this.updateActiveStates();
    this.editorRef.nativeElement.focus();
  }

  setSupport(value: boolean) {
    this.isSupported = value;
    this.supportChange.emit(this.isSupported);

    const key = value ? 'support' : 'oppose';
    this.isPulsing[key] = true;

    setTimeout(() => {
      this.isPulsing[key] = false;
    }, 300);
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

    this.allPoliticians.push(politician);

    const wasFollowed = this.originalFollowedIds.includes(politician.id);
    if (wasFollowed) {
      this.followedPoliticians.push(politician);
    }
  }

  toggleSelectBox() {
    this.showSelectBox = !this.showSelectBox;
  }

  submitContribution(form: NgForm) {
    console.log(this.markedPoliticians);
    console.log(this.contributionText);

    this.markedPoliticiansChange.emit(this.markedPoliticians);
    this.contributionTextChange.emit(this.contributionText);
    this.supportChange.emit(this.isSupported);

    this.contributionText = '';
    if (this.editorRef) {
      this.editorRef.nativeElement.innerHTML = '';
    }

    this.allPoliticians.push(...this.markedPoliticians);

    const followedMarked = this.markedPoliticians.filter(p => this.originalFollowedIds.includes(p.id));
    this.followedPoliticians.push(...followedMarked);

    this.markedPoliticians = [];
    this.isSupported = null;
    this.isBold = false;
    this.isItalic = false;

    form.resetForm();
  }
}
