import { Component, OnInit } from '@angular/core';
import { DemandesOuverturesService } from '../demande-ouverture/demandes-ouvertures.service';

@Component({
  selector: 'app-demande-ouverture-assigne',
  templateUrl: './demande-ouverture-assigne.component.html',
  styleUrls: ['./demande-ouverture-assigne.component.css']
})
export class DemandeOuvertureAssigneComponent implements OnInit {
  listClientPotentiel: any;
  constructor(private demandeService: DemandesOuverturesService) { }

  ngOnInit() {
    const conseiller = JSON.parse(localStorage.getItem('user'));
    console.log(conseiller.id);
    this.demandeService.getDemandeOuvertureConseiller(conseiller.id)
    .subscribe(result => { this.listClientPotentiel = result; console.log(result); });
  }

}
