import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { OskimModule } from '../oskim/oskim.module';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'oskim',
        loadChildren: () => {
            // Promise<{OskimModule: class OskimModule ...}>
            // Promise<OskimModule>
            return import('../oskim/oskim.module').then((m) => {
                return m.OskimModule;
            });
        }
    },
    {
        path: 'settings',
        loadChildren: () => {
            // Promise<{OskimModule: class OskimModule ...}>
            // Promise<OskimModule>
            return import('../settings/settings.module').then((m) => {
                return m.SettingsModule;
            });
        }
    },

    // {
    //     path: 'oskim2',
    //     loadChildren: OskimModule
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
