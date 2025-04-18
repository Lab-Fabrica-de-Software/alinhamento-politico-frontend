import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { SelectionDateRangeComponent } from './components/selection-date-range/selection-date-range.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    SelectionDateRangeComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule
  ]
})
export class DebateModule { }
