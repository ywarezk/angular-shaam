import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm">
        <div class="form-group">
            <label>Email</label>
            <!-- <input type="email" name="email" class="form-control" formControlName="email" /> -->
            <input type="email" name="email" class="form-control" [formControlName]="'email'" />
            <div *ngIf="loginForm.controls.email?.errors?.required">
                This field is required
            </div>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control" formControlName="password" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Login</button>
        </div>
    </form>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm : FormGroup = new FormGroup({
        email: new FormControl('yariv@nerdeez.com', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    constructor() { }

    ngOnInit() {
    }

}
