import { Injectable } from '@angular/core';
import { Login } from '../login/login';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userType: String;
  user: any;

  constructor(private loginService: LoginService, private route: Router) {

  }

  login(userReturn) {

    this.loginService.login(userReturn).subscribe(user => {
      userReturn = user;
      console.log(userReturn);
      this.loginService.setUser(userReturn);
      switch (userReturn.userType) {
        case 'Admin':
          this.userType = 'admin';
          this.route.navigateByUrl('/admin');
          break;
        case 'Conseiller':
          this.userType = 'conseiller';
          this.route.navigateByUrl('/conseiller');
          break;
        case 'Client':
          this.userType = 'client';
          this.route.navigateByUrl('/client');
          break;
        default:
          this.route.navigateByUrl('/login');
      }

    });
  }
  isAuthenticated() {
    if (JSON.parse(localStorage.getItem('user')) != null) {
      const user = JSON.parse(localStorage.getItem('user')) ;
      switch (user.userType) {
        case 'Admin':
          return 'admin';
          break;
        case 'Client':
          return 'client';
        case 'Conseiller':
          return 'conseiller';
          break;
        default:
          return 'user';
          break;
      }
    }
    return 'user';
  }




  logout() {
    this.userType = 'user';
    localStorage.setItem('user', '{"userType": "user"}');

  }

}
