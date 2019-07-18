import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Operation } from './operation';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 //users: User[];

  
  constructor(private httpClient: HttpClient) { 
  
  }

}
