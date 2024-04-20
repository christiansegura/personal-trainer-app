import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  styleUrls: ['login.component.scss'],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-3">

          <auth-form (submitted)="loginUser($event)">
            <h1 class="mb-4">Login</h1>
            <a routerLink="/auth/register">Not Registered?</a>
            <button class="btn btn-primary" type="submit">
              Login
            </button>
            <div class="error text-danger mb-4" *ngIf="error">{{ error }}</div>
          </auth-form>

          <div class="alert alert-primary mt-5">
              <div class="mb-3 d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
              </symbol></svg><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg><h4 class="alert-heading mb-0">Demo User Login</h4></div>
            <hr>
            <p>segurac@test.com</p>
              <p>test1234</p>
            </div>
        </div>

      </div>
    </div>
  `
})

export class LoginComponent {
  error = '';

  constructor(private authService: AuthService, private router: Router) {

  }

  async loginUser(event: FormGroup) {
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
