import { Component, OnInit } from '@angular/core';
import {FooService} from '../foo.service';

@Component({
  selector: 'app-hello2',
  template: `
    <p>
      hello2 works! {{ fooTitle }}
    </p>
    <shaam-hello-settings></shaam-hello-settings>
  `,
  styleUrls: ['./hello2.component.css'],
  providers: [
      FooService
  ]
})
export class Hello2Component implements OnInit {
    fooTitle = this._fooService.bar;

    constructor(private _fooService : FooService) { }

    ngOnInit() {
    }

}
