import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

const urlToken = "/token/oauth/client_credential/accesstoken?grant_type=client_credentials";
const baseURL = "/api/pacientes/api/pacientes";
@Injectable()
export class PacienteService {

    constructor(private httpClient: HttpClient) { }
    httpOptions: Object = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ localStorage.getItem('access-token')
      })
    };
    readAll(): Observable<any> {      
      return this.httpClient.get(baseURL, this.httpOptions);
    }

    create(paciente:object): Observable<any> {
        return this.httpClient.post(baseURL, paciente, this.httpOptions);
    }

    read(cpf:number): Observable<any> {
        return this.httpClient.get(`${baseURL}/${cpf}`, this.httpOptions);
    }

    update(cpf:number, paciente:object): Observable<any> {
        return this.httpClient.put(`${baseURL}/${cpf}`, paciente, this.httpOptions);
    }

    gerarToken(){
        const body = new HttpParams()
          .set('client_id', "NFoPG1vaqegNZkaZ9MGmr0lv9aOHseIf")
          .set('client_secret', "SrcnF3iA32G34AHe");
        return this.httpClient.post(urlToken, body.toString(), {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          })
    }  
}
