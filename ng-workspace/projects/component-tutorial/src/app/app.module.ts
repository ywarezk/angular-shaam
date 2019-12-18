import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { TrvComponent } from './trv/trv.component';
import { TransExampleComponent } from './trans-example/trans-example.component';
import { LifecycleExampleComponent } from './lifecycle-example/lifecycle-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MessageComponent,
    TrvComponent,
    TransExampleComponent,
    LifecycleExampleComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
