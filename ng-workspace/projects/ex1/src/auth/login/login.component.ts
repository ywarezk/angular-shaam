import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form>
        <div class="form-group">
            <label>Email</label>
            <input 
                class="form-control"
                type="email" name="email" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input 
                class="form-control"
                type="password" name="password" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Login</button>
        </div>
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
