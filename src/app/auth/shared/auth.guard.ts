import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
  constructor(private router: Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const token = window.localStorage.getItem('token');
    console.log(token)
    if(token){
      return true;
    }
    else{
      this.router.navigate([''])
      return false
    }
  }
  
  
}