import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { User } from '../../../../core/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-debate-contribution',
  standalone: false,
  templateUrl: './debate-contribution.component.html',
  styleUrl: './debate-contribution.component.css'
})
export class DebateContributionComponent {

  @ViewChild('editor') editorRef!: ElementRef<HTMLTextAreaElement>;

  ngAfterViewInit() {
    this.editorRef.nativeElement.addEventListener('mouseup', () => this.updateActiveStates());
    this.editorRef.nativeElement.addEventListener('keyup', () => this.updateActiveStates());
  }

  @Input()
  politicians: User[] = [];
  markedPoliticians: User[] = [];

  contributionText: string = '';
  isBold = false;
  isItalic = false;
  isSupported: boolean | null = null;
  isPulsing = {
    support: false,
    oppose: false,
  };
  showSelectBox = false;

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

  addMarkedPolitician(politician: User) {
    this.markedPoliticians.push(politician);
    this.politicians = this.politicians.filter((p) => p != politician);
    this.showSelectBox = false;
  }

  removeMarkedPolitician(politician: User) {
    this.markedPoliticians = this.markedPoliticians.filter((p) => p != politician);
    this.politicians.push(politician);
  }
  
  toggleSelectBox() {
    this.showSelectBox = !this.showSelectBox;
  }

  submitContribution(form: NgForm) {
    this.contributionText = '';
    if (this.editorRef) {
      this.editorRef.nativeElement.innerHTML = '';
    }

    this.politicians.push(...this.markedPoliticians);
    this.markedPoliticians = [];
  
    this.isSupported = null;
    this.isBold = false;
    this.isItalic = false;
  
    form.resetForm();
  }
}
