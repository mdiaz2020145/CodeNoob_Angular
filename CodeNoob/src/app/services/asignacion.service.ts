import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  public url: String = 'https://app-codenoob.herokuapp.com/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;

  constructor(public _http: HttpClient) { }

  buscarCursosAlumno(token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + '/buscarAsignacionCurso', { headers: headersToken })
  }
  obtenerToken() {
    var token2 = localStorage.getItem("token");
    if (token2 != undefined) {
      this.token = token2;
    } else {
      this.token = null
    }
    return this.token;
  }

  obtenerIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad'))
    if (identidad2 != undefined) {
      this.identidad = identidad2;
    } else {
      this.identidad = null
    }
    return this.identidad;
  }
}
