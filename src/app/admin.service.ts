import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemandeOuverture } from './demande-ouverture';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  apiUrl = 'http://localhost:8080/SpringWebService/';

  constructor(private httpClient: HttpClient) { }

  /******************* Admin *******************/

  createAdmin() {
    return this.httpClient.get(this.apiUrl + '/admin');
  }

  getDemandeOuverture() {
    return this.httpClient.get<DemandeOuverture[]>(this.apiUrl + 'admin/demandeOuverture');
  }


  

}