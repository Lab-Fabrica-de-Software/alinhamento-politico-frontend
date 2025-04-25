import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareComponent } from './modules/debate/components/share/share.component';
import { ShareButtonComponent } from './modules/debate/components/share-button/share-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ShareComponent,
    ShareButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
