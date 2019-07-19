import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthServiceService, private user: LoginService, private route: Router) {
}
  ngOnInit() {

  }
logout(){
  
  this.auth.discAll();
 
}
login(){
  
  this.auth.auth();
}
}
