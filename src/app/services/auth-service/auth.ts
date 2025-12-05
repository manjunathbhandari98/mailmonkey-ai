import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../../models/auth-response';
import { LoginRequest } from '../../models/login-request';
import { RegisterRequest } from '../../models/register-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router){}

  private baseUrl = environment.apiUrl;

  private accessTokenSubject = new BehaviorSubject<string | null>(this.generateToken());
  accessToken$ = this.accessTokenSubject.asObservable();

  private generateToken(): string | null {
    return localStorage.getItem('token');
  }

  private saveToken(response:AuthResponse){
    localStorage.setItem('accessToken',response.accessToken);
    localStorage.setItem('refreshToken',response.refreshToken);
    this.accessTokenSubject.next(response.accessToken);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }


  login(payload:LoginRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/login`,payload)
    .pipe(tap((response:AuthResponse) => this.saveToken(response)));
  }

 register(payload: RegisterRequest): Observable<AuthResponse> {
  return this.http.post<AuthResponse>(`${this.baseUrl}/auth/register`, payload)
    .pipe(
      tap((response: AuthResponse) => this.saveToken(response))
    );
}


  refreshToken():Observable<AuthResponse>{
    const refreshToken = this.getRefreshToken();
    return this.http.post<AuthResponse>(`${this.baseUrl}/auth/refresh-token`,{refreshToken})
    .pipe(tap(response => {
      localStorage.setItem('accessToken',response.accessToken);
      this.accessTokenSubject.next(response.accessToken);
    }));
  }

  isLoggedIn(): boolean{
    return !!this.getAccessToken();
  }

  logout(){
     localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      this.accessTokenSubject.next(null);
    this.router.navigate(['/login'])
  }
}
