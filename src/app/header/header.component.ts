import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { ConseillerService } from '../conseiller/conseiller.service';
import { ClientService } from '../client/client.service';
import { Conseiller } from '../conseiller/create-conseiller/conseiller';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  conseiller: any ;
  user: any;
   constructor(private clientService: ClientService, private auth: AuthServiceService, private login: LoginService) {
  }
  ngOnInit() {
   if(localStorage.user){
     this.user = JSON.parse(localStorage.user);
      if(this.user.userType!= 'user'){
    this.clientService.getConseiller(this.user.id).subscribe(result => {this.conseiller = result; console.log(result); });
    }
  }else {
    localStorage.setItem('user', '{"userType": "user"}');
  }
  }
  logout() {
    this.auth.logout();
  }

}
