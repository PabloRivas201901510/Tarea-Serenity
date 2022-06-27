import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private apiURL = "http://localhost:5000"

  constructor(private httpClient : HttpClient) { }

  setRegister(data :any){
    return this.httpClient.post(this.apiURL + '/registro', data);
  }

  setLogin(data :any){
    return this.httpClient.post(this.apiURL + '/inicio', data);
  }

  setAssign(data :any){
    return this.httpClient.post(this.apiURL + '/asignacion', data);
  }
}
