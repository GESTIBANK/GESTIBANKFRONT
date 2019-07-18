import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  apiUrl = 'http://localhost:8080/SpringWebService/';
  constructor(private httpCompte: HttpClient) { }

  getComptes(id) {
    return this.httpCompte.get(this.apiUrl + 'client/' + id + '/compte');
  }
}
