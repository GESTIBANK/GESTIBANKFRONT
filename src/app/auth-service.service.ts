import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isloggedIn = false;
  adminIsLoggIn = false;
  conseillerIsLoggIn = false;
  clientIsLoggIn = false;

  constructor() {
    this.isAuthenticated();
   }

   authAdmin(){
     this.adminIsLoggIn = true;
   }

   authConseiller(){
    this.conseillerIsLoggIn = true;
  }
  authClient(){
    this.clientIsLoggIn = true;
  }

  discAdmin(){
    this.adminIsLoggIn = false;
  }

  discConseiller(){
   this.conseillerIsLoggIn = false;
 }
 discClient(){
   this.clientIsLoggIn = false;
 }

  auth() {
     return this.isloggedIn = true;
  }
  disc() {
    return this.isloggedIn = false;
  }
  isAuthenticated() {
     return this.isloggedIn;
  }


  isAdminIsLogged() {
    return this.adminIsLoggIn;
 }
 isConseillerIsLogged() {
  return this.conseillerIsLoggIn;
}
isClientIsLogged() {
  return this.clientIsLoggIn;
}
discAll(){
  this.isloggedIn = false;
  this.clientIsLoggIn = false;
  this.conseillerIsLoggIn = false;
  this.adminIsLoggIn = false;
}
}
