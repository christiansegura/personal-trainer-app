import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from '../auth/shared/guards/auth.guard';
import {SharedModule} from './shared/shared.module';

export const ROUTES: Routes = [
  {path: 'meals', canActivate: [authGuard], loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule)},
  {path: 'schedule', canActivate: [authGuard], loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)},
  {path: 'workouts', canActivate: [authGuard], loadChildren: () => import('./workouts/workouts.module').then(m => m.WorkoutsModule)}
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ],
  declarations: []
})

export class HealthModule {
}
