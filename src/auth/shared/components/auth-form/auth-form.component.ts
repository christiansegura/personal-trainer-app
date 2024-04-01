import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-3">
          <div class="card">
            <div class="card-body">
              <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form">
                <ng-content select="h1"></ng-content>
                <label class="form-label" for="email">email</label>
                <div class="error text-danger" *ngIf="emailFormat">invalid format</div>
                <input class="form-control mb-4" name="email" type="text" placeholder="email address"
                       formControlName="email">
                <label class="form-label" for="password">password</label>
                <div class="error text-danger" *ngIf="passwordInvalid">password required</div>
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
        </div>
      </div>
    </div>
  `
})

export class AuthFormComponent {
  @Output() submitted = new EventEmitter<FormGroup>;

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    }
  }

  get passwordInvalid() {
    const control = this.form.get('password');
    return control?.hasError('required') && control?.touched;
  }

  get emailFormat() {
    const control = this.form.get('email');
    return control?.hasError('email') && control?.touched;
  }
}
