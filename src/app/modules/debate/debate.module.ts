import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { MainTopicsComponent } from './components/main-topics/main-topics.component';
import { DebateFilterComponent } from './components/debate-filter/debate-filter.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    MainTopicsComponent,
    DebateFilterComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule
  ]
})
export class DebateModule { }
