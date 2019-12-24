import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-tab',
  template: `
    <p>
      parent-tab works!
    </p>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./parent-tab.component.css']
})
export class ParentTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
