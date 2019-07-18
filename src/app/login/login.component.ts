import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthGuard } from '../auth-guard';
import { AuthServiceService } from '../auth-service.service';
import {LoginService} from '../login.service';
import { Login } from '../login';
import {ActivatedRoute, Router} from '@angular/router';
import { from } from 'rxjs';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:Login;
  userReturn: any;

@Output() isLogged = new EventEmitter<boolean>();

  constructor(private auth: AuthServiceService, private loginService:LoginService, private route: Router) { 
    this.userLogin= new Login("", "");
}
login(){
  console.log(this.userLogin);

 this.loginService.login(this.userLogin).subscribe(user=>
  {
  this.userReturn=user;

  switch (this.userReturn.userType) {
    case "Admin":
        this.route.navigate(['/admin']);
      break;
    case "Conseiller":
        this.route.navigate(['/users']);
        break;
    case "Client":
         this.route.navigate(['/client']);
         break;
    default:
        this.route.navigate(['/login']);
  }
 
}
  )


  this.auth.auth();
}
logOut(){
   this.auth.disc();
}
  ngOnInit() {
    
  }

}
