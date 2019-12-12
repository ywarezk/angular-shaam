import { Component } from '@angular/core';

// <app-root></app-root>
@Component({
    selector: 'app-root',
//   templateUrl: './app.component.html',
    template: `
        <h1>
            hello architecture {{ title }}
        </h1>
        <button (click)="sayHello()">
            Click me
        </button>
        <app-hello2></app-hello2>
    `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Nariman';

  sayHello = () => {
    //   alert('hello world');
    this.title = 'Yariv';
  }
}
