import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['./app-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush, //avoid checking for changes unless an input is changed (stateless; dumb not smart)
  template: `
    <nav class="navbar navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Personal Trainer - <strong>authenticated: {{ user.user?.authenticated | json }}</strong></a>
      <div *ngIf="user.user?.authenticated" class="d-flex">
        <ul class="navbar-nav d-flex flex-row">
          <a class="nav-link ps-3 pe-3 active" aria-current="page" routerLink="schedule"
             routerLinkActive="active">Schedule</a>
          <a class="nav-link ps-3 pe-3" aria-current="page" routerLink="meals" routerLinkActive="active">Meals</a>
          <a class="nav-link ps-3 pe-3" aria-current="page" routerLink="workouts" routerLinkActive="active">Workouts</a>
        </ul>

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar">
          {{user.user?.email}} <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
             aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Settings</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" (click)="logoutUser()">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `
})
export class AppNavComponent {
  @Input() user: any;
  @Output() logout = new EventEmitter<any>();
  logoutUser() {
    this.logout.emit();
  }
}
