import { Component, OnInit } from '@angular/core';
import { AsignacionService } from 'src/app/services/asignacion.service';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-listar-cursos-asignados',
  templateUrl: './listar-cursos-asignados.component.html',
  styleUrls: ['./listar-cursos-asignados.component.scss'],
  providers: [AsignacionService, CursosService]
})
export class ListarCursosAsignadosComponent implements OnInit {

  public token: any;
  public validation: Boolean = true;
  public cursos: any = [{ nombreCurso: String, _id: String }]

  constructor(public _asignacionService: AsignacionService, public _cursosService: CursosService) {
    this.token = _asignacionService.obtenerToken();
  }

  ngOnInit(): void {
    this.getCursos()
  }

  getCursos() {
    this._asignacionService.buscarCursosAlumno(this.token).subscribe({
      next: (res) => {
        if (res.Asignacion === 0) {
          this.validation = false
          console.log("Datos vacios")
        } else {
          for (let cursos of res.Asignacion) {
            this._cursosService.obtenerCursoId(cursos.idCurso, this.token).subscribe({
              next: (res) => {
                console.log("cursos" + cursos)
                this.cursos.push({ nombreCurso: res.Curso.nombreCurso, _id: res.Curso._id })
              }, error: (err: any) => { console.log(err) }
            })
          }
        }
      }, error: (err: any) => { console.log(err) }

    })
  }
}
