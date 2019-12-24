import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
    <form (ngSubmit)="handleLogin()">
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
    </form>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  handleLogin = () => {
      // ...

      // redirect to about page
      this._router.navigateByUrl('/about');
    //   this._router.navigateByUrl('/oskim');

  }

}
