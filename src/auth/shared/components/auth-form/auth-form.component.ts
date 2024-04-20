import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-form',
  styleUrls: ['auth-form.component.scss'],
  template: `
    <div class="card">
      <div class="card-body">
        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="form">
          <div class="card-header mb-4">
            <ng-content select="h1"></ng-content>
          </div>
          <div class="error text-danger" *ngIf="emailFormat">invalid format</div>
          <input class="form-control mb-4" name="email" type="text" placeholder="email@emailhost.com"
                 formControlName="email">
          <div class="error text-danger" *ngIf="passwordInvalid">password required</div>
          <input class="form-control mb-4" name="password" type="password" placeholder="password"
                 formControlName="password">
          <ng-content select=".error"></ng-content>
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
