import { Component, OnInit, OnDestroy, ViewChild, OnChanges, SimpleChanges, Input } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle-example',
  template: `
    <h1>Lifecycle</h1>

    <p>
        we can connect to lifecycle events
    </p>

    <p>Birth</p>
    <p>maintainance</p>
    <p>death</p>

    <p>
        {{ 1 + 10 }}
    </p>
    <p>
        {{title}}
    </p>
    <!-- <button (click)="...">
    </button> -->
    <!-- <app-child () -->

    <app-message #appMessage></app-message>
  `,
  styleUrls: ['./lifecycle-example.component.css']
})
export class LifecycleExampleComponent implements OnInit, OnDestroy, OnChanges {
    title = "hello";
    // @Input

    @Input()
    hello;

    @ViewChild('appMessage', {static: true})
    appMessage : MessageComponent; 

    private _intervalId : any;
    private _sub : Subscription;

    constructor() { }

    ngOnInit() {
        // this.title = 'hello';
        this._intervalId = setInterval(() => {

        }, 1000);

        // websocket
        // appChild.customEvent.subscribe()

        // document.getElementById('stam')

        this._sub = this.appMessage.messageEvent.subscribe(() => {

        })

    }

    ngOnDestroy() {
        clearInterval(this._intervalId);
        this._sub.unsubscribe();
    }

    // when @Input change
    // ===
    // {hello: {previousValue ..., currentValue}}
    ngOnChanges(changes: SimpleChanges): void {
        
    }

    sayHello = () => {
        this.title = 'world';
    }

    sayHello2() {
        this.title = 'world'
    }

}
