import { Component, ElementRef, Input, Output, EventEmitter, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../core/models/user';

@Component({
  selector: 'app-create-contribution',
  standalone: false,
  templateUrl: './create-contribution.component.html',
  styleUrl: './create-contribution.component.css'
})
export class CreateContributionComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editorRef!: ElementRef<HTMLTextAreaElement>;

  @Input() allPoliticians: User[] = [];
  @Input() followedPoliticians: User[] = [];

  @Output() markedPoliticiansChange = new EventEmitter<User[]>();
  @Output() contributionTextChange = new EventEmitter<string>();
  @Output() supportChange = new EventEmitter<boolean | null>();

  contributionForm!: FormGroup;

  markedPoliticians: User[] = [];
  originalFollowedIds: number[] = [];

  isBold = false;
  isItalic = false;
  isSupported: boolean | null = null;
  isPulsing = { 
    support: false, 
    oppose: false 
  };
  showSelectBox = false;
  searchTerm: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.originalFollowedIds = this.followedPoliticians.map(p => p.id);

    this.contributionForm = this.fb.group({
      contributionText: ['', Validators.required],
    });
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
    if (this.originalFollowedIds.includes(politician.id)) {
      this.followedPoliticians.push(politician);
    }
  }

  toggleSelectBox() {
    this.showSelectBox = !this.showSelectBox;
  }

  submitContribution() {
    const contributionText = this.editorRef?.nativeElement.innerHTML || '';

    this.markedPoliticiansChange.emit(this.markedPoliticians);
    this.contributionTextChange.emit(contributionText);
    this.supportChange.emit(this.isSupported);

    this.contributionForm.reset();
    if (this.editorRef) {
      this.editorRef.nativeElement.innerHTML = '';
    }

    this.markedPoliticians = [];
    this.isSupported = null;
    this.isBold = false;
    this.isItalic = false;
  }
}
