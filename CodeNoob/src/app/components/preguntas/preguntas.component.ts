import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioModule } from 'src/app/models/cuestionario.models';
import { PreguntasModel } from 'src/app/models/preguntas.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss'],
  providers: [CuestionarioService]
})
export class PreguntasComponent implements OnInit {

  public cuestionarioModelPost: CuestionarioModule;
  public cuestionarioModelGet: CuestionarioModule;
  public cuestionarioModelPut: CuestionarioModule;
  public preguntasPost: PreguntasModel;
  public preguntasGet: PreguntasModel;
  public preguntasGetID: PreguntasModel;
  public preguntasDelete: PreguntasModel;
  public token: any;
  public validation: Boolean;
  public idCuestionario: String

  constructor(public _cuestionarioService: CuestionarioService, public _activatedRoute: ActivatedRoute) {
    this.cuestionarioModelPost = new CuestionarioModule("", "", "", [{ pregunta: "", respuesta: "", puntosPregunta: 0 }], 0, "", "")
    this.cuestionarioModelGet = new CuestionarioModule("", "", "", [{ pregunta: "", respuesta: "", puntosPregunta: 0 }], 0, "", "")
    this.cuestionarioModelPut = new CuestionarioModule("", "", "", [{ pregunta: "", respuesta: "", puntosPregunta: 0 }], 0, "", "")
    this.preguntasPost = new PreguntasModel("", "", "", "", 0)
    this.preguntasGet = new PreguntasModel("", "", "", "", 0)
    this.preguntasGetID = new PreguntasModel("", "", "", "", 0)
    this.preguntasDelete = new PreguntasModel("", "", "", "", 0)
    this.token = _cuestionarioService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      console.log(dataRuta.get("idCuestionario"))
      this.getPreguntas(dataRuta.get("idCuestionario"))
      this.idCuestionario = dataRuta.get("idCuestionario")
    })
  }

  getPreguntas(idCuestionario: String) {
    this._cuestionarioService.buscarPreguntas(idCuestionario).subscribe({
      next: (res) => {
        if (res.pregunta == 0) {
          console.log('Datos vacios')
          this.validation = false
        } else {
          this.validation = true
          this.cuestionarioModelPut = res.pregunta
        }
      }, error: (err) => { console.log(err) }
    })
  }

  postPregunta() {
    console.log("preguntas  ")
    this._cuestionarioService.agregarPreguntas(this.idCuestionario, this.preguntasPost, this.token).subscribe({
      next: (res) => {
        this.getPreguntas(this.idCuestionario)
      }, error: (err) => { console.log(err) }
    })
  }

  putPregunta() {

    this._cuestionarioService.editarPreguntas(this.idCuestionario, this.preguntasGet, this.token).subscribe({
      next: (res) => {
        this.getPreguntas(this.idCuestionario)
      }, error: (err) => { console.log(err) }
    })
  }

  deletePregunta() {
    this._cuestionarioService.eliminarPreguntas(this.idCuestionario, this.preguntasDelete, this.token).subscribe({
      next: (res) => {
        this.getPreguntas(this.idCuestionario)
      }, error: (err) => { console.log(err) }
    })
  }

  buscarPreguntaId(idPregunta, pregunta) {
    this.preguntasGetID._id = idPregunta;
    this.preguntasGetID.pregunta = pregunta
    this._cuestionarioService.buscarPreguntasId(this.idCuestionario, this.preguntasGetID).subscribe({
      next: (res) => {
        this.preguntasGet = res.pregunta;
        this.preguntasGet.preguntaAnterior = res.pregunta.pregunta
        console.log(res.pregunta.pregunta)
      }, error: (err) => { console.log(err) }
    })
  }
}
