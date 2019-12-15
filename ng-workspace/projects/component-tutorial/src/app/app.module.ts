import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
