import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.freeapi.app/api/v1/users/';

  login(endpoint: string, data: any) {
    const url = this.baseUrl + endpoint;
    return this.http.post(url, data);
  }


  
  register(endpoint: string, body: any) {
    const url = this.baseUrl + endpoint;
    return this.http.post(url, body);
  }

  

  getAllUsers(endpoint:string){
    const url = 'https://freeapi.gerasim.in/api/JWT/'+ endpoint;
     return this.http.get(url)
  }
}
