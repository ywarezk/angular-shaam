import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OskService {

    constructor(private _http : HttpClient) { }

    /**
     * returns: {Observable<Object>}
     */
    fetchOskim = () => {
        return this._http.get(
          'https://nztodo.herokuapp.com/api/task/?format=json'
        )
    }

    /**
     * @returns: {Observable<Object>}
     */
    fetchOsk = (id : string | number) => {
        return this._http.get(
            `https://nztodo.herokuapp.com/api/task/${id}/?format=json`
        )
    }
}
