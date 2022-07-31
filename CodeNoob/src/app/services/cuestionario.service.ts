import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuestionarioModule } from '../models/cuestionario.models';
import { PreguntasModel } from '../models/preguntas.model';
import { RespuestasModel } from '../models/respuestas.model';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token: any;
  public identidad: any;

  constructor(public _http: HttpClient) { }

  crearCuestionario(modeloCuestionario: CuestionarioModule, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloCuestionario)
    console.log(parametros)
    return this._http.post(this.url + '/agregarCuestionario', parametros, { headers: headersToken })
  }
  eliminarCuestionario(idCuestionario: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.delete(this.url + '/eliminarCuestionario/' + idCuestionario, { headers: headersToken })
  }
  editarCuestionario(modeloCuestionario: CuestionarioModule, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.put(this.url + '/editarCuestionario/' + modeloCuestionario._id, modeloCuestionario, { headers: headersToken })
  }
  agregarPreguntas(idCuestionario: String, modeloCuestionario: PreguntasModel, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloCuestionario)
    return this._http.put(this.url + '/agregarPreguntas/' + idCuestionario, parametros, { headers: headersToken })
  }
  editarPreguntas(idCuestionario: String, modeloCuestionario: PreguntasModel, token: any): Observable<any> {
    // desahbilitar todos los campos que no sean de pregunta
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloCuestionario)
    console.log(parametros)
    return this._http.put(this.url + '/editarPreguntas/' + idCuestionario, parametros, { headers: headersToken })
  }
  eliminarPreguntas(idCuestionario: String, modeloCuestionario: PreguntasModel, token: any): Observable<any> {
    // desahbilitar todos los campos que no sean de pregunta
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloCuestionario)
    console.log("parametros" + parametros)
    return this._http.put(this.url + '/eliminarPreguntas/' + idCuestionario, parametros, { headers: headersToken })
  }
  buscarPorId(token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + '/buscarPorId', { headers: headersToken })
  }

  buscarSoloPorId(idCuestionario: String): Observable<any> {
    console.log(idCuestionario)
    return this._http.get(this.url + '/buscarSoloPorId/' + idCuestionario, { headers: this.headersVariable })
  }

  buscarPreguntas(idCuestionario: String): Observable<any> {
    return this._http.get(this.url + '/preguntasEncontradas/' + idCuestionario, { headers: this.headersVariable })
  }
  buscarPreguntasId(idCuestionario: String, modeloCuestionario: PreguntasModel): Observable<any> {
    let parametros = JSON.stringify(modeloCuestionario)
    console.log(parametros)
    return this._http.post(this.url + '/buscarPreguntaId/' + idCuestionario, parametros, { headers: this.headersVariable })
  }

  buscarPorCurso(idCurso: String): Observable<any> {
    return this._http.get(this.url + '/burcarPorCurso/' + idCurso, { headers: this.headersVariable })
  }

  responderCuestionario(respuestas: RespuestasModel,idCuestionario: String, token: any): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(respuestas)
    console.log(parametros)
    return this._http.post(this.url + '/respuestasAlumno/'+idCuestionario, parametros, { headers: headersToken})
  }

  obtenerToken() {
    var token2 = localStorage.getItem('token');
    if (token2 != undefined) {
      this.token = token2
    } else {
      this.token = "";
    }
    return this.token;
  }

  obtenerIdentidad() {
    var identidad2 = JSON.parse(localStorage.getItem('identidad') || '{}');
    if (identidad2 != undefined) {
      this.identidad = identidad2
    } else if (identidad2 == undefined) {
      this.identidad = null;
    }
    return this.identidad
  }
}
