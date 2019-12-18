import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-example',
  template: `
    <p>
      lifecycle-example works!
    </p>
  `,
  styleUrls: ['./lifecycle-example.component.css']
})
export class LifecycleExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
