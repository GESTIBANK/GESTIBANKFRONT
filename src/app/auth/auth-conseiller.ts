import {  CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
@Injectable()
export class AuthConseiller implements CanActivate{

    constructor(public router: Router, private auth: AuthServiceService){

    }
    canActivate() {

             if(!this.auth.isAuthenticated()){

                this.router.navigate(['/login']);
                return false;
            }
                return true;



       }

}
