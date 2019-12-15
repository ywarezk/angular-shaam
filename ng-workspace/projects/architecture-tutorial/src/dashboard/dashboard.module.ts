import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHelloComponent } from './dashboard-hello/dashboard-hello.component';



@NgModule({
  declarations: [DashboardHelloComponent],
  imports: [
    CommonModule
  ],
  exports: [DashboardHelloComponent]
})
export class DashboardModule { }
