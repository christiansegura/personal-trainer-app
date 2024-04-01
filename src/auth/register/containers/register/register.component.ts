import {Component} from '@angular/core';

@Component({
  selector: 'register',
  template: `
  Register
  <auth-form>
    <h1>Register</h1>
    <a routerLink="/auth/register">Already have an account?</a>
    <button class="btn btn-primary" type="submit">
      Create Account
    </button>
  </auth-form>
  `
})

export class RegisterComponent {
  constructor() {

  }
}
