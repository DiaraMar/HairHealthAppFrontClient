import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getuserProfil(){
    const authenticateUrl = `${this.baseUrl}/me/profil`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.get(authenticateUrl,{headers});
  }

  updateUserProfil(profil:any){
    const authenticateUrl = `${this.baseUrl}/me/profil`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.patch(authenticateUrl, profil, { headers });
  }

  getSettings(){
    const authenticateUrl = `${this.baseUrl}/accountExperience`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.get(authenticateUrl,{headers});
  }

  updateSettings(settings:any){
    const authenticateUrl = `${this.baseUrl}/accountExperience`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.patch(authenticateUrl, settings, { headers });
  }

  updateCredentials(credentials:any){
    const authenticateUrl = `${this.baseUrl}/me/password/new`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.patch(authenticateUrl, credentials, { headers });
  }

}
