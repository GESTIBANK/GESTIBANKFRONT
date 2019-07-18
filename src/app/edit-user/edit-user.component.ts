import { Component, OnInit,  Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  child3Shown:boolean=true;
  id: any;
  
  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.user= new User(0,'','','');
  }

  ngOnInit() {
 this.child3Shown=!this.child3Shown    
    this.route.parent.params.subscribe(routeParams => {
   
      this.user=this.userService.getUser(routeParams.id);
    })

  }

  update(){
   console.log(this.user);
    this.userService.updateUser(this.user, this.user.id);

  }

}
