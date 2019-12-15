import { NgModule } from '@angular/core';
import { HelloSettingsComponent } from './hello-settings/hello-settings.component';
import {DashboardModule} from '../dashboard/dashboard.module';
import { BgRedDirective } from './bg-red.directive';

@NgModule({
    declarations: [HelloSettingsComponent, BgRedDirective],
    exports: [HelloSettingsComponent],
    imports: [
        DashboardModule
    ],
    providers: []
})
export class SettingsModule {

}