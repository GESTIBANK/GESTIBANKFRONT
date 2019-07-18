import { Component, OnInit } from '@angular/core';
import { OperationService } from '../operation.service';
import { ActivatedRoute } from '@angular/router';
import { Operation } from '../operation';
import { UserService } from '../user.service';
import { User } from '../user';
import { CompteService } from './compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  comptes: any;
  user: User;
  solde: any;
  constructor( private opService: OperationService, private route: ActivatedRoute, private compteService: CompteService, private userService: UserService) {

   }

  ngOnInit() {
    this.route.params.subscribe(params=> {
      //this.operations = this.opService.getOperations(params.id)
      //this.solde= this.opService.getSolde(params.id);
      console.log(params.id);
      this.compteService.getComptes(params.id).subscribe(compt=> {
        this.comptes=JSON.parse(JSON.stringify(compt));
        console.log(this.comptes);
      });
      //this.user=this.userService.getUser(params.id);
  });
  }
  getComptes(id){
    this.compteService.getComptes(id);
  }
}
