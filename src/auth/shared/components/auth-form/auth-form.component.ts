import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="container">
      <div class="row">
        Auth form
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form">
          <ng-content select="h1"></ng-content>
          <label class="form-label" for="email">email</label>
          <input class="form-control mb-4" name="email" type="text" placeholder="email address" formControlName="email">
          <label class="form-label" for="password">password</label>
          <input class="form-control mb-4" name="password" type="text" placeholder="enter password"
                 formControlName="password">
          <ng-content select="error"></ng-content>
          <div class="auth-form-action mb-2">
            <ng-content select="button"></ng-content>
          </div>
          <div class="auth-form-toggle">
            <ng-content select="a"></ng-content>
          </div>
        </form>
      </div>
    </div>
  `
})

export class AuthFormComponent {
  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {

  }
}
