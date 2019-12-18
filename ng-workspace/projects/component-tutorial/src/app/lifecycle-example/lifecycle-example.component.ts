import { Component, OnInit, OnDestroy } from '@angular/core';

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
  `,
  styleUrls: ['./lifecycle-example.component.css']
})
export class LifecycleExampleComponent implements OnInit, OnDestroy {
    title = "hello";
    // @Input

    constructor() { }

    ngOnInit() {
        // this.title = 'hello';
    }

    ngOnDestroy() {

    }

    sayHello = () => {
        this.title = 'world';
    }

    sayHello2() {
        this.title = 'world'
    }

}
