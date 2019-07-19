import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConseillerService {
  apiUrl = 'http://localhost:8080/SpringWebService/';
  constructor(private httpConseiller: HttpClient) { }

getConseiller() {
  return this.httpConseiller.get(this.apiUrl + 'admin/conseiller');
}

getConseillerById(id) {
  return this.httpConseiller.get(this.apiUrl + 'admin/conseiller/'+ id);
}

createCompte(compte) {
  return this.httpConseiller.post('http://localhost:8080/client/compte', compte);
}

findCompte(id: number) {
  return this.httpConseiller.get('http://localhost:8080/client/' + id + '/compte');
}

//demandeOuvertureCompte(clientp: ClientPotentiel){
//  return this.httpClient.post<DemandeOuverture>('http://localhost:8080/client/compte/demandeOuverture',clientp);
//}

modificationDecouvert(montant: number, id: number) {
  return this.httpConseiller.post('http://localhost:8080/conseiller/compte/' + id + '/modificationDecouvert',montant);
}
}
