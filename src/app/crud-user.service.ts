import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_INFO, TOKEN } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  basePath ='http://localhost:1337/api';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': TOKEN });
  user_info = USER_INFO;

  constructor(private http: HttpClient) {

   }

   getUser(id: string):any{
    return this.http.get(`${this.basePath}/user-profiles/${id}`, { headers: this.headers} )    
  }

  getCode(client_id: string):any{
    const path = "https://api.instagram.com/oauth/authorize"
    let params = new HttpParams();
    params = params.append('client_id', client_id); 
    params = params.append('redirect_uri', this.user_info.redirect_uri ); 
    params = params.append('scope', this.user_info.scope)
    params = params.append('response_type',this.user_info.response_type)
    
    return this.http.get<any>(`${path}`, {params} )    
  }

}
