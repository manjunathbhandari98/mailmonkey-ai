import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http:HttpClient){}

  private baseUrl = environment.apiUrl;

  login(payload:any){
    return this.http.post(`${this.baseUrl}/login/auth`,payload);
  }

  register(payload:any){
    return this.http.post(`${this.baseUrl}/auth/register`,payload)
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem("token")
  }

  logout(){
     localStorage.removeItem('token');
  }
}
