import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  
    <div class="container">
        <div class="row">
            <div class="col-4">
                <app-register></app-register>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'register-example';
}
