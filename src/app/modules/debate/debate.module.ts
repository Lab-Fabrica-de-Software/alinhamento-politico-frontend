import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { DebateContributionComponent } from './components/debate-contribution/debate-contribution.component';
import { AiTextComponent } from './components/ai-text/ai-text.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    DebateContributionComponent,
    AiTextComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule,
    NgClass
  ]
})
export class DebateModule { }
