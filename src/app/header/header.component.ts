import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthServiceService, private user: LoginService) {
}
  ngOnInit() {

  }
logout(){
  console.log('test' + this.user.getUser().userType);
  this.auth.disc();
}
login(){
  console.log("test" + this.user.getUser().userType);
  this.auth.auth();
}
}
