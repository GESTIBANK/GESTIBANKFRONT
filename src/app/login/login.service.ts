import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://localhost:8080/SpringWebService/';
  user: any;
  constructor(private httpClient: HttpClient, ) {

  }


   login(user) {
    const httpHedears = new HttpHeaders();
    httpHedears.append('Content-Type', 'application/json');
    httpHedears.append('Accept', '*/*');
    httpHedears.append('Accept', '*/*');
    httpHedears.append('Accept-Encoding','gzip, deflate');
    httpHedears.append('Connection', 'keep-alive');
    return  this.httpClient.post(this.apiUrl + 'login/', user, { headers: httpHedears });

  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
     //this.user = user;
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
 }
}
