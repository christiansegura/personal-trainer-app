import {inject} from '@angular/core';
import {
  CanActivateFn,
  Router,
} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {map, Observable} from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  return authService.authState.pipe(map((user) => {
    if (!user) {
      router.navigate(['/auth/login']);
    }
    return !!user;
  }));
}
