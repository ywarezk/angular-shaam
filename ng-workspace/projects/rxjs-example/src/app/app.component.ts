import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-todo-list></app-todo-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs-example';
}
