import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PollRoutingModule } from './poll-routing.module';
import { PollFilterComponent } from './components/poll-filter/poll-filter.component';
import { PollFormComponent } from './components/poll-form/poll-form.component';
import { PollResponseComponent } from './components/poll-response/poll-response.component';


@NgModule({
  declarations: [
    PollFilterComponent,
    PollFormComponent,
    PollResponseComponent,

  ],
  imports: [
    CommonModule,  // *ngIf, *ngFor
    FormsModule,   // ngModel
    PollRoutingModule,
  ],
  exports: [
    PollFilterComponent,
    PollFormComponent,
    PollResponseComponent,
  ]
})
export class PollModule { }
