import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class EmailGenerationService {

  private baseUrl = `${environment.apiUrl}/email`;
  loading = signal(false);

  constructor(private http:HttpClient){}

  generateEmail(payload:any){
    this.loading.set(true);
    return this.http.post(`${this.baseUrl}/generate`,payload);
  }

  improveEmail(payload:any){
    return this.http.post(`${this.baseUrl}/imporve`,payload);
  }
  
}
