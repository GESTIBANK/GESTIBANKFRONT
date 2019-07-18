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
  constructor(private opService: OperationService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    
  }
}
