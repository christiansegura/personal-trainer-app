import {Component, OnDestroy, OnInit} from '@angular/core';
import {State, Store} from 'store';
import {AuthService, User} from '../auth/shared/services/auth/auth.service';
import {Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
  <div class="wrapper">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'personal-trainer-app';
  user$: Observable<State> = new Observable();
  subscription: Subscription = new Subscription();

  constructor(private store: Store, private authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>('user');
  }

  ngOnDestroy() {
    // never gets destroyed just good practice to set up
    this.subscription.unsubscribe();
  }
}
