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
   constructor(private auth: AuthServiceService, private login: LoginService) {
  }
  ngOnInit() {
  }
  logout() {
    this.auth.logout();
  }

}
