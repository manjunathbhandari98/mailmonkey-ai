import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class History {

  constructor(private http:HttpClient){}

  private baseUrl = environment.apiUrl;

  getHistory(){
    return this.http.get(`${this.baseUrl}/history`)
  }

  saveToHistory(payload:any){
    return this.http.post(`${this.baseUrl}/history`,payload);
  }

  deleteHistory(id:string){
    return this.http.delete(`${this.baseUrl}/history/${id}`)
  }
  
}
