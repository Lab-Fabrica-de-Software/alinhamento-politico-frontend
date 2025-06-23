import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ShareComponent } from './components/share/share.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { KeyWordsComponent } from './components/key-words/key-words.component';
import { SelectionDateRangeComponent } from './components/selection-date-range/selection-date-range.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AiTextComponent } from './components/ai-text/ai-text.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ShareComponent,
    ShareButtonComponent,
    UserInformationComponent,
    KeyWordsComponent,
    SelectionDateRangeComponent,
    AiTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgClass,
    NgbDatepickerModule
  ],
  exports: [
    NavbarComponent,
    ShareButtonComponent,
    ShareComponent,
    UserInformationComponent,
    KeyWordsComponent,
    SelectionDateRangeComponent,
    AiTextComponent
  ]
})
export class SharedModule { }
