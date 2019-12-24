import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recieve-message',
  template: `
    <p>
      message i got is: {{message$ | async}}
    </p>
  `,
  styleUrls: ['./recieve-message.component.css']
})
export class RecieveMessageComponent implements OnInit {
    // message : string;

    message$ : Observable<string> = this._store.pipe(
        select('message', 'message')
    )

    constructor(private _messageService : MessageService, private _store : Store<any>) { }

    ngOnInit() {
        this._messageService.message$.subscribe((msg : string) => {
            this.message = msg;
        })
    }

}
