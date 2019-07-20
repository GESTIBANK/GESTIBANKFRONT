import { Component, OnInit, Input } from '@angular/core';
import { DemandesOuverturesService } from './demandes-ouvertures.service';
import { ConseillerService } from '../conseiller/conseiller.service';
import { Conseiller } from '../create-conseiller/conseiller';
import { DemandeOuverture } from './demande-ouverture';

@Component({
  selector: 'app-demande-ouverture',
  templateUrl: './demande-ouverture.component.html',
  styleUrls: ['./demande-ouverture.component.css']
})
export class DemandeOuvertureComponent implements OnInit {
  listDemandeOuverture: any;
  listDemandeOuvertureAffecte: DemandeOuverture[]=[];
  listConseiller: any;
  conseillerId: number;
  demande: DemandeOuverture;


  constructor(private demandeOuvertureService: DemandesOuverturesService, private conseillerService: ConseillerService) {
    this.demande = new DemandeOuverture(null, null, null, null);
  }

  ngOnInit() {
    this.demandeOuvertureService.getDemandesOuvertures()
      .subscribe(demandes => { this.listDemandeOuverture = demandes; console.log(demandes); });
    this.conseillerService.getConseiller().subscribe(conseillers => { this.listConseiller = conseillers; console.log(conseillers); });
  }
  onChange(value) {
    this.conseillerId = value;
  }
  affecta(form) {
    console.log( this.listDemandeOuverture)
    for (this.demande of this.listDemandeOuverture) {
      if (this.demande.atraiter) {

        this.listDemandeOuvertureAffecte.push(this.demande);
        console.log( this.listDemandeOuvertureAffecte);

      }
    }
    this.demandeOuvertureService.affecta(this.listDemandeOuvertureAffecte, this.conseillerId).subscribe(result => console.log(result));
  }

}
