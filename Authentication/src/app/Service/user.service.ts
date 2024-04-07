import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://freeapi.gerasim.in/api/JWT/';

  login(endpoint: string, data: any) {
    const url = this.baseUrl + endpoint;
    return this.http.post(url, data);
  }

  register(endpoint: string, body: any) {
    // https://freeapi.gerasim.in/api/JWT/CreateNewUser

    const url = this.baseUrl + endpoint;
    return this.http.post(url, body);
  }
}
