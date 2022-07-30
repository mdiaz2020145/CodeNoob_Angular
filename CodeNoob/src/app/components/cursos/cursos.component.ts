import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/models/cursos.model';
import { Asignacion } from 'src/app/models/asignacion.model';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]
})

export class CursosComponent implements OnInit {

  public cursoModelGet: Cursos;
  public cursoModelGetId: Cursos;
  public cursoModelPost: Cursos;
  public asignacionModelPost: Asignacion;
  public asignacionExitosa: any;
  public token: any;
  public validation: Boolean = true;


  constructor(public _cursosService: CursosService) {
    this.cursoModelGetId = new Cursos('', '', '', '')
    this.cursoModelPost = new Cursos('', '', '', '')
    this.asignacionModelPost = new Asignacion('', '', '')
    this.token = _cursosService.obtenerToken();
  }

  ngOnInit(): void {
    this.obtenerCursos()
  }

  obtenerCursos() {
    this._cursosService.obtenerCursos().subscribe({
      next: (response) => {
        if (response == 0) {
          console.log("Sin cursos que mostrar")
          this.validation = false;
        } else {
          this.validation = true;
          this.cursoModelGet = response.Cursos;
          console.log("Cursos " + this.cursoModelGet)
        }
      },
      error: (err: any) => { console.log(err) }
    })
  }

  agregarCurso() {
    this._cursosService.agregarCurso(this.cursoModelPost, this.token).subscribe({
      next: (response) => {
        this.obtenerCursos();
      },
      error: (err: any) => { console.log(err) }
    })
  }

  editarCurso() {
    this._cursosService.editarCurso(this.cursoModelGetId, this.token).subscribe({
      next: (response) => {
        this.obtenerCursos();
      },
      error: (err: any) => { console.log(err) }
    })
  }

  eliminarCurso(idCurso) {
    this._cursosService.eliminarCurso(idCurso, this.token).subscribe({
      next: (response) => {
        this.obtenerCursos();
      },
      error: (err: any) => { console.log(err) }
    })
  }

  asignacion(idCurso) {
    this._cursosService.asignarCurso(idCurso, this.token).subscribe({
      next: (response) => {
        console.log(response.Asignacion)
        if (response.Asignacion == "n") {
          Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            text: 'No puedes asignarte al mismo curso dos veces',
          })
        } else {
          Swal.fire(
            '¡Muy bien!',
            'Te has asignado correctamente',
            'success'
          )
        }
      },
      error: (err: any) => { console.log(err) }
    })
  }

  obtenerCursoId(idCurso) {
    this._cursosService.obtenerCursoId(idCurso, this.token).subscribe({
      next: (response) => {
        this.cursoModelGetId = response.Curso
      },
      error: (err: any) => { console.log(err) }
    })
  }

}
