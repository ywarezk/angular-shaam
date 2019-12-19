import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-message></app-message>
    <h1>Reactive</h1>
    <app-message-reactive></app-message-reactive>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-tutorial';
}
