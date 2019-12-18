import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    exportAs: 'stamMessage',
  selector: 'app-message',
  template: `
    <h1>
      property binding between components: @Input
    </h1>

    <h1>
        We got this from the parent: {{message}} {{myNumber}}
    </h1>
    <button (click)="sendMessageToParent()">
        Release an event to the listeners
    </button>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    @Input('messageToChild')
    message : string;


    @Input()
    myNumber : number;

    @Output('onMessage')
    messageEvent : EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    sendMessageToParent = () => {
        this.messageEvent.emit('hello from child message');
    }

}
