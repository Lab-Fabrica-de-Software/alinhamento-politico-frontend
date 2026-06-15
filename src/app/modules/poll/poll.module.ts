import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PollRoutingModule } from './poll-routing.module';
import { PollFilterComponent } from './components/poll-filter/poll-filter.component';
import { PollFormComponent } from './components/poll-form/poll-form.component';


@NgModule({
  declarations: [
    PollFilterComponent,
    PollFormComponent,

  ],
  imports: [
    CommonModule,  // *ngIf, *ngFor
    FormsModule,   // ngModel
    PollRoutingModule,
  ],
  exports: [
    PollFilterComponent,
    PollFormComponent,
  ]
})
export class PollModule { }
