import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Template {

  constructor(private http:HttpClient){}

  private baseUrl = environment.apiUrl;

  getTemplates(){
    return this.http.get(`${this.baseUrl}/template`);
  }

  getTemplateById(id:string){
    return this.http.get(`${this.baseUrl}/template/${id}`)
  }

}
