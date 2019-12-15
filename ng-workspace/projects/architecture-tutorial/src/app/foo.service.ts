import { Injectable } from '@angular/core';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FooService {
    bar = 'foo bar';
    user = new User();

    constructor(private _http : HttpClient) {}
}