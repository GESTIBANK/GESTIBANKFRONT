import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { ActivatedRoute } from '@angular/router';
import { Operation } from '../operation';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  operations: Operation[];
  user: User;
  solde: any;
  constructor(private opService: OperationService, private route: ActivatedRoute, private userService: UserService) {
    
   }

  ngOnInit() {
    this.route.parent.params.subscribe(params=> {
      this.operations = this.opService.getOperations(params.id)
      this.solde= this.opService.getSolde(params.id);
      this.user=this.userService.getUser(params.id);
  });
  }
}
