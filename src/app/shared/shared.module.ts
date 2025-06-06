import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill'

import { NavbarComponent } from './components/navbar/navbar.component';
import { ShareComponent } from './components/share/share.component';
import { ShareButtonComponent } from './components/share-button/share-button.component';
import { UserInformationComponent } from './components/user-information/user-information.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ShareComponent,
    ShareButtonComponent,
    UserInformationComponent,
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    ShareButtonComponent,
    ShareComponent,
    UserInformationComponent,
    TextEditorComponent
  ]
})
export class SharedModule { }
