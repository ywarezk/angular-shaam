import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  /**
   * @returns: {Observable<Object>}
   */
  login = (email : string, password : string) => {
    return this._http.post(
        'https://academeez-login-ex.herokuapp.com/api/users/login', 
        {email, password}
    )
  }

  sayHello = (msg : string) => {
      return 'hello world ' + msg;
  }
}
