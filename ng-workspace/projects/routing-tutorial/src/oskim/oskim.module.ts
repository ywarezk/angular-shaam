import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OskimRoutingModule } from './oskim-routing.module';
import { OskimListComponent } from './oskim-list/oskim-list.component';
import { OskDetailsComponent } from './osk-details/osk-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [OskimListComponent, OskDetailsComponent],
  imports: [
    CommonModule,
    OskimRoutingModule,
  ]
})
export class OskimModule { }
