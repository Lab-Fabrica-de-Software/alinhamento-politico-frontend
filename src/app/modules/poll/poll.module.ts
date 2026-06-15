import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PollRoutingModule } from './poll-routing.module';
import { PollFilterComponent } from './components/poll-filter/poll-filter.component';


@NgModule({
  declarations: [
    PollFilterComponent,

  ],
  imports: [
    CommonModule,  // *ngIf, *ngFor
    FormsModule,   // ngModel
    PollRoutingModule,
  ],
  exports: [
    PollFilterComponent,
  ]
})
export class PollModule { }
