import { Component, OnInit } from '@angular/core';
import { ConseillerService } from '../conseiller.service';
import { Conseiller } from 'src/app/create-conseiller/conseiller';

@Component({
  selector: 'app-conseiller',
  templateUrl: './conseiller.component.html',
  styleUrls: ['./conseiller.component.css']
})
export class ConseillerComponent implements OnInit {
  listConseiller: any;
  message: string;
  user = '';
  constructor(private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.user);
    this.conseillerService.getConseiller().subscribe(conseillers => {this.listConseiller = conseillers;console.log(conseillers);} );
  }
delete(id) {
  this.conseillerService.deleteConseiller(id).
  subscribe(response => {console.log(response); this.message = 'Le conseiller as ete bien efface'; } );

}
}
