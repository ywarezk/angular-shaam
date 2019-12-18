import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  template: `
    <h1>Pipe</h1>

    <p>take input present output in some format</p>

    <h2>
        json
    </h2>

    <p>
        {{ myObj | json | lowercase}}
    </p>

    <h2>Date</h2>

    <p> {{ now | date:'HH:mm' }}</p>

    <p> {{ now | date:'HH:mm'}}</p>

    <p> {{ now | date:format}}</p>

    <h2>user</h2>

    <!-- pipe is reusable -->
    <p>{{ displayUserDetails() }}</p>

    <p>
        {{ 'yariv katz' | snake:'r':42 }}
    </p>

    <!-- pipe is faster -->
  `,
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

    myObj = {
        yariv: 'katZ',
        hello: 42
    }

    now = new Date();

    format = 'HH:mm';

  constructor() { }

  ngOnInit() {
  }

  displayUserDetails = (user) => {
    return '...';
  }

}
