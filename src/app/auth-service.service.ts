import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isloggedIn = false;

  constructor() {
    this.isAuthenticated();
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
}
