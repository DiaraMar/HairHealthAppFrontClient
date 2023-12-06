import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) {}

  authenticate(credential: any): Observable<any> {
    const authenticateUrl = `${this.baseUrl}/authenticate`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });

    return this.http.post(authenticateUrl, credential, { headers });
  }

  register(register: any): Observable<any> {
    const authenticateUrl = `${this.baseUrl}/register`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });

    return this.http.post(authenticateUrl, register, { headers });
  }
}