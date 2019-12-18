import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  template: `
    <h1>Angular built in directives</h1>

    <p>
        ngModel - binding
    </p>

    <h1>ngIf</h1>

    <p>
        display element only if true

    </p>
    <div *ngIf="myBoolean">
        <app-message></app-message>
    </div>

    <h1>
        ngFor 
    </h1>

    <ul>
        <li *ngFor="let item of myList">
            {{item}}
        </li>
    </ul>

    <h1>
        ngClass
    </h1>

    <p>
        css classes from object    
    </p>

    <!-- <div class="hello-css foo-bar"> -->
    <div [ngClass]="cssClassObj">
    </div>

    <h1>ngStyle</h1>

    <!-- <p style="background-color: red"> -->
    <p [ngStyle]="styleObj"></p>
  `,
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
    myBoolean = true;

    myList = ['hello', 'world', 'foo', 'bar'];

    cssClassObj = {
        'hello-css': true,
        'foo-bar': true,
        'stam': false
    }

    styleObj = {
        'background-color': 'red'
    }

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.myBoolean = false;
        }, 1000)
    }

}
