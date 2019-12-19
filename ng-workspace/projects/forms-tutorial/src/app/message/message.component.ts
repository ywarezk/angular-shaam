import { Component, OnInit } from '@angular/core';
import {NgModel, NgForm, FormControl} from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <form #myForm="ngForm" (ngSubmit)="handleForm(myForm)">
        <input name="hello" type="text" email minlength="5" ngModel #messageNgModel="ngModel" />

        {{messageNgModel.errors | json}}

        <div *ngIf="messageNgModel.errors?.email">
            this email is invalid
        </div>

        <input name="password" type="password" minlength="5" ngModel />

        <button>submit</button>
    </form>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    // message = 'hello world';
    // password = '';

    constructor() { }

    ngOnInit() {
    }

    handleForm = (f : NgForm) => {
        
        console.log(f.value);

        // throw new Error();
    }

}
