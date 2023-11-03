import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private route:Router,private authservice:AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        
        let isLoggedIn=this.authservice.isAuthenticated();
        if (isLoggedIn)
        {
            return true;
        }
        else
        {
            this.route.navigate(['/notfound'])
            return false;
            
        }
    }
}