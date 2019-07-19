import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffectationDemandeConseillerService {
  apiUrl = 'http://localhost:8080/SpringWebService/';
  constructor(private httpAffectation: HttpClient) { }

  affecta(id,listClient){
    return this.httpAffectation.post(this.apiUrl + 'admin/conseiller/' + id + '/affectationClient', listClient);
  }
}
