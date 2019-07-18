import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthGuard } from '../auth-guard';
import { AuthServiceService } from '../auth-service.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Output() isLogged = new EventEmitter<boolean>();

  constructor(private auth: AuthServiceService) { 
}
login(){
 
  this.auth.auth();
}
logOut(){
   this.auth.disc();
}
  ngOnInit() {
    
  }

}
