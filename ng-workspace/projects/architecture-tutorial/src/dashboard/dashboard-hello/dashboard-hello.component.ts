import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-hello',
  template: `
    <p>
      dashboard-hello works!
    </p>
  `,
  styleUrls: ['./dashboard-hello.component.css']
})
export class DashboardHelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
