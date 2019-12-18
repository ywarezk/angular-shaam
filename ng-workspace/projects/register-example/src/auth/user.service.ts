import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }

  /**
   * @returns {Observable}
   */
  registerUser = (firstName, lastName, email, password) => {

    // fetch('...').then()

    return this._http.post('https://academeez-login-ex.herokuapp.com/api/users/register', {
        firstName: firstName,
        lastName,
        email,
        password
    })
  }
}
