import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandesOuverturesService {
  apiUrl = 'http://localhost:8080/SpringWebService/';
  constructor(private httpDemandeOuverture: HttpClient) { }

  getDemandesOuvertures() {
   return this.httpDemandeOuverture.get(this.apiUrl + '/admin/demandeOuverture');

  }
}
