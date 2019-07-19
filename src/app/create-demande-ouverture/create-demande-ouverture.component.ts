import { Component, OnInit } from '@angular/core';
import { DemandeOuvertureCompte } from './demande-ouverture-compte';
import { DemandeOuvertureCompteService } from './demande-ouverture-compte.service';


@Component({
  selector: 'app-create-demande-ouverture',
  templateUrl: './create-demande-ouverture.component.html',
  styleUrls: ['./create-demande-ouverture.component.css']
})
export class CreateDemandeOuvertureComponent implements OnInit {
  createCompte: DemandeOuvertureCompte;
  constructor(private demandeOuvertureCompteService: DemandeOuvertureCompteService) {
    this.createCompte= new DemandeOuvertureCompte ('','','',null, null);
   }

  ngOnInit() {
  }

  createDemandeOuvertureCompte(){
    console.log(this.createCompte);
    this.createCompte.piecesJustif=null;
   this.demandeOuvertureCompteService.newDemandeOuvertureCompte(this.createCompte).subscribe(
     response=>(console.log(response))
   );
  }

}
