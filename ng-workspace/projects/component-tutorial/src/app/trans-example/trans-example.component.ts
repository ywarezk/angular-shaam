import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trans-example',
  template: `
    <h1>Transclusion</h1>

    <p>
        parent pass template to child
    </p>

    <ng-content></ng-content>
  `,
  styleUrls: ['./trans-example.component.css']
})
export class TransExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
