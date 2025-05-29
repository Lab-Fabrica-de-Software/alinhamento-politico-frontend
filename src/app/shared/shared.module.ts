import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ShareComponent } from './components/share/share.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { KeyWordsComponent } from './components/key-words/key-words.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ShareComponent,
    ShareButtonComponent,
    UserInformationComponent,
    KeyWordsComponent    
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    ShareButtonComponent,
    ShareComponent,
    UserInformationComponent,
    KeyWordsComponent
  ]
})
export class SharedModule { }
