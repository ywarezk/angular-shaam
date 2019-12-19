import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
    jwt : Subject<string> = new Subject();

    constructor(private _http : HttpClient) { }

    /**
     * @returns: {Observable<Object>}
     */
    searchTasks = (searchTerm : string) => {
        return this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${searchTerm}`);
    }
}
