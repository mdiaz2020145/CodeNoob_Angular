import { Component, OnInit } from '@angular/core';
import { CuestionarioModule } from 'src/app/models/cuestionario.models';
import { Cursos } from 'src/app/models/cursos.model';
import { CuestionarioService } from 'src/app/services/cuestionario.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.scss'],
  providers: [CuestionarioService, CursosService]
})
export class CuestionarioComponent implements OnInit {

  public cuestionarioModelPost: CuestionarioModule;
  public cuestionarioModelGetId: CuestionarioModule;
  public cuestionarioModelPut: CuestionarioModule;
  public cursoModelGet: any;
  public token: any;
  public validation: Boolean;

  constructor(public _cuestionarioService: CuestionarioService, public _cursoService: CursosService) {
    this.cuestionarioModelPost = new CuestionarioModule("", "", "", [{ pregunta: "", respuesta: "", puntosPregunta: 0 }], 0, "", "")
    this.cuestionarioModelPut = new CuestionarioModule("", "", "", [{ pregunta: "", respuesta: "", puntosPregunta: 0 }], 0, "", "")
    this.token = _cuestionarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getCuestionariosID();
  }

  getCuestionariosID() {
    this._cuestionarioService.buscarPorId(this.token).subscribe({
      next: (res) => {
        console.log(res.cuestionario)
        if (res.cuestionario == 0) {
          this.validation = false;
          this.cuestionarioModelGetId = JSON.parse(JSON.stringify(res.cuestionario))
          console.log("Datos vacios")
        } else {
          this.validation = true;
          this.cuestionarioModelGetId = JSON.parse(JSON.stringify(res.cuestionario))
          console.log("cuestionario model get" + this.cuestionarioModelGetId)
        }
      },
      error: err => console.log(err)
    })
  }

  agregarCuestionario() {
    this._cuestionarioService.crearCuestionario(this.cuestionarioModelPost, this.token).subscribe({
      next: (res) => {
        this.getCuestionariosID();
      },
      error: err => console.log(err)
    })
  }

  putCuestionario() {
    this._cuestionarioService.editarCuestionario(this.cuestionarioModelPut, this.token).subscribe({
      next: (res) => {
        this.getCuestionariosID();
      },
      error: err => console.log(err)
    })
  }

  deleteCuestionario(idCuestionario: String) {
    this._cuestionarioService.eliminarCuestionario(idCuestionario, this.token).subscribe({
      next: (res) => {
        this.getCuestionariosID();
      },
      error: err => console.log(err)
    })
  }

  listarCursos() {
    this._cursoService.obtenerCursosCreados(this.token).subscribe({
      next: (res) => {
        if (res == 0) {
          console.log("Datos vacios")
          this.validation = false
        } else {
          this.validation = true;
          this.cursoModelGet = res.Curso;
        }
      },
      error: err => console.log(err)
    })
  }

  listarCuestionarioPut(idCuestionario: String) {
    this._cuestionarioService.buscarSoloPorId(idCuestionario).subscribe({
      next: (res) => {
        this.cuestionarioModelPut = res.cuestionario
        this.listarCursos()
      },
      error: err => console.log(err)
    })
  }

}

