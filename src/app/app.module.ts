import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AuthModule} from '../auth/auth.module';
import {HealthModule} from '../health/health.module';
import {Store} from 'store';
import {AppNavComponent} from './components/app-nav/app-nav.component';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES:Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'schedule'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HealthModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule {
}
