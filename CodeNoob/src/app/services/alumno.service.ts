import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from '../models/alumnos.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;

  constructor(public _http:HttpClient) { }


  loginAlumno(alumno, obtenerToken = null):Observable<any>{

    if(obtenerToken !=null){
        alumno.obtenerToken = obtenerToken;
    }

    let params = JSON.stringify(alumno);

    return this._http.post(this.url + '/login',params,{headers:this.headersVariable});

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

  obtenerAlumno(): Observable<any>{
    return this._http.get(this.url + '/buscarAlumno', { headers: this.headersVariable })
  }

  obtenerAlumnoId(id: any, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + '/buscarAlumnoID/' + id, { headers: headersToken })
  }

  registrarAlumno(modeloAlumno: Alumnos): Observable<any> {
    let parametros = JSON.stringify(modeloAlumno);
    return this._http.post(this.url + '/registrarAlumno', parametros, { headers: this.headersVariable })
  }

  editarPerfilAlumno(modeloAlumno:Alumnos,  token: any): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloAlumno)
    return this._http.put(this.url + "/editarAlumno/" + modeloAlumno._id, parametros, { headers: headersToken })
  }

  eliminarPerfilAlumno(id: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.delete(this.url + '/eliminarAlumno/' + id, { headers: headersToken })
  }
}
