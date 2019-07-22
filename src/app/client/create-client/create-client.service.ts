import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CreateClientService {
  apiUrl = 'http://localhost:8080/SpringWebService/';

  constructor(private httpClient: HttpClient) { }


}
