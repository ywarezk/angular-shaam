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

    <app-message [messageToChild]="title" [myNumber]="42"></app-message>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this will be passed to child';
}
