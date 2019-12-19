import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-message-reactive',
  template: `
    <form (ngSubmit)="handleSubmit()" [formGroup]="messageForm">
        <!-- <input type="text" [formControl]="messageInput" /> -->
        <input type="text" formControlName="message" />

        <div *ngIf="messageForm.controls.message.errors?.required">
            this field is required
        </div>

        <div formGroupName="address" >
            <input type="text" formControlName="street" />
            <input type="text" formControlName="city" />
        </div>
        <button>submit</button>
    </form>
  `,
  styleUrls: ['./message-reactive.component.css']
})
export class MessageReactiveComponent implements OnInit {

    messageInput : FormControl = new FormControl('hello world');

    messageForm : FormGroup = new FormGroup({
        message: new FormControl('', [Validators.required, Validators.minLength(5)]),
        address: new FormGroup({
            street: new FormControl(),
            city: new FormControl()
        })
    }, [])

    messageForm2 = this._formBuilder.group({
        message: ['', [Validators.required, Validators.minLength(5)]],
        address: this._formBuilder.group({
            street: '',
            city: ''
        })
    })

    constructor(private _formBuilder : FormBuilder) { }

    ngOnInit() {
    }

    handleSubmit = () => {
        console.log(this.messageForm.value)
    }

}
