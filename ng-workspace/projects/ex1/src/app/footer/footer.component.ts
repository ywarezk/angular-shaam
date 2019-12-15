import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
