import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ParentTabComponent } from './parent-tab/parent-tab.component';
import { ChildUserComponent } from './child-user/child-user.component';


@NgModule({
  declarations: [ParentTabComponent, ChildUserComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
