import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

/*
@Injectable()
export class PacienteService {
    constructor(private http:HttpClient){}

    chamadaApiDrone(paciente:object): Observable<any>{
        try {
            return this.http.post("server/drone/add", paciente, {responseType: 'text'});
        } catch (error) {
            console.log(error)
        }       
    }
}*/