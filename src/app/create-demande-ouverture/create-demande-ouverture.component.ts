import { Component, OnInit } from '@angular/core';
import { DemandeOuvertureCompte } from './demande-ouverture-compte';
import { DemandeOuvertureCompteService } from './demande-ouverture-compte.service';


@Component({
  selector: 'app-create-demande-ouverture',
  templateUrl: './create-demande-ouverture.component.html',
  styleUrls: ['./create-demande-ouverture.component.css']
})
export class CreateDemandeOuvertureComponent implements OnInit {
  message: string;
  createCompte: DemandeOuvertureCompte;
  constructor(private demandeOuvertureCompteService: DemandeOuvertureCompteService) {
    this.createCompte = new DemandeOuvertureCompte('', '', '', null, null);
  }

  ngOnInit() {
  }

  createDemandeOuvertureCompte(form) {
    console.log(this.createCompte);
    this.createCompte.piecesJustif = null;
    this.demandeOuvertureCompteService.newDemandeOuvertureCompte(this.createCompte).subscribe(
      response => { (this.message = 'Votre demande as ete bien envoie'); form.reset(); }
    );
  }

}
