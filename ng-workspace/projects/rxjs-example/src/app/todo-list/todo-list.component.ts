import { Component, OnInit, OnDestroy } from '@angular/core';
import {TodoService} from '../todo.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  template: `
    <form>
        <!--<input type="search" class="form-control" (input)="userTypedString($event)" /> -->
        <input name="search" type="search" class="form-control" [(ngModel)]="search"  />
        
    </form>
    <ul>
        <li *ngFor="let task of tasks">
            {{task.title}}
        </li>
    </ul>
  `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
    tasks = [];

    searchPulses : Subject<string> = new Subject();

    set search(value : string){
        this.searchPulses.next(value);

        // this._todo.searchTasks(value).subscribe((tasksFromServer) => {
        //     this.tasks = tasksFromServer as any;
        // })
    };

    constructor(private _todo : TodoService) { }

    ngOnInit() {

        this.searchPulses.pipe(
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe((searchString : string) => {
            this._todo.searchTasks(searchString).subscribe((tasksFromServer) => {
                this.tasks = tasksFromServer as any;
            })
        })
    }

    userTypedString = (event) => {
        event.target.value
    }

    ngOnDestroy() {
        this.searchPulses.complete();
    }

}
