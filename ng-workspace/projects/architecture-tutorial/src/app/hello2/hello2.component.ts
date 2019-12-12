import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello2',
  template: `
    <p>
      hello2 works!
    </p>
    <shaam-hello></shaam-hello>
  `,
  styleUrls: ['./hello2.component.css']
})
export class Hello2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
