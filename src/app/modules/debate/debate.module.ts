import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { DebateContributionComponent } from './components/debate-contribution/debate-contribution.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    DebateContributionComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule
  ]
})
export class DebateModule { }
