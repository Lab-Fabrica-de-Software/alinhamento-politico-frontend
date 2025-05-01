import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { User } from '../../../../core/models/user';

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
  markedPoliticians: User[] = [];

  contributionText: string = '';
  isBold = false;
  isItalic = false;
  isSupported: boolean | null = null;
  isPulsing = {
    support: false,
    oppose: false,
  };

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

  showText() {
    console.log(this.contributionText);
    console.log(this.isSupported);
    console.log(this.markedPoliticians);
  }
}
