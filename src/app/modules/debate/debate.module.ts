import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { DebateFilterComponent } from './components/debate-filter/debate-filter.component';
import { DebateContributionComponent } from './components/debate-contribution/debate-contribution.component';
import { AiTextComponent } from './components/ai-text/ai-text.component';


@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    DebateFilterComponent,
    DebateContributionComponent,
    AiTextComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule,
    NgClass,
    FormsModule,
    SharedModule
  ]
})
export class DebateModule { }
