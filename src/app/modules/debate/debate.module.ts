import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { CreateContributionComponent } from './components/create-contribution/create-contribution.component';
import { MainTopicsComponent } from './components/main-topics/main-topics.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    CreateContributionComponent,
    MainTopicsComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule,
    FormsModule
  ]
})
export class DebateModule { }
