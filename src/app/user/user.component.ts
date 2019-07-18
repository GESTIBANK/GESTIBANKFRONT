import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {UserService} from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  child3Shown:boolean=true;
  @Output() message= new EventEmitter<String>();
  @Output() editUser= new EventEmitter<boolean>();
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userService.getClientById(2));
    console.log(this.userService.login());
  
  }
  edit(){
    
    this.child3Shown=!this.child3Shown;
    this.editUser.emit(this.child3Shown);
  }
delete(id){
 
  this.message.emit(this.userService.delete(id));
  
}
}
