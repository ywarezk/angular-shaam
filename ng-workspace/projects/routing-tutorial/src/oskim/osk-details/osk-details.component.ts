import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { OskService } from '../osk.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-osk-details',
  template: `
    <p>
      {{ (osk$ | async).title }}
    </p>
  `,
  styleUrls: ['./osk-details.component.css']
})
export class OskDetailsComponent implements OnInit, OnDestroy {

    osk$ : Observable<any>;
    private _sub : Subscription;

    constructor(
        private _activated : ActivatedRoute,
        private _oskService : OskService 
    ) { }

    ngOnInit() {
        this._sub = this._activated.paramMap.subscribe((params : ParamMap) => {
            const pk = params.get('pk');
            this.osk$ = this._oskService.fetchOsk(pk);
        });
    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

}
