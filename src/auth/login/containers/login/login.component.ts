import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    segurac@test.com
    test1234
    <div>
      <auth-form (submitted)="loginUser($event)">
        <h1 class="mb-4">Login</h1>
        <a routerLink="/auth/register">Not Registered?</a>
        <button class="btn btn-primary" type="submit">
          Login
        </button>
        <div class="error text-danger mb-4" *ngIf="error">{{error}}</div>
      </auth-form>
    </div>
  `
})

export class LoginComponent {
  error= '';
  constructor(private authService: AuthService, private router: Router) {

  }

  async loginUser(event: FormGroup){
    const {email, password} = event.value;
    try {
      await this.authService.loginUser(email, password);
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
