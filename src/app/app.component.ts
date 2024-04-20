import {Component, OnDestroy, OnInit} from '@angular/core';
import {State, Store} from 'store';
import {AuthService, User} from '../auth/shared/services/auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-nav [user]="user$ | async" (logout)="onLogout()"></app-nav>
  <div class="wrapper" style="margin-top: 8rem">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'personal-trainer-app';
  user$: Observable<State> = new Observable();
  subscription: Subscription = new Subscription();

  constructor(private store: Store, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    // never gets destroyed just good practice to set up
    this.subscription.unsubscribe();
  }

  async onLogout() {
    await this.authService.logoutUser();
    this.router.navigate(['auth/login']);
  }
}
