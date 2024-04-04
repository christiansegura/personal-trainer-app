import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  template: `
  <auth-form (submitted)="registerUser($event)">
    <h1 class="mb-4">Register new account</h1>
    <a routerLink="/auth/login">Already have an account?</a>
    <button class="btn btn-primary" type="submit">
      Create Account
    </button>
    <div class="error text-danger mb-4" *ngIf="error">{{error}}</div>
  </auth-form>
  `
})

export class RegisterComponent {
  error = '';
  constructor(private authService: AuthService, private router: Router) {

  }
  async registerUser(event: FormGroup){
    const {email, password} = event.value;
    try {
    await this.authService.createUser(email, password);
      this.router.navigate(['/']);
    } catch (err: unknown) {
      // The only type annotations that are allowed on catch clause variables are any or unknown
      if (err instanceof Error) {
        this.error = err.message;
        console.log(err);
      }
    }
  }
}
