import { Component, OnInit } from '@angular/core';
import { DemandesOuverturesService } from './demandes-ouvertures.service';
import { ConseillerService } from '../conseiller/conseiller.service';

@Component({
  selector: 'app-demande-ouverture',
  templateUrl: './demande-ouverture.component.html',
  styleUrls: ['./demande-ouverture.component.css']
})
export class DemandeOuvertureComponent implements OnInit {
  listDemandeOuverture: any;
  listConseiller: any;
  constructor(private demandeOuvertureService: DemandesOuverturesService, private conseillerService: ConseillerService) { }

  ngOnInit() {
    this.demandeOuvertureService.getDemandesOuvertures()
    .subscribe(demandes => {this.listDemandeOuverture = demandes; console.log(demandes); });
    this.conseillerService.getConseiller().subscribe(conseillers => {this.listConseiller = conseillers;  console.log(conseillers); });
  }

}
