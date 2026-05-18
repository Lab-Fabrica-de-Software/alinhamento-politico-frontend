import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebateRoutingModule } from './debate-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DebateGroupComponent } from './components/debate-group/debate-group.component';
import { CreateContributionComponent } from './components/create-contribution/create-contribution.component';
import { DebateFilterComponent } from './components/debate-filter/debate-filter.component';
import { DebateContributionComponent } from './components/debate-contribution/debate-contribution.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    DebateGroupComponent,
    DebateFilterComponent,
    CreateContributionComponent,
    DebateContributionComponent
  ],
  imports: [
    CommonModule,
    DebateRoutingModule,
    NgClass,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DebateModule { }
