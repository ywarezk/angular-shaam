import { Component, OnInit } from '@angular/core';

@Component({
    // exportAs: 'yarivChild',
    selector: 'app-child',
    template: `
    <p>
      child works!
    </p>

    <h1>Property binding</h1>

    <p>
        {{ title }}
    </p>

    <!-- non sideeffect expression -->
    <p>

        {{ sayHello() }}
    </p>

    <!-- [property]="no sideffeect" -->
    <p [innerText]="title">
        
    </p>

    <h1>Event Binding</h1>


    <!-- side effect expression -->
    <!-- (event)="with sideeffect" -->
    <button (click)="changeTitle()">
        Click me
    </button>

    <div (mouseover)="title='hovered'">
        hover over me
    </div>

    <input type="text" (input)="changeTheText($event)" />

    <h1>Two way binding</h1>

    <!-- <input type="text" name="two-way" [value]="twoWayExample" value="{{twoWayExample}}" /> -->

    <input
        (input)="twoWayExample=$event.target.value" 
        type="text" 
        name="two-way" 
        [value]="twoWayExample" />

    <input 
        type="text"
        [(ngModel)]="twoWayExample2"
    />
    {{twoWayExample2}}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    title = 'hello';

    twoWayExample = 'this should be binded to the input';
    twoWayExample2 = 'this should be binded to the input';

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.title = 'changed in timer';
        }, 3000);    
    }

    sayHello = () => {
        // this.title = 'foo bar'; //error    
        return 'hello world'        
    }

    changeTitle = () => {
        this.title = 'changed by clicking the button'
    }

    changeTheText = (event) => {
        this.title = event.target.value;
    }

}
