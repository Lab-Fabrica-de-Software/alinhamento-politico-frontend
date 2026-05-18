import { Component, ElementRef, Input, Output, EventEmitter, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../core/models/user';

@Component({
  selector: 'app-create-contribution',
  standalone: false,
  templateUrl: './create-contribution.component.html',
  styleUrl: './create-contribution.component.css'
})
export class CreateContributionComponent implements OnInit {

  @Input() allPoliticians: User[] = [];
  @Input() followedPoliticians: User[] = [];

  @Output() submitMarkedPoliticians = new EventEmitter<User[]>();
  @Output() submitContributionText = new EventEmitter<string>();
  @Output() submitSupport = new EventEmitter<boolean | null>();

  contributionForm!: FormGroup;

  markedPoliticians: User[] = [];

  contributionText = '';
  isBold = false;
  isItalic = false;
  isSupported: boolean | null = null;
  isPulsing = {
    support: false,
    oppose: false
  };
  showSelectBox = false;
  searchTerm: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contributionForm = this.fb.group({
      contributionText: ['', Validators.required],
    });
  }

  setSupport(value: boolean) {
    this.isSupported = value;

    const key = value ? 'support' : 'oppose';
    this.isPulsing[key] = true;

    setTimeout(() => {
      this.isPulsing[key] = false;
    }, 300);
  }

  handleMarkedPoliticiansChange(politicians: User[]) {
    this.markedPoliticians = politicians;
  }

  handleContributionTextChange(text: string) {
    this.contributionText = text;
  }

  submitContribution() {
    this.submitContributionText.emit(this.contributionText);
    this.submitMarkedPoliticians.emit(this.markedPoliticians);
    this.submitSupport.emit(this.isSupported);

    this.markedPoliticians = [];
    this.isSupported = null;
    this.isBold = false;
    this.isItalic = false;
  }
}
