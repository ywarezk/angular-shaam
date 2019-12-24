import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {Store} from '@ngrx/store';
import {setMessage} from '../actions/message.actions';

@Component({
  selector: 'app-send-message',
  template: `
    <form (ngSubmit)="sendToBrother()">
        <input type="text" name="message" [(ngModel)]="message" />
        <button>submit</button>
    </form>
  `,
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

    message = '';

    constructor(private _message : MessageService, private _store : Store<any>) { }

    ngOnInit() {
    }

    sendToBrother = () => {
        // this._message.message$.next(this.message);
        this._store.dispatch(setMessage({newMessage: this.message}))
    }

}
