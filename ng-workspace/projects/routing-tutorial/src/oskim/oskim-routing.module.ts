import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OskimListComponent } from './oskim-list/oskim-list.component';
import { OskDetailsComponent } from './osk-details/osk-details.component';


const routes: Routes = [
    {
        // /oskim
        path: '',
        component: OskimListComponent
    },
    // {pk: 9810}
    {
        path: ':pk',
        component: OskDetailsComponent
    },
    {
        path: 'destails',
        component: OskDetailsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OskimRoutingModule { }
