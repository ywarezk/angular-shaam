import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-user',
  template: `
    <!-- <shaam-tabs></shaam-tabs> -->
    <p>
      child-user works!
    </p>
  `,
  styleUrls: ['./child-user.component.css']
})
export class ChildUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
