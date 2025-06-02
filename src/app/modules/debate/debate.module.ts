import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { SelectionDateRangeComponent } from '../../shared/selection-date-range/selection-date-range.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MainTopicsComponent } from './components/main-topics/main-topics.component';
import { DebateContributionComponent } from './components/debate-contribution/debate-contribution.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    SelectionDateRangeComponent,
    MainTopicsComponent,
    DebateContributionComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule,
    FormsModule,
    NgbDatepickerModule
  ]
})
export class DebateModule { }
