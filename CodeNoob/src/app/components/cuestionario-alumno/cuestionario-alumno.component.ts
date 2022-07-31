import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuestionarioModule } from 'src/app/models/cuestionario.models';
import { RespuestasModel } from 'src/app/models/respuestas.model';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cuestionario-alumno',
  templateUrl: './cuestionario-alumno.component.html',
  styleUrls: ['./cuestionario-alumno.component.scss']
})
export class CuestionarioAlumnoComponent implements OnInit {

  public respuestas: RespuestasModel;
  public respuestasInst: any='';
  public token: any;
  public validation: Boolean;
  public idCuestionario: String
  public cuestionarioModelGet: CuestionarioModule;
  public cuestionarioModelPut: CuestionarioModule;

  constructor(public _cuestionarioService: CuestionarioService, public _activatedRoute: ActivatedRoute) {
    this.cuestionarioModelGet= new CuestionarioModule("", "", "", [{ pregunta: "", respuesta: "", puntosPregunta: 0 }], 0, "", "")
    this.cuestionarioModelPut = new CuestionarioModule("", "", "", [{ pregunta: "", respuesta: "", puntosPregunta: 0 }], 0, "", "")
    this.respuestas=new RespuestasModel([]);
    this.token=_cuestionarioService.obtenerToken();
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getPreguntas(dataRuta.get("idCuestionario"))
      this.idCuestionario = dataRuta.get("idCuestionario")
      this.buscarCuestionario()
    })
  }

  responderCuestionario(){
    this.respuestasInst=document.getElementsByName("respuesta");
    console.log(this.respuestasInst)
    console.log(this.respuestasInst.length)
    for(let i = 0; i < this.respuestasInst.length; i++){
      this.respuestas.respuestas.push(this.respuestasInst[i].value)
    }
    console.log(this.respuestas.respuestas)
    //este if no funciona, tenes que corroborar su el array lleva algo o si no y ahi ya funcionaria
    if(this.respuestas.respuestas===['', '', '']){
      Swal.fire({
        icon: 'error',
        title: '¡Mejor suerte a la proxima!',
        text: 'Aunque fallaste aun puedes mejorar!'
      })
    }else{
      Swal.fire({
        icon: 'success',
        title: '¡Excelente!',
        text: 'Tus respuestas son correctas'
      })
    }
    this._cuestionarioService.responderCuestionario(this.respuestas, this.idCuestionario, this.token).subscribe({
      next: (response)=>{

      },
      error: (err) => { console.log(err) }
    })
  }

  getPreguntas(idCuestionario: String) {
    this._cuestionarioService.buscarPreguntas(idCuestionario).subscribe({
      next: (res) => {
        this.cuestionarioModelPut = res.pregunta
        console.log("items"+this.cuestionarioModelPut)
        if (this.cuestionarioModelPut==null) {
          this.validation = false
          console.log("Sin preguntas en el cuestionario "+this.validation)
        } else {
          this.validation = true
          console.log("Con preguntas en el cuestionario "+this.validation)
        }
      }, error: (err) => { console.log(err) }
    })
  }

  buscarCuestionario(){
    this._cuestionarioService.buscarSoloPorId(this.idCuestionario).subscribe({
      next: (res) => {
      this.cuestionarioModelGet = res.cuestionario;
      return this.cuestionarioModelGet
    }, error: (err) => { console.log(err) }})
  }

}
