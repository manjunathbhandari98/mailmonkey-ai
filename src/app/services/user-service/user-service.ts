import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http:HttpClient) {}

  private baseUrl = environment.apiUrl;

  loadUser(){
    return this.http.get(`${this.baseUrl}/user/me`);
  }
}
