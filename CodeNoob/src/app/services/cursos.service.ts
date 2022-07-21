import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from '../models/cursos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;

  constructor(public _http:HttpClient) { }

  obtenerToken(){
    var token2 = localStorage.getItem("token");
    if(token2 !=undefined){
      this.token = token2;
    }else{
      this.token = null
    }
    return this.token;
  }

  obtenerIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad'))
    if(identidad2 !=undefined){
      this.identidad = identidad2;
    }else{
      this.identidad = null
    }
    return this.identidad;
  }

  obtenerCursos(): Observable<any>{
    return this._http.get(this.url + "/buscarCursos", { headers: this.headersVariable })
  }

  agregarCurso(modelCurso: Cursos, token:any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modelCurso);
    return this._http.post(this.url + '/agregarCurso', parametros, { headers: headersToken })
  }

  editarCurso(modelCurso:Cursos,  token: any): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modelCurso);
    return this._http.put(this.url + "/editarCurso/"+modelCurso._id, parametros, { headers: headersToken })
  }

  obtenerCursoId(idCurso: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + "/buscarCursoId/" + idCurso, { headers: headersToken })
  }

  eliminarCurso(idCurso: String, token: any): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.delete(this.url + "/eliminarCurso/" + idCurso, { headers: headersToken })
  }


}
