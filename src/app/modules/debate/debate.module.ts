import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { DebateContributionComponent } from './components/debate-contribution/debate-contribution.component';
import { MainTopicsComponent } from './components/main-topics/main-topics.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    DebateContributionComponent,
    MainTopicsComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule,
    FormsModule
  ]
})
export class DebateModule { }
