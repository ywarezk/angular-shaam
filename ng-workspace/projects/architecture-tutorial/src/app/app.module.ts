import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Hello2Component } from './hello2/hello2.component';
import {HelloComponent} from './hello/hello.component';
import { SettingsModule } from '../settings/settings.module';
import {FooService} from './foo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Hello2Component,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    SettingsModule,
    HttpClientModule
  ],
  providers: [ /*FooService*/ ],
    bootstrap: [AppComponent /*, AvigailComponent*/]
})
export class AppModule { }
