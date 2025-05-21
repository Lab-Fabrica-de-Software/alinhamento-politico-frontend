import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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

  ngAfterViewInit() {
    this.editorRef.nativeElement.addEventListener('mouseup', () => this.updateActiveStates());
    this.editorRef.nativeElement.addEventListener('keyup', () => this.updateActiveStates());
  }

  @Input()
  allPoliticians: User[] = [];
  followedPoliticians: User[] = [];

  markedPoliticians: {
    politician: User,
    type: string
  }[] = [];

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

get filteredPoliticians(): User[] {
  const term = this.searchTerm.trim().toLowerCase();
  
  if (!term) {
    return this.followedPoliticians;
  }

  const followedAndFiltered = this.followedPoliticians.filter(p =>
    p.name.toLowerCase().includes(term)
  );

  const otherFiltered = this.allPoliticians.filter(p =>
    !this.followedPoliticians.includes(p) && p.name.toLowerCase().includes(term)
  );

  return [...followedAndFiltered, ...otherFiltered];
}

  getPoliticianType(politician: User): string {
    return this.followedPoliticians.includes(politician) ? 'followed' : 'all';
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

    const key = value ? 'support' : 'oppose';
    this.isPulsing[key] = true;

    setTimeout(() => {
      this.isPulsing[key] = false;
    }, 300);
  }

  addMarkedPolitician(politician: User, type: string) {
    if (type === 'followed') {
      this.markedPoliticians.push({ politician: politician, type: 'followed' });
      this.followedPoliticians = this.followedPoliticians.filter((p) => p != politician);
    } else {
      this.markedPoliticians.push({ politician: politician, type: 'all' });
      this.allPoliticians = this.allPoliticians.filter((p) => p != politician);
    }
    this.showSelectBox = false;
  }

  removeMarkedPolitician(politician: User, type: string) {
    this.markedPoliticians = this.markedPoliticians.filter((p) => p.politician != politician);
    if (type === 'followed') {
      this.followedPoliticians.push(politician);
    } else {
      this.allPoliticians.push(politician);
    }
  }

  toggleSelectBox() {
    this.showSelectBox = !this.showSelectBox;
  }

  submitContribution(form: NgForm) {
    console.log(this.markedPoliticians);

    this.contributionText = '';
    if (this.editorRef) {
      this.editorRef.nativeElement.innerHTML = '';
    }
    const followedMarked = this.markedPoliticians.filter(p => p.type === 'followed');
    const allMarked = this.markedPoliticians.filter(p => p.type === 'all');

    this.followedPoliticians.push(...followedMarked.map(p => p.politician));
    this.allPoliticians.push(...allMarked.map(p => p.politician));

    this.markedPoliticians = [];

    this.isSupported = null;
    this.isBold = false;
    this.isItalic = false;

    form.resetForm();
  }
}
