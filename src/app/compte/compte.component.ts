import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(  private route: ActivatedRoute, private compteService: CompteService, private userService: UserService) {

   }

  ngOnInit() {
    this.route.params.subscribe(params=> {
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