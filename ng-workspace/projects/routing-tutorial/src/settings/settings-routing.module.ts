import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentTabComponent } from './parent-tab/parent-tab.component';
import { ChildUserComponent } from './child-user/child-user.component';


// /settings/user
const routes: Routes = [{
    // settings
    path: '',
    component: ParentTabComponent,
    children: [
        {
            // /settings/user
            path: 'user',
            component: ChildUserComponent    
        }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
