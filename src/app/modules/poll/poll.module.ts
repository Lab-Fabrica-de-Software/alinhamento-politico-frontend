import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PollRoutingModule } from './poll-routing.module';
import { PollFilterComponent } from './components/poll-filter/poll-filter.component';
import { PollFormComponent } from './components/poll-form/poll-form.component';
import { PollResponseComponent } from './components/poll-response/poll-response.component';
import { PollResultsComponent } from './components/poll-results/poll-results.component';
import { PollListComponent } from './components/poll-list/poll-list.component';


@NgModule({
  declarations: [
    PollFilterComponent,
    PollFormComponent,
    PollResponseComponent,
    PollResultsComponent,
    PollListComponent,
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
    PollResultsComponent,
    PollListComponent,
  ]
})
export class PollModule { }
