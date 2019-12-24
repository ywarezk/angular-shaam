import { Component, OnInit } from '@angular/core';
import { OskService } from '../osk.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-oskim-list',
  template: `
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let osk of (oskim$ | async)">
            <a [routerLink]="'/oskim/' + osk.id + '?chani=hello'">
                {{osk.title}}
            </a>
            <a [routerLink]="['/oskim', osk.id]">
                {{osk.title}}
            </a>
            <!--<a [routerLink]="'/oskim/details?id=' + osk.id">
                {{osk.title}}
            </a>-->
        </li>
    </ul>
  `,
  styleUrls: ['./oskim-list.component.css']
})
export class OskimListComponent implements OnInit {

    oskim$ : Observable<any>;

    constructor(private _oskService : OskService) { }

    ngOnInit() {
        // this._oskService.fetchOskim().subscribe((tasks) => {
        //     ...
        // })

        this.oskim$ = this._oskService.fetchOskim();
    }

}
