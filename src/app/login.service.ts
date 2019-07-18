import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl ="http://localhost:8080/SpringWebService/";
  loginp:any;
  constructor(private httpClient: HttpClient, ) { }


  login(user){
    const httpHedears = new HttpHeaders();
    httpHedears.append("Content-Type","Application/Json");

   return  this.httpClient.post(this.apiUrl+'login/', user, {headers: httpHedears});

 }
 typeUser(){
   return this.loginp.typeUser;
 }
}