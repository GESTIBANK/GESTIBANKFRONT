import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MouvementService {
apiUrl= 'http://localhost:8080/SpringWebService/';
  constructor(private httpTransaction: HttpClient) { }


getTransaction(id){
  //console.log("id" +id);
  return this.httpTransaction.get(this.apiUrl+ 'conseiller/client/compte/'+ id +'/transaction');
}
  
}
