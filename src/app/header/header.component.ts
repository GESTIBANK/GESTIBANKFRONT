import { Component, OnInit, Input } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private auth: AuthServiceService) {
}
  ngOnInit() {
  }
logout(){
  this.auth.disc();
}
login(){
  this.auth.auth();
}
}
