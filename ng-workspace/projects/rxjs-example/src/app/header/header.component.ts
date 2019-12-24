import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  template: `
    <p *ngIf="isLoggedIn; else notLoggedIn">
      welcome back
    </p>
    <p *ngIf="!isLoggedIn">
      hello anonymous
    </p>
    <ng-template #notLoggedIn>
        <p>
            hello anonymous
        </p>
    </ng-template>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;

    constructor(private _todoService : TodoService) { }

    ngOnInit() {
        this._todoService.jwt.subscribe((token) => {          
            this.isLoggedIn = true;
        })
    }

}
