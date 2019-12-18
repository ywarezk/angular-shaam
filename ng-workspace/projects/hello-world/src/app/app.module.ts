import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LifecycleExampleComponent } from './lifecycle-example/lifecycle-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
