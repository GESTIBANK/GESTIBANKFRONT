import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {DemandeOuvertureCompte}  from './demande-ouverture-compte';
import { format } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DemandeOuvertureCompteService {
  message = '';
  apiUrl='http://localhost:8080/SpringWebService/';
  constructor(private httpDemandeOuvertureCompte: HttpClient) { }


  newDemandeOuvertureCompte(demande: DemandeOuvertureCompte){
    console.log("Demande :  ",demande);
    const msg= {response: 'Le compte as ete bien creer'};
    const httpHedears = new HttpHeaders();
    httpHedears.append('Content-Type', 'application/json');
    return this.httpDemandeOuvertureCompte.post(this.apiUrl + 'client/compte/demandeOuverture',demande, {headers:httpHedears})
   // return msg;
  }

  msg(e) {

    this.message = e;
    window.setTimeout(() => {
      this.message = null;

    }, 3000);

  }
}
