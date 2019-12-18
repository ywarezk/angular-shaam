import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Component Tutorial</h1>

    <app-child></app-child>

    <app-child></app-child>

    <app-child></app-child>

    <h1>
    @Input
    parent transfer data to child
    </h1>

    <app-message [messageToChild]="title" [myNumber]="42 + 10" (onMessage)="gotMessageFromChild($event)" ></app-message>


    <app-trans-example>
        <div>
            <h1>Hello from parent</h1>
        </div>
    </app-trans-example>

    <h1>Lifecycle</h1>
    <app-lifecycle-example #thisExample></app-lifecycle-example>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this will be passed to child';

  gotMessageFromChild = (msgFromChild : string) => {
    this.title = msgFromChild;
  }
}




