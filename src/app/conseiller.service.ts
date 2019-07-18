import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from './compte';


@Injectable({
  providedIn: 'root'
})
export class ConseillerService {
  apiUrl='http://localhost:8080/SpringWebService/';

 constructor(private httpClient: HttpClient) { }

 /******************* Admin *******************/


  createCompte(compte: Compte){
    return this.httpClient.post<Compte>('http://localhost:8080/client/compte',compte);
  }
 
  findCompte(id: number){
    return this.httpClient.get<Compte[]>('http://localhost:8080/client/'+id+'/compte');
  }
 
  //demandeOuvertureCompte(clientp: ClientPotentiel){
  //  return this.httpClient.post<DemandeOuverture>('http://localhost:8080/client/compte/demandeOuverture',clientp);
  //}
   
  modificationDecouvert(montant: number, id: number){
    return this.httpClient.post('http://localhost:8080/conseiller/compte/'+id+'/modificationDecouvert',montant);
  }

  }
