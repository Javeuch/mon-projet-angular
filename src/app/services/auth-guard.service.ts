import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

/* Injection d'un service dans un autre avec le décorateur: */
@Injectable()
export class AuthGuard implements CanActivate {

  /* Injection du service d'authentification dans constructor */
  constructor(private authService: AuthService, private router: Router) {}

  /* Méthode de l'interface  retournant un boolean */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/auth']);
    }
  }
}
