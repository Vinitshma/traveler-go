import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// this for wishlist
@Injectable({
  providedIn: 'root'
})
export class UserWishGuard implements CanActivate {
  canActivate() {
    const adminWish =false;
    if(adminWish){
      return true;
    }
    else{ 
      return false;
    }
  }
  
}
