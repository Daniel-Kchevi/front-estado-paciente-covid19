import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

const urlToken = "/token/oauth/client_credential/accesstoken?grant_type=client_credentials";
const baseURL = "/api/pacientes";
@Injectable()
export class PacienteService {

    constructor(private httpClient: HttpClient) { }

    readAll(): Observable<any> {
        return this.httpClient.get(baseURL);
      }

    create(paciente:object): Observable<any> {
        return this.httpClient.post(baseURL, paciente, {responseType: 'text'});
    }

    read(cpf:number): Observable<any> {
        return this.httpClient.get(`${baseURL}/${cpf}`);
    }

    update(cpf:number, paciente:object): Observable<any> {
        console.log(cpf, paciente)
        return this.httpClient.put(`${baseURL}/${cpf}`, paciente, {responseType: 'text'});
      }


    gerarToken(){
        const body = new HttpParams()
          .set('client_id', "NFoPG1vaqegNZkaZ9MGmr0lv9aOHseIf")
          .set('client_secret', "SrcnF3iA32G34AHe");
        console.log(urlToken);
        console.log(body);
        return this.httpClient.post(urlToken, body.toString(), {
            headers: new HttpHeaders()
              .set('Content-Type', 'application/x-www-form-urlencoded')
          })
    }  
}
