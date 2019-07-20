import { Injectable } from '@angular/core';
import { Login } from '../login/login';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 constructor(private loginService: LoginService, private route: Router) {

  }

  login(userReturn) {

    this.loginService.login(userReturn).subscribe(user => {
      userReturn = user;
      this.loginService.setUser(userReturn);
      switch (userReturn.userType) {
        case 'Admin':
          localStorage.setItem('user', JSON.stringify(userReturn));
          this.route.navigate(['/admin']);

          break;
        case 'Conseiller':
          localStorage.setItem('user', JSON.stringify(userReturn));
          this.route.navigate(['/conseiller']);

          break;
        case 'Client':
          localStorage.setItem('user', JSON.stringify(userReturn));
          this.route.navigate(['/client']);

          break;
        default:
          this.route.navigate(['/login']);
      }

    });
  }

  isAuthenticated() {
    const user = JSON.parse(localStorage.getItem('user'));
    switch (user.userType) {
      case 'Admin':
        return true;
        break;
      case 'Client':
        return true;
      case 'Conseiller':
        return true;
        break;
      default:
        return false;
        break;
    }

  }


  logout() {
    localStorage.setItem('user', '');
  }

}
