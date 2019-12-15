import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <h1>
      property binding between components: @Input
    </h1>

    <h1>
        We got this from the parent: {{message}} {{myNumber}}
    </h1>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    @Input('messageToChild')
    message : string;


    @Input()
    myNumber : number;

  constructor() { }

  ngOnInit() {
  }

}
