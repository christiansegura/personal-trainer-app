import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'register',
  template: `
  <auth-form (submitted)="registerUser($event)">
    <h1 class="mb-4">Register new account</h1>
    <a routerLink="/auth/login">Already have an account?</a>
    <button class="btn btn-primary" type="submit">
      Create Account
    </button>
  </auth-form>
  `
})

export class RegisterComponent {
  constructor() {

  }
  registerUser(event: FormGroup){
    console.log(event.value);
  }
}
