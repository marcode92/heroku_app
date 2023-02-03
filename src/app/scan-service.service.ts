import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scanned } from './scanned';

@Injectable({
  providedIn: 'root'
})
export class ScanService {

  private BASEPATH = 'https://fqs.herokuapp.com/fqs';
  constructor(
    private http: HttpClient
  ) { }

  getInfo(code: string): Observable<Scanned> {
    
    const params = new HttpParams().set('code', code);
    const path = `${this.BASEPATH}`;

    return this.http.get<Scanned>(path, { params });

  }
}
