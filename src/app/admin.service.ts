import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getUsers(){
    const authenticateUrl = `${this.baseUrl}/me/pilote/profil/all`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.get(authenticateUrl,{headers});
  }

  updateUserProfil(profil:any){
    const authenticateUrl = `${this.baseUrl}/me/pilote/profil`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.patch(authenticateUrl, profil, { headers });
  }

  updateSettings(settings:any){
    const authenticateUrl = `${this.baseUrl}/accountExperience/pilote`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.patch(authenticateUrl, settings, { headers });
  }

}

