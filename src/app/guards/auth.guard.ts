import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //console.log(this.authService.isTokenExpired());
    //!this.authService.isTokenExpired()
    if (localStorage.getItem('currentUser')) {
      return true;
    }
      this.router.navigate(['/auth/signin'], { queryParams: { returnUrl: state.url } });
      return false; 
  }
}
