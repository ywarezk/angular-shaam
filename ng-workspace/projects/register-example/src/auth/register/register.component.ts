import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  template: `
    <form (submit)="registerUser()">
        <div class="form-group">
            <label>First Name</label>
            <input [(ngModel)]="firstName" type="text" name="firstName" class="form-control" />
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input [(ngModel)]="lastName" type="text" name="lastName" class="form-control" />
        </div>
        <div class="form-group vdsfg">
            <label>Email</label>
            <input [(ngModel)]="email" type="email" name="email" class="form-control" />
        </div>
        <div class="form-group">
            <label>Password</label>
            <input [(ngModel)]="password" type="password" name="password" class="form-control" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Register</button>
        </div>

        {{ token | json }}
    </form>
  `,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    firstName = '';
    lastName = '';
    email = '';
    password = '';

    token : any = null;

    constructor(private _userService : UserService) { }

    ngOnInit() {
    }

    registerUser = () => {
        this._userService.registerUser(
            this.firstName, 
            this.lastName, 
            this.email, 
            this.password
        ).subscribe((objWithToken : any) => {
            this.token = objWithToken
        })
    }

}
