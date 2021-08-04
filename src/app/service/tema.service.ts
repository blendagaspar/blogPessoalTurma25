import { Tema } from './../model/Tema';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }


  getTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://backendthiagofaccipieri.herokuapp.com/tema')
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://backendthiagofaccipieri.herokuapp.com/tema', tema)
  }
}
