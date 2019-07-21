import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandesOuverturesService {
  apiUrl = 'http://localhost:8080/SpringWebService/';
  constructor(private httpDemandeOuverture: HttpClient) { }

  getDemandesOuvertures() {
    return this.httpDemandeOuverture.get(this.apiUrl + '/admin/demandeOuverture');

  }
  affecta(listDemande, idConseiller) {
    const httpHedears = new HttpHeaders();
    httpHedears.append('Content-Type', 'application/json');
    httpHedears.append('Accept', '*/*');
    httpHedears.append('Accept-Encoding','gzip, deflate');
    httpHedears.append('Connection', 'keep-alive');

    return this.httpDemandeOuverture.post(this.apiUrl + 'admin/conseiller/' + idConseiller + '/affectationDemande', listDemande);

  }
  getDemandeOuvertureConseiller(id) {
    return this.httpDemandeOuverture.get(this.apiUrl + 'conseiller/' + id + '/demandeOuverture');

  }

  assigne(id) {
    return this.httpDemandeOuverture
    .get(this.apiUrl + 'conseiller/demandeOuverture/' + id + '/validation');

  }
}
