import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
  <div>
    Auth form
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <ng-content select="[h1]"></ng-content>
      <label for="email">email</label>
      <input name="email" type="text" placeholder="email address" formControlName="email">
      <label></label>
      <input name="password" type="text" placeholder="enter password">
    </form>
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
}
