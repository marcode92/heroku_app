import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VAR_SYS } from 'src/config';
import { userToken } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class CrudUserService {

  basePath ='http://localhost:1337/api';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': VAR_SYS.token_postgres });
  
  user_info = VAR_SYS;

  constructor(private http: HttpClient) {}

   getUser(id: string):any{
    return this.http.get(`${this.basePath}/user-profiles/${id}`, { headers: this.headers} )    
  }

  getTokenAccess(client_id:string, code: string):Observable<userToken>{
    const path = "https://api.instagram.com/oauth/access_token"
    let params = new HttpParams();
    params = params.append('client_id', client_id); 
    params = params.append('client_secret', this.user_info.client_secret);
    params = params.append('redirect_uri', this.user_info.redirect_uri ); 
    params = params.append('grant_type', this.user_info.grant_type)
    params = params.append('code', code)

    return this.http.post<userToken>(`${path}`, {params, headers: this.headers} )    
  }

  getMediaID(){
    const path = "https://graph.instagram.com/me/media"
    let params = new HttpParams();
    params = params.append('fields', 'id'); 
    params = params.append('token', this.user_info.token_auth_graph)

    return this.http.get<userToken>(`${path}`, {params, headers: this.headers} )  
  }
}
