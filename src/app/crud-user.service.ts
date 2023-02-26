import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  basePath ='http://localhost:1337/api';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': TOKEN });

  constructor(private http: HttpClient) {

   }

   getUser(id: string):any{
    return this.http.get(`${this.basePath}/user-profiles/${id}`, { headers: this.headers} )    
  }
}
