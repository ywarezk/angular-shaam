import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Hello2Component } from './hello2/hello2.component';
import {HelloComponent} from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    Hello2Component,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
    bootstrap: [AppComponent /*, AvigailComponent*/]
})
export class AppModule { }
