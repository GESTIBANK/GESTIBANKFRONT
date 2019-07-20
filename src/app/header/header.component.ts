import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userType: string;
  constructor(private auth: AuthServiceService, private route: Router) {
  }
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    switch (user.userType) {
      case 'Admin':
        this.userType = 'Admin';
        break;
      case 'Conseiller':
        this.userType = 'Conseiller';
        break;
      case 'Client':
        this.userType = 'Client';
        break;
      default:
        this.userType = 'User';
    }



  }
  logout() {

    this.auth.logout();


  }

}
