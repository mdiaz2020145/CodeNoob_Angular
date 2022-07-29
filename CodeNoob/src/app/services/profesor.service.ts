import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesores } from '../models/profesores.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
 public url: String = 'http://localhost:3000/api';
 public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
 public identidad;
 public token;

 constructor(public _http:HttpClient) { }

 loginProfesor(profesor, obtenerToken = null):Observable<any>{

  if(obtenerToken !=null){
      profesor.obtenerToken = obtenerToken;
  }

  let params = JSON.stringify(profesor);

  return this._http.post(this.url + '/loginProfesor',params,{headers:this.headersVariable});

}

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

registrarProfe(modeloProfe: Profesores): Observable<any> {
  let parametros = JSON.stringify(modeloProfe);
  return this._http.post(this.url + '/registrarProfesor', parametros, { headers: this.headersVariable })
}

obtenerProfe(): Observable<any>{
  return this._http.get(this.url + '/buscarProfesor', { headers: this.headersVariable })
}

obtenerProfeId(id: any, token: any): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token)
  return this._http.get(this.url + '/buscarProfesorID/' + id, { headers: headersToken })
}

editarPerfilProfe(modeloProfe:Profesores,  token: any): Observable<any>{
  let headersToken = this.headersVariable.set('Authorization', token)
  let parametros = JSON.stringify(modeloProfe)
  return this._http.put(this.url + "/editarProfesor/" + modeloProfe._id, parametros, { headers: headersToken })
}

eliminarPerfilProfe(id: String, token: any): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token)
  return this._http.delete(this.url + '/eliminarProfesor/' + id, { headers: headersToken })
}
}
