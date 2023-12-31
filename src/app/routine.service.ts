import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  private baseUrl = 'http://localhost:8080/api/v1';


  constructor(private http: HttpClient) {}

  getRoutines(){
    const authenticateUrl = `${this.baseUrl}/routines`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.get(authenticateUrl,{headers});
  }

  getDiagnostics(){
    const authenticateUrl = `${this.baseUrl}/diagnostics`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.get(authenticateUrl,{headers});
  }

  updateRoutine(routine : any){
    const authenticateUrl = `${this.baseUrl}/routines`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`,

    });
    return this.http.patch(authenticateUrl,routine, {headers});
  }


}
