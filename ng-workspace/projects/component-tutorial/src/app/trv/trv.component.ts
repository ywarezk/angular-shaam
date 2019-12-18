import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-trv',
  template: `
    <h1>Template Reference Variable</h1>

    <p>
        variable that exists in the template
    </p>

    <p #myParagraph>
        another way of communication
    </p>

    <p>
        {{myParagraph.innerText}}
    </p>

    <input type="text" [(ngModel)]="message" #msgInput="ngModel" />

    <app-child #myChild ></app-child>

    <p>

        {{ myChild.sayHello() }}
    </p>

    <!-- <app-message #myMessage="stamMessage" hello #anotherDirective="hello"></app-message> -->

    <p>
        
    </p>
  `,
  styleUrls: ['./trv.component.css']
})
export class TrvComponent implements OnInit {

    message = 'hello world'

    constructor() { }

    ngOnInit() {
    }

}
